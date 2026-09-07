import Navbar from "@/components/Navbar";

export default function PanhalaFortPage() {
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
              Panhala Fort
            </h1>

            <p className="mt-4 text-lg text-[#654b3b]">
              📍 Panhala, Kolhapur District, Maharashtra, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/panhala-fort.jpg"
              alt="Panhala Fort"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Panhala Fort
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Panhala Fort is a historic hill fort located near Kolhapur in
              Maharashtra. Built on the Sahyadri ranges, the fort occupies a
              strategically important position overlooking the surrounding
              valleys and routes through the region.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The fort is closely associated with the history of the Deccan,
              particularly the Maratha period. Its large defensive walls,
              gateways, bastions, reservoirs and historic buildings reflect
              the military importance of the site.
            </p>
          </section>

          {/* History */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Panhala has a long history that predates the Maratha period.
              The fort was developed and controlled by several ruling powers
              of the Deccan over the centuries, including the Shilahara and
              Yadava traditions and later the Bahmani and Adil Shahi rulers.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              In the seventeenth century, Panhala became closely connected
              with Chhatrapati Shivaji Maharaj and the expansion of the
              Maratha kingdom. Its strategic position made it one of the
              important forts in the Maratha defensive network.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The fort later witnessed conflicts involving the Marathas,
              Mughals, the British and other powers competing for control of
              the Deccan.
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Architecture & Fortifications
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Panhala's architecture reflects centuries of military
              development. The fort combines massive stone walls, gateways,
              bastions, passages, storage areas and water-management systems
              adapted to its hilltop setting.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🧱</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Fort Walls
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Strong stone fortifications surround the elevated plateau
                  and provided protection from attacking forces.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🚪</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Historic Gates
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Gateways controlled access to the fort and formed important
                  parts of its defensive system.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🛡️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Bastions
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Defensive bastions provided strategic positions for
                  monitoring and protecting the fort.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">💧</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Water Systems
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Water reservoirs and storage systems helped support life
                  within the fort during prolonged periods of occupation.
                </p>
              </div>

            </div>
          </section>

          {/* Important Structures */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Important Structures
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Several historic structures survive within the fort complex.
              Together, they provide evidence of Panhala's military,
              administrative and residential functions.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Teen Darwaza
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Teen Darwaza is one of the prominent gateways associated
                  with the fort's defensive architecture and controlled entry
                  into the fortified complex.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Andhar Bavadi
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Andhar Bavadi is a historic stepwell and an important
                  example of the fort's water-management infrastructure.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Sajja Kothi
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Sajja Kothi is traditionally associated with the fort's
                  administrative and residential history and offers views
                  over the surrounding landscape.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Ambabai Temple
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The Ambabai Temple represents the religious heritage
                  connected with Panhala and remains an important cultural
                  feature of the area.
                </p>
              </div>

            </div>
          </section>

          {/* Shivaji Maharaj */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Panhala & Chhatrapati Shivaji Maharaj
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Panhala holds an important place in the history of Chhatrapati
              Shivaji Maharaj and the Maratha state. Shivaji Maharaj captured
              the fort in 1659, after which it became an important Maratha
              stronghold.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              One of the most famous episodes connected with Panhala is
              Shivaji Maharaj's escape from the fort during a period of
              conflict with the forces of Bijapur.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The episode is closely associated with Baji Prabhu Deshpande
              and the Battle of Pavan Khind, which occupies an important place
              in Maratha historical memory.
            </p>
          </section>

          {/* Military Significance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Military Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Panhala's greatest strategic advantage came from its elevated
              position. The fort provided wide views across the surrounding
              landscape and helped control important routes through the
              region.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Its extensive fortifications, water supply and storage
              infrastructure allowed the settlement to withstand military
              pressure and remain occupied for long periods.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">⛰️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Hilltop Position
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Elevated terrain created a natural defensive advantage.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">👁️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Strategic Views
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The surrounding landscape could be monitored from the
                  elevated fort.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🌾</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Self-Sufficiency
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Water and storage facilities supported life inside the
                  fortified settlement.
                </p>
              </div>

            </div>
          </section>

          {/* Water Management */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Water Management
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Reliable water was essential for the survival of a large hill
              fort. Panhala contains wells, reservoirs and other systems that
              helped collect and store water.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The presence of structures such as Andhar Bavadi demonstrates
              how engineering and architecture were combined to support the
              fort's population and military functions.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Panhala Fort is an important symbol of Maharashtra's military
              and cultural history. Its association with the Maratha period
              has given the fort a strong place in regional historical memory.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Beyond its military history, the fort represents centuries of
              architectural development, religious traditions and life on the
              Deccan plateau.
            </p>
          </section>

          {/* Legends & Historical Memory */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Legends & Historical Memory
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Stories surrounding Panhala have been passed through generations,
              particularly those connected with the Maratha period and the
              fort's role in military campaigns.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Accounts of Shivaji Maharaj's escape and the sacrifice of Baji
              Prabhu Deshpande continue to form an important part of the
              cultural memory associated with the region.
            </p>

            <p className="mt-4 text-sm italic text-[#7b5f4d]">
              Historical narratives and traditional accounts should be
              distinguished from details that are independently verified by
              archaeological or documentary evidence.
            </p>
          </section>

          {/* Conservation */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Heritage Protection & Conservation
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Panhala's historic structures face challenges caused by age,
              weathering, vegetation and increasing visitor activity.
              Conservation is therefore important for protecting the fort's
              walls, gateways, water systems and historic buildings.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Responsible tourism, regular maintenance and archaeological
              documentation can help preserve Panhala for future generations.
            </p>
          </section>

          {/* Today */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Panhala Fort Today
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Today, Panhala is an important heritage and tourism destination
              in Maharashtra. Visitors can explore the fort's historic
              gateways, walls, temples, water structures and viewpoints.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The surrounding hill landscape also contributes to the fort's
              appeal, making Panhala an example of how natural geography and
              human engineering worked together in historic fort construction.
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
              of Maharashtra tourism and culture departments, Ministry of
              Culture, and reliable archaeological or academic publications.
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