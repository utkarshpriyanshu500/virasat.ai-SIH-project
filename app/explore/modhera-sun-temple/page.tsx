import Navbar from "@/components/Navbar";

export default function ModheraSunTemplePage() {
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
              Modhera Sun Temple
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 Modhera, Gujarat, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/modhera-sun-temple.jpg"
              alt="Modhera Sun Temple"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Modhera Sun Temple
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The Modhera Sun Temple is a historic temple dedicated to the Sun
              God, Surya, located in Modhera, Gujarat. It is celebrated for
              its sophisticated architecture, detailed carvings and carefully
              planned relationship between the temple and its surrounding
              spaces.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The temple complex is an outstanding example of the architectural
              traditions that developed in Gujarat during the medieval period.
            </p>
          </section>

          {/* History */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              The temple was constructed during the reign of King Bhima I of
              the Chaulukya, or Solanki, dynasty in the early eleventh century.
              Its design reflects the artistic and architectural achievements
              of medieval Gujarat.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              Although the temple is no longer an active place of worship, the
              monument has been preserved as an important archaeological and
              cultural site.
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
                  Surya Kund
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Surya Kund is a large stepped water tank located in front of
                  the temple. Its geometric arrangement of steps and small
                  shrines makes it one of the most distinctive features of the
                  complex.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Sabha Mandapa
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The Sabha Mandapa, or assembly hall, contains richly carved
                  pillars and decorative elements that demonstrate the
                  craftsmanship of the period.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Gudha Mandapa
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The Gudha Mandapa forms the main shrine hall of the temple
                  complex and contains elaborate architectural and sculptural
                  details.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Solar Orientation
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The temple&apos;s design demonstrates a carefully planned
                  relationship between the structure, its orientation and the
                  movement of sunlight.
                </p>
              </div>

            </div>
          </section>

          {/* Sculptures */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Sculptures & Carvings
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              The temple is richly decorated with sculptures of deities,
              mythological figures, dancers, musicians and ornamental motifs.
              These carvings provide valuable insight into the artistic
              traditions of medieval Gujarat.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              The detailed stonework demonstrates the skill of craftsmen who
              combined architectural structure with extensive decorative
              sculpture.
            </p>
          </section>

          {/* Surya Tradition */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Connection with Surya
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              The temple was dedicated to Surya, the Hindu Sun God. Its
              architectural planning and imagery reflect the religious
              importance of the Sun in the cultural traditions associated with
              the temple.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              The Modhera Sun Temple represents the architectural, sculptural
              and religious heritage of medieval Gujarat. Its combination of
              temple architecture, water architecture and astronomical
              orientation makes it an important cultural monument.
            </p>
          </section>

          {/* Protected Monument */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Heritage Protection
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              The Modhera Sun Temple is protected as an archaeological monument
              and is maintained for its historical and architectural
              significance. Conservation efforts help preserve its stone
              architecture and sculptures.
            </p>
          </section>

          {/* Today */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Modhera Sun Temple Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Today, the temple is an important heritage destination in
              Gujarat. Visitors can explore its temple complex, stepped tank,
              sculptures and architectural details while learning about the
              history of medieval Indian temple architecture.
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
              Ministry of Culture, Government of India, and recognized
              heritage institutions.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}