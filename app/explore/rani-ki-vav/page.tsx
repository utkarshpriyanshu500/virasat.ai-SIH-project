import Navbar from "@/components/Navbar";

export default function RaniKiVavPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3]">
      <Navbar />

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a05a2c]">
              Indian Heritage Monument
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
              Rani Ki Vav
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 Patan, Gujarat, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/rani-ki-vav.jpg"
              alt="Rani Ki Vav"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Rani Ki Vav
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              Rani Ki Vav is a magnificent stepwell located in Patan, Gujarat.
              It is renowned for its elaborate architecture, intricate
              sculptures and detailed underground structure.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The stepwell was designed as a functional water structure while
              also serving as an important example of the artistic and
              architectural traditions of medieval Gujarat.
            </p>
          </section>

          {/* History */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Rani Ki Vav is traditionally attributed to Queen Udayamati and
              was constructed in memory of her husband, King Bhima I of the
              Chaulukya, or Solanki, dynasty.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              Over time, the stepwell was affected by flooding and became
              buried beneath layers of sediment. Archaeological efforts later
              helped reveal and conserve the remarkable structure visible
              today.
            </p>
          </section>

          {/* Architecture */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Architecture
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Stepwell Design
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The monument descends through multiple levels using a
                  carefully planned sequence of steps, pillars, galleries and
                  pavilions leading towards the water level.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Intricate Sculptures
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Its walls and pillars contain a large collection of finely
                  carved sculptures depicting deities, mythological figures
                  and scenes from everyday life.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Seven Levels
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The stepwell is organized into seven levels of steps and
                  architectural elements, creating a dramatic transition from
                  the surface towards the water.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Maru-Gurjara Tradition
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The monument reflects the highly decorative architectural
                  traditions associated with medieval Gujarat and the
                  Chaulukya period.
                </p>
              </div>

            </div>
          </section>

          {/* Sculptures */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Sculptures & Symbolism
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Rani Ki Vav contains an extraordinary range of sculptural
              decoration. Figures of Hindu deities, celestial beings and other
              artistic motifs cover many of its architectural surfaces.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              The sculptures demonstrate the skill of medieval Indian
              craftsmen and show how architecture, religion and artistic
              expression were closely connected.
            </p>
          </section>

          {/* Water Management */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Water & Engineering
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Stepwells were important water-management structures in parts of
              western India. Rani Ki Vav demonstrates how practical water
              storage could be combined with sophisticated architecture and
              artistic design.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Rani Ki Vav represents the architectural, artistic and
              engineering achievements of medieval Gujarat. It also reflects
              the historical importance of water architecture in Indian
              society.
            </p>
          </section>

          {/* UNESCO */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              World Heritage Recognition
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Rani Ki Vav was inscribed on the UNESCO World Heritage List in
              2014. Its exceptional architecture and sculptural richness make
              it one of the most significant surviving stepwells of India.
            </p>
          </section>

          {/* Today */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Rani Ki Vav Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Today, Rani Ki Vav is a protected heritage monument and an
              important cultural destination in Gujarat. Conservation and
              archaeological work help preserve the monument for future
              generations.
            </p>
          </section>

          {/* Source */}
          <section className="mt-14 rounded-2xl bg-[#eadbc5] p-6">
            <h2 className="text-xl font-bold text-[#3b2416]">
              Source & Verification
            </h2>

            <p className="mt-3 leading-7 text-[#654b3b]">
              Heritage information should be verified using authoritative
              cultural institutions, government sources, archaeological
              records and reliable academic references.
            </p>

            <p className="mt-3 text-sm text-[#7b5f4d]">
              Primary references can include the Archaeological Survey of India,
              Ministry of Culture, Government of India, and UNESCO World
              Heritage resources.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}