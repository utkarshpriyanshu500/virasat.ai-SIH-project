export default function CommunityArtisanCard() {
  return (
    <section className="px-6 py-12 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-[#7b3f00] p-8 text-white shadow-lg md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2d2b2]">
                Your Heritage Matters
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Share Your Tradition with the World
              </h2>

              <p className="mt-5 leading-7 text-[#f8e8d8]">
                Do you have a tradition, custom, art form or cultural story
                that deserves to be discovered? Share it with the Virasat.ai
                community and help preserve India&apos;s diverse heritage.
              </p>

              <a
                href="/share"
                className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#7b3f00] transition hover:bg-[#f7f1e3]"
            >
                Share Your Heritage →
            </a>
            </div>

            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-6">
                <div className="text-4xl">🏘️</div>

                <h3 className="mt-4 text-xl font-bold">
                  Communities
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#f8e8d8]">
                  Add local traditions, customs, festivals and stories from
                  your community for others to discover.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <div className="text-4xl">🎨</div>

                <h3 className="mt-4 text-xl font-bold">
                  Artisans
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#f8e8d8]">
                  Showcase your art, craft and skills and let people across
                  India discover your work.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}