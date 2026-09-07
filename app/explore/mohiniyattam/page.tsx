import Navbar from "@/components/Navbar";

export default function MohiniyattamPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3]">
      <Navbar />

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a05a2c]">
              Indian Classical Dance
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
              Mohiniyattam
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 Kerala, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/mohiniyattam.jpg"
              alt="Mohiniyattam"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Mohiniyattam
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              Mohiniyattam is one of India&apos;s major classical dance
              traditions and originates from Kerala. The dance is known for
              graceful movements, gentle expressions and a distinctive flowing
              style.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The name Mohiniyattam is associated with Mohini, the enchanting
              form of Lord Vishnu in Hindu mythology. Devotional themes and
              expressive storytelling are important parts of the tradition.
            </p>
          </section>

          {/* History */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Mohiniyattam developed in Kerala within a rich environment of
              temple arts, music and performance traditions. The dance evolved
              through different periods and received important institutional
              support during its modern revival.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              Artists and cultural institutions played an important role in
              documenting, teaching and presenting Mohiniyattam as a recognized
              classical dance tradition.
            </p>
          </section>

          {/* Key Features */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Key Features
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Graceful Movements
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Mohiniyattam is characterized by gentle, flowing movements
                  and controlled body motion that create its distinctive
                  graceful appearance.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Lasya
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The dance strongly emphasizes the lasya aspect of performance,
                  associated with softness, elegance and expressive movement.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Expressive Abhinaya
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Facial expressions, hand gestures and body movements help the
                  dancer communicate emotions and tell stories.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Swaying Movements
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Characteristic side-to-side and flowing movements of the body
                  contribute to the visual identity of Mohiniyattam.
                </p>
              </div>

            </div>
          </section>

          {/* Storytelling */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Dance & Storytelling
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Mohiniyattam uses movement, expression and gestures to present
              stories and emotions. Many traditional compositions draw from
              devotional and mythological themes.
            </p>
          </section>

          {/* Music */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Music & Instruments
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Music is an important part of Mohiniyattam performance.
              Traditional accompaniment can include vocal music along with
              instruments such as the mridangam, veena, violin, flute and
              cymbals.
            </p>
          </section>

          {/* Costume */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Costume & Jewellery
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              The traditional Mohiniyattam costume is closely associated with
              Kerala&apos;s cultural aesthetic. Dancers commonly wear a white
              or off-white costume with golden borders, complemented by
              traditional jewellery and hair decoration.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Mohiniyattam represents an important part of Kerala&apos;s
              performing arts heritage. Its connection with regional music,
              literature, devotional traditions and classical dance makes it a
              significant part of India&apos;s cultural heritage.
            </p>
          </section>

          {/* Today */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Mohiniyattam Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Mohiniyattam is taught and performed across India and in
              international cultural settings. Contemporary dancers continue
              to preserve its traditional vocabulary while exploring new
              themes and presentation formats.
            </p>
          </section>

          {/* Source */}
          <section className="mt-14 rounded-2xl bg-[#eadbc5] p-6">
            <h2 className="text-xl font-bold text-[#3b2416]">
              Source & Verification
            </h2>

            <p className="mt-3 leading-7 text-[#654b3b]">
              Heritage information should be verified using authoritative
              cultural institutions, government sources and reliable academic
              references.
            </p>

            <p className="mt-3 text-sm text-[#7b5f4d]">
              Primary references can include the Ministry of Culture,
              Government of India, Sangeet Natak Akademi and recognized
              institutions associated with Kerala&apos;s classical arts.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}