
"use client";

import { useEffect, useState } from "react";
import HeritageCard from "@/components/HeritageCard";
import { supabase } from "@/lib/supabase";

type Heritage = {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string | null;
  slug: string;
  image: string | null;
};

export default function FeaturedHeritage() {
  const [heritage, setHeritage] = useState<Heritage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedHeritage() {
      const { data, error } = await supabase
        .from("heritage")
        .select(
          "id, name, category, location, description, slug, image"
        )
        .order("id", { ascending: true })
        .limit(3);

      if (error) {
        console.error("Featured heritage error:", error);
      } else {
        setHeritage(data || []);
      }

      setLoading(false);
    }

    fetchFeaturedHeritage();
  }, []);

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Explore India
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#3b2416] md:text-5xl">
            Featured Heritage
          </h2>

          <p className="mt-4 max-w-2xl text-[#654b3b]">
            Discover traditions, crafts and places that tell the story of
            India&apos;s cultural diversity.
          </p>
        </div>

        {loading ? (
          <div className="py-12 text-center">
            <p className="font-semibold text-[#7b3f00]">
              Loading featured heritage...
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {heritage.map((item) => (
              <HeritageCard
                key={item.id}
                name={item.name}
                category={item.category}
                location={item.location}
                description={item.description || ""}
                slug={item.slug}
                image={item.image || undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}