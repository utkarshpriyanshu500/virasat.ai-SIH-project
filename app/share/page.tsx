"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";

type SubmissionType = "community" | "artisan";

type FormData = {
  name: string;
  title: string;
  category: string;
  location: string;
  description: string;
  contact: string;
  latitude: string;
  longitude: string;
};

export default function SharePage() {
  const [user, setUser] = useState<any>(null);
  const [checkingUser, setCheckingUser] = useState(true);

  const [submissionType, setSubmissionType] =
    useState<SubmissionType>("community");

  const [form, setForm] = useState<FormData>({
    name: "",
    title: "",
    category: "",
    location: "",
    description: "",
    contact: "",
    latitude: "",
    longitude: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    setCheckingUser(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);
    setCheckingUser(false);
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5 MB.");
      return;
    }

    setError("");
    setImageFile(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  }

  function validateForm() {
    if (!form.name.trim()) {
      return "Please enter your name.";
    }

    if (!form.title.trim()) {
      return "Please enter the heritage title.";
    }

    if (!form.category.trim()) {
      return "Please select a category.";
    }

    if (!form.location.trim()) {
      return "Please enter the location.";
    }

    if (!form.description.trim()) {
      return "Please enter a description.";
    }

    if (form.latitude.trim()) {
      const latitude = Number(form.latitude);

      if (
        Number.isNaN(latitude) ||
        latitude < -90 ||
        latitude > 90
      ) {
        return "Latitude must be between -90 and 90.";
      }
    }

    if (form.longitude.trim()) {
      const longitude = Number(form.longitude);

      if (
        Number.isNaN(longitude) ||
        longitude < -180 ||
        longitude > 180
      ) {
        return "Longitude must be between -180 and 180.";
      }
    }

    return null;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!user) {
      setError("Please log in before submitting a heritage entry.");
      return;
    }

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);

    try {
      let imageUrl: string | null = null;

      // Upload image if selected.
      if (imageFile) {
        const fileExtension =
          imageFile.name.split(".").pop()?.toLowerCase() || "jpg";

        const fileName = `${crypto.randomUUID()}.${fileExtension}`;
        const filePath = `submissions/${user.id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("heritage-images")
          .upload(filePath, imageFile, {
            cacheControl: "3600",
            upsert: false,
            contentType: imageFile.type,
          });

        if (uploadError) {
          console.error("Image upload error:", uploadError);

          throw new Error(
            `Image upload failed: ${uploadError.message}`
          );
        }

        const {
          data: { publicUrl },
        } = supabase.storage
          .from("heritage-images")
          .getPublicUrl(filePath);

        imageUrl = publicUrl;
      }

      // Convert coordinates to numbers when provided.
      const latitude = form.latitude.trim()
        ? Number(form.latitude)
        : null;

      const longitude = form.longitude.trim()
        ? Number(form.longitude)
        : null;

      // Insert submission into Supabase.
      const { error: insertError } = await supabase
        .from("heritage_submissions")
        .insert({
          user_id: user.id,
          submission_type: submissionType,
          name: form.name.trim(),
          title: form.title.trim(),
          category: form.category.trim(),
          location: form.location.trim(),
          description: form.description.trim(),
          contact: form.contact.trim() || null,
          latitude,
          longitude,
          image: imageUrl,
          status: "pending",
        });

      if (insertError) {
        console.error("Submission insert error:", insertError);

        throw new Error(
          `Could not submit your heritage entry: ${insertError.message}`
        );
      }

      setMessage(
        "Your heritage entry has been submitted successfully! It is now waiting for verification."
      );

      setForm({
        name: "",
        title: "",
        category: "",
        location: "",
        description: "",
        contact: "",
        latitude: "",
        longitude: "",
      });

      setImageFile(null);
      setImagePreview(null);
    } catch (err: any) {
      console.error("Submission error:", err);

      setError(
        err?.message ||
          "Something went wrong while submitting your heritage entry."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (checkingUser) {
    return (
      <main className="min-h-screen bg-transparent">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-lg font-semibold text-[#7b3f00]">
            Checking your account...
          </p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-transparent">
        <Navbar />

        <section className="mx-auto max-w-3xl px-6 py-20">
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3e4cf] text-3xl">
              🔒
            </div>

            <h1 className="mt-6 text-3xl font-bold text-[#3b2416]">
              Login Required
            </h1>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#654b3b]">
              Please log in to share Indian cultural heritage with
              the Virasat.ai community.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/login"
                className="rounded-full bg-[#7b3f00] px-6 py-3 font-semibold text-white transition hover:bg-[#5f3000]"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="rounded-full border border-[#7b3f00] px-6 py-3 font-semibold text-[#7b3f00] transition hover:bg-[#7b3f00] hover:text-white"
              >
                Create Account
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const isArtisan = submissionType === "artisan";

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Preserve & Share
          </p>

          <h1 className="mt-3 text-4xl font-bold text-[#3b2416] md:text-5xl">
            Share Indian Heritage
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#654b3b]">
            Help us document India&apos;s rich cultural heritage by
            sharing a tradition, craft, textile, dance, music,
            monument, or other cultural treasure.
          </p>
        </div>

        {/* How it works */}
        <div className="mt-8 rounded-2xl border border-[#e2cdb0] bg-[#fffaf2] p-5">
          <div className="flex gap-4">
            <div className="text-2xl">🏛️</div>

            <div>
              <h2 className="font-bold text-[#3b2416]">
                How it works
              </h2>

              <p className="mt-1 text-sm leading-6 text-[#654b3b]">
                Submit your heritage information. Our verification
                system will screen the submission, and an admin will
                make the final decision before it appears publicly.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-3xl bg-white p-6 shadow-sm md:p-10"
        >
          {/* Submission type */}
          <div>
            <label className="text-sm font-bold text-[#3b2416]">
              What are you sharing?
            </label>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {/* Community */}
              <button
                type="button"
                onClick={() => {
                  setSubmissionType("community");
                  setForm((previous) => ({
                    ...previous,
                    category: "",
                  }));
                }}
                className={`rounded-2xl border-2 p-5 text-left transition ${
                  submissionType === "community"
                    ? "border-[#7b3f00] bg-[#fff8ed]"
                    : "border-[#e5d5bf] bg-white hover:border-[#c69b6d]"
                }`}
              >
                <div className="text-3xl">🏘️</div>

                <h3 className="mt-3 text-lg font-bold text-[#3b2416]">
                  Community Heritage
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#654b3b]">
                  Share a cultural tradition, dance, music, monument,
                  textile, craft, or other heritage from your
                  community.
                </p>
              </button>

              {/* Artisan */}
              <button
                type="button"
                onClick={() => {
                  setSubmissionType("artisan");
                  setForm((previous) => ({
                    ...previous,
                    category: "",
                  }));
                }}
                className={`rounded-2xl border-2 p-5 text-left transition ${
                  submissionType === "artisan"
                    ? "border-[#7b3f00] bg-[#fff8ed]"
                    : "border-[#e5d5bf] bg-white hover:border-[#c69b6d]"
                }`}
              >
                <div className="text-3xl">🧵</div>

                <h3 className="mt-3 text-lg font-bold text-[#3b2416]">
                  Artisan Heritage
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#654b3b]">
                  Share information about traditional crafts,
                  artisans, handmade products, or regional artistic
                  practices.
                </p>
              </button>
            </div>
          </div>

          {/* Basic Information */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#3b2416]">
              Basic Information
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-[#3b2416]"
                >
                  Your Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={
                    isArtisan
                      ? "Enter your name or artisan name"
                      : "Enter your name"
                  }
                  className="mt-2 w-full rounded-xl border border-[#d9c2a3] bg-[#fffdf9] px-4 py-3 text-[#3b2416] outline-none transition focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="text-sm font-semibold text-[#3b2416]"
                >
                  Contact Information
                </label>

                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder={
                    isArtisan
                      ? "Email or phone (optional)"
                      : "Email or phone (optional)"
                  }
                  className="mt-2 w-full rounded-xl border border-[#d9c2a3] bg-[#fffdf9] px-4 py-3 text-[#3b2416] outline-none transition focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
                />
              </div>
            </div>
          </div>

          {/* Heritage / Artisan Information */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#3b2416]">
              {isArtisan
                ? "Artisan & Craft Information"
                : "Heritage Information"}
            </h2>

            <div className="mt-5 space-y-5">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="text-sm font-semibold text-[#3b2416]"
                >
                  {isArtisan ? "Craft / Heritage Title *" : "Heritage Title *"}
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  placeholder={
                    isArtisan
                      ? "e.g. Banarasi Silk Weaving"
                      : "e.g. Kajri Folk Singing"
                  }
                  className="mt-2 w-full rounded-xl border border-[#d9c2a3] bg-[#fffdf9] px-4 py-3 text-[#3b2416] outline-none transition focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-semibold text-[#3b2416]"
                >
                  Category *
                </label>

                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-[#d9c2a3] bg-[#fffdf9] px-4 py-3 text-[#3b2416] outline-none transition focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
                  required
                >
                  <option value="">Select a category</option>

                  {isArtisan ? (
                    <>
                      <option value="Embroidery">Embroidery</option>
                      <option value="Textile">Textile</option>
                      <option value="Handicraft">Handicraft</option>
                      <option value="Painting">Painting</option>
                      <option value="Pottery">Pottery</option>
                      <option value="Woodcraft">Woodcraft</option>
                      <option value="Metalcraft">Metalcraft</option>
                      <option value="Jewellery">Jewellery</option>
                      <option value="Other">Other</option>
                    </>
                  ) : (
                    <>
                      <option value="Dance">Dance</option>
                      <option value="Music">Music</option>
                      <option value="Folk Music">Folk Music</option>
                      <option value="Monument">Monument</option>
                      <option value="Temple">Temple</option>
                      <option value="Embroidery">Embroidery</option>
                      <option value="Textile">Textile</option>
                      <option value="Handicraft">Handicraft</option>
                      <option value="Painting">Painting</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Festival">Festival</option>
                      <option value="Cuisine">Cuisine</option>
                      <option value="Other">Other</option>
                    </>
                  )}
                </select>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="text-sm font-semibold text-[#3b2416]"
                >
                  Location *
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={handleChange}
                  placeholder={
                    isArtisan
                      ? "e.g. Varanasi, Uttar Pradesh"
                      : "e.g. Mirzapur, Uttar Pradesh"
                  }
                  className="mt-2 w-full rounded-xl border border-[#d9c2a3] bg-[#fffdf9] px-4 py-3 text-[#3b2416] outline-none transition focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="text-sm font-semibold text-[#3b2416]"
                >
                  Description *
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={7}
                  placeholder={
                    isArtisan
                      ? "Describe the craft, traditional techniques, materials used, cultural significance, history, or the artisan/community associated with it..."
                      : "Describe the heritage, its history, cultural importance, traditions, community, or present status..."
                  }
                  className="mt-2 w-full resize-y rounded-xl border border-[#d9c2a3] bg-[#fffdf9] px-4 py-3 leading-7 text-[#3b2416] outline-none transition focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
                  required
                />

                <p className="mt-2 text-xs text-[#7b5f4d]">
                  {isArtisan
                    ? "Please provide meaningful information about the craft or artisan practice."
                    : "Please provide meaningful and accurate information."}
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#3b2416]">
              {isArtisan ? "Craft / Artisan Image" : "Heritage Image"}
            </h2>

            <p className="mt-1 text-sm text-[#654b3b]">
              {isArtisan
                ? "Upload a clear image of the craft, handmade product, artisan work, or traditional practice."
                : "Upload a clear image related to your heritage submission."}
            </p>

            <div className="mt-5 rounded-2xl border-2 border-dashed border-[#d9c2a3] bg-[#fffdf9] p-6">
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-[#654b3b] file:mr-4 file:rounded-full file:border-0 file:bg-[#7b3f00] file:px-5 file:py-2 file:font-semibold file:text-white hover:file:bg-[#5f3000]"
              />

              <p className="mt-2 text-xs text-[#7b5f4d]">
                JPG, PNG, WEBP or other image formats. Maximum 5 MB.
              </p>

              {imagePreview && (
                <div className="mt-5">
                  <p className="mb-2 text-sm font-semibold text-[#3b2416]">
                    Image Preview
                  </p>

                  <img
                    src={imagePreview}
                    alt={
                      isArtisan
                        ? "Selected artisan work"
                        : "Selected heritage"
                    }
                    className="h-64 w-full rounded-2xl object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Coordinates */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#3b2416]">
              Map Location
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#654b3b]">
              {isArtisan
                ? "Coordinates help us place the artisan or craft location on the Virasat.ai map. They are optional."
                : "Coordinates help us place your heritage entry on the Virasat.ai map. They are optional."}
            </p>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="latitude"
                  className="text-sm font-semibold text-[#3b2416]"
                >
                  Latitude
                </label>

                <input
                  id="latitude"
                  name="latitude"
                  type="number"
                  step="any"
                  value={form.latitude}
                  onChange={handleChange}
                  placeholder="e.g. 25.146"
                  className="mt-2 w-full rounded-xl border border-[#d9c2a3] bg-[#fffdf9] px-4 py-3 text-[#3b2416] outline-none transition focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="longitude"
                  className="text-sm font-semibold text-[#3b2416]"
                >
                  Longitude
                </label>

                <input
                  id="longitude"
                  name="longitude"
                  type="number"
                  step="any"
                  value={form.longitude}
                  onChange={handleChange}
                  placeholder="e.g. 82.569"
                  className="mt-2 w-full rounded-xl border border-[#d9c2a3] bg-[#fffdf9] px-4 py-3 text-[#3b2416] outline-none transition focus:border-[#7b3f00] focus:ring-2 focus:ring-[#7b3f00]/10"
                />
              </div>
            </div>
          </div>

          {/* Messages */}
          {error && (
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
              <strong>Error:</strong> {error}
            </div>
          )}

          {message && (
            <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-700">
              <strong>Success:</strong> {message}
            </div>
          )}

          {/* Submit */}
          <div className="mt-10 border-t border-[#eadbc8] pt-8">
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#7b3f00] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#5f3000] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting
                ? "Submitting Heritage..."
                : isArtisan
                ? "Submit Artisan Heritage"
                : "Submit Community Heritage"}
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-[#7b5f4d]">
              By submitting, you confirm that the information you
              provide is intended to contribute to the preservation
              and documentation of Indian cultural heritage.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}