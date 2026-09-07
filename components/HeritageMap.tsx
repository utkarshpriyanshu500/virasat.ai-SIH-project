"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { supabase } from "@/lib/supabase";

type HeritageMapProps = {
  category: string;
};

type HeritageLocation = {
  id: number;
  name: string;
  category: string;
  location: string;
  slug: string;
  latitude: number | null;
  longitude: number | null;
  source: "official" | "community" | "artisan";
};

const markerIcon: L.Icon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function HeritageMap({
  category,
}: HeritageMapProps) {
  const [heritageLocations, setHeritageLocations] = useState<
    HeritageLocation[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeritageLocations() {
      setLoading(true);

      // Fetch official heritage
      const { data: officialData, error: officialError } =
        await supabase
          .from("heritage")
          .select(
            "id, name, category, location, slug, latitude, longitude"
          )
          .order("id", { ascending: true });

      if (officialError) {
        console.error("Official map data error:", officialError);
      }

      // Fetch approved community/artisan submissions
      const { data: submissionData, error: submissionError } =
        await supabase
          .from("heritage_submissions")
          .select(
            "id, submission_type, title, category, location, latitude, longitude"
          )
          .eq("status", "approved")
          .order("id", { ascending: true });

      if (submissionError) {
        console.error("Community map data error:", submissionError);
      }

      // Convert official heritage data
      const officialLocations: HeritageLocation[] = (
        officialData || []
      ).map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        location: item.location,
        slug: item.slug,
        latitude: item.latitude,
        longitude: item.longitude,
        source: "official",
      }));

      // Convert community/artisan submissions
      const communityLocations: HeritageLocation[] = (
        submissionData || []
      ).map((item) => {
        let latitude = item.latitude;
        let longitude = item.longitude;

        // Existing Kajri submission fallback coordinates
        if (
          item.title === "Kajri Folk Singing" &&
          (latitude === null || longitude === null)
        ) {
          latitude = 25.146;
          longitude = 82.569;
        }

        return {
          id: -item.id,
          name: item.title,
          category: item.category,
          location: item.location,
          slug: `community-${item.id}`,
          latitude,
          longitude,
          source:
            item.submission_type === "artisan"
              ? "artisan"
              : "community",
        };
      });

      // Combine both types
      setHeritageLocations([
        ...officialLocations,
        ...communityLocations,
      ]);

      setLoading(false);
    }

    fetchHeritageLocations();
  }, []);

  const filteredLocations =
    category === "All"
      ? heritageLocations
      : heritageLocations.filter(
          (item) => item.category === category
        );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8">
      <div className="mb-8 md:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
          Discover by Location
        </p>

        <h2 className="mt-2 text-4xl font-bold text-[#3b2416]">
          Explore India&apos;s Heritage
        </h2>

        <p className="mt-3 max-w-2xl text-[#654b3b]">
          Discover cultural traditions, monuments, dances and
          crafts across different regions of India.
        </p>
      </div>

      {loading ? (
        <div className="flex h-[550px] items-center justify-center rounded-2xl border border-[#d9c2a3] bg-white shadow-lg">
          <p className="font-semibold text-[#7b3f00]">
            Loading heritage map...
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-[#d9c2a3] shadow-xl">
          <MapContainer
            center={[22.5, 79]}
            zoom={5}
            scrollWheelZoom={true}
            className="h-[420px] w-full sm:h-[480px] md:h-[550px]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filteredLocations
              .filter(
                (item) =>
                  item.latitude !== null &&
                  item.longitude !== null
              )
              .map((item) => {
                const position: [number, number] = [
                  item.latitude as number,
                  item.longitude as number,
                ];

                return (
                  <Marker
                    key={`${item.source}-${item.id}`}
                    position={position}
                    icon={markerIcon}
                  >
                  <Popup>
                    <div className="min-w-[190px]">
                      {item.source !== "official" && (
                        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#a05a2c]">
                          {item.source === "artisan"
                            ? "Artisan Heritage"
                            : "Community Heritage"}
                        </p>
                      )}

                      <h3 className="text-lg font-bold text-[#3b2416]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-[#a05a2c]">
                        {item.category}
                      </p>

                      <p className="mt-2 text-sm text-[#654b3b]">
                        📍 {item.location}
                      </p>

                      <Link
                        href={`/explore/${item.slug}`}
                        className="mt-3 inline-block font-semibold text-[#7b3f00] hover:underline"
                      >
                        Explore →
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      )}

      {!loading && filteredLocations.length === 0 && (
        <p className="mt-4 text-center text-sm text-[#654b3b]">
          No map locations found for this category.
        </p>
      )}
    </section>
  );
}