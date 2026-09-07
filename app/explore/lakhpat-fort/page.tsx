import Navbar from "@/components/Navbar";

export default function LakhpatFortPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3]">
      <Navbar />

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a05a2c]">
              Indian Heritage Monument
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
              Lakhpat Fort
            </h1>

            <p className="mt-4 text-lg text-[#654b3b]">
              📍 Lakhpat, Kutch, Gujarat, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/lakhpat-fort.jpg"
              alt="Lakhpat Fort"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Lakhpat Fort
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Lakhpat Fort is a historic fortified settlement located near the
              western edge of Gujarat's Kutch region. Surrounded by massive
              stone walls, the settlement stands close to the former course of
              the Indus River and the Arabian Sea.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The fort is closely connected with the history of trade,
              pilgrimage and settlement in Kutch. Its dramatic location and
              surviving walls provide an important glimpse into the region's
              past.
            </p>
          </section>

          {/* History */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Lakhpat developed as a fortified settlement during the late
              eighteenth century. Its strategic position made it significant
              for trade and movement through the Kutch region.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The settlement once had a much larger population and was
              connected to regional commercial networks. Changes in river
              courses, natural disasters and shifts in trade routes contributed
              to its decline.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The devastating earthquake of 1819 further affected the region
              and played an important role in the later history of Lakhpat.
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Architecture & Fortifications
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Lakhpat is best known for its enormous fortified walls, which
              enclose the historic settlement. Built largely from local stone,
              the walls were designed to protect the town and its inhabitants.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🧱</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Massive Walls
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Strong stone fortifications surround much of the historic
                  settlement.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🚪</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Fort Gates
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Gateways controlled movement into and out of the fortified
                  town.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🏜️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Kutch Landscape
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The fort's architecture is strongly connected with the
                  distinctive landscape of western Kutch.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🛡️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Defensive Design
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The fortified enclosure reflects the strategic needs of a
                  historic trading settlement.
                </p>
              </div>

            </div>
          </section>

          {/* Trade */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Lakhpat as a Trading Settlement
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Lakhpat's location was an important factor in its historical
              development. The settlement was connected to trade routes
              passing through Kutch and had links with maritime and inland
              commercial networks.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">🐪</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Land Routes
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Kutch connected different parts of western India with
                  regions farther west.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">⚓</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Maritime Connections
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Its position near historic waterways contributed to the
                  settlement's commercial importance.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">🏪</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Commerce
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Trade helped Lakhpat develop into a prosperous historic
                  settlement.
                </p>
              </div>

            </div>
          </section>

          {/* Religious Heritage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Religious & Cultural Heritage
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Lakhpat is notable not only for its fortifications but also for
              its diverse religious heritage. Historic Hindu, Muslim and Sikh
              places of worship are found within and around the settlement.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Gurdwara Sahib
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Lakhpat is associated with Sikh history and is traditionally
                  linked with Guru Nanak's journey through the region.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Sufi Heritage
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The town contains important Islamic religious heritage,
                  including historic shrines associated with local traditions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Hindu Traditions
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Hindu places of worship form another part of Lakhpat's
                  multicultural historical landscape.
                </p>
              </div>

            </div>
          </section>

          {/* Earthquake */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              The 1819 Earthquake
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The earthquake of 1819 was one of the major natural events to
              shape the history of Lakhpat and the surrounding Kutch region.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The earthquake and associated changes in the landscape affected
              waterways and settlements across the region. Lakhpat's decline
              was influenced by these environmental changes as well as broader
              shifts in trade.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Lakhpat represents the relationship between fortification,
              commerce, geography and cultural exchange in historic Kutch.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Its multicultural heritage makes it particularly valuable for
              understanding how different religious and trading communities
              interacted within the region.
            </p>
          </section>

          {/* Lesser Known Heritage */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              A Lesser-Known Heritage Treasure
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Lakhpat is far less widely known than many of India's major
              forts, yet its enormous walls, dramatic landscape and diverse
              cultural history make it an important heritage destination.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              It is an excellent example of the lesser-known heritage that
              Virasat.ai aims to bring to a wider audience through digital
              exploration.
            </p>
          </section>

          {/* Conservation */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Heritage Protection & Conservation
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The fort and its historic structures require continued
              conservation because of their exposure to weather, age and the
              harsh environmental conditions of the Kutch region.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Protecting the fort walls, religious structures and historic
              settlement is important for preserving the architectural and
              cultural identity of Lakhpat.
            </p>
          </section>

          {/* Today */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Lakhpat Today
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Today, Lakhpat is a quiet historic settlement and an important
              heritage location in Kutch. Visitors can explore its massive
              fort walls, religious sites and distinctive desert-like
              landscape.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Its remote setting and preserved historic character make Lakhpat
              a fascinating example of the cultural and architectural heritage
              of western India.
            </p>
          </section>

          {/* Source & Verification */}
          <section className="rounded-2xl bg-[#7b3f00] p-8 text-white">
            <h2 className="text-2xl font-bold">
              Source & Verification
            </h2>

            <p className="mt-4 leading-7 text-[#f7f1e3]">
              Heritage information should be verified using authoritative
              sources such as the Archaeological Survey of India, Government
              of Gujarat tourism and culture departments, Ministry of Culture,
              and reliable archaeological or academic publications.
            </p>

            <p className="mt-4 text-sm text-[#eadbc5]">
              Virasat.ai uses AI-assisted discovery and presentation while
              prioritizing reliable heritage information and source
              verification.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}