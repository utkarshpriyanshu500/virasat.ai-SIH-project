import Navbar from "@/components/Navbar";

export default function ManduPage() {
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
              Mandu
            </h1>

            <p className="mt-4 text-lg text-[#654b3b]">
              📍 Mandu, Dhar District, Madhya Pradesh, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/mandu.jpg"
              alt="Mandu"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Mandu
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Mandu, also known as Mandav or Mandavgarh, is a historic
              fortified city in Madhya Pradesh. Located on the Malwa plateau,
              it is surrounded by dramatic landscapes and is famous for its
              medieval architecture, palaces, gateways, mosques and
              reservoirs.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The monuments of Mandu reflect the interaction of different
              architectural and cultural traditions that developed in the
              region over several centuries.
            </p>
          </section>

          {/* History */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Mandu developed as an important fortified settlement on the
              Malwa plateau. Its elevated position and surrounding terrain
              provided strategic advantages and contributed to its development
              as a major political centre.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              During the medieval period, Mandu became particularly important
              under the Malwa Sultanate. Several of the monuments visible
              today were built or developed during this period.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The city later came under the control of the Mughals and other
              regional powers, adding further layers to its history.
            </p>
          </section>

          {/* Architectural Identity */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Architectural Identity
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Mandu is known for its combination of monumental Islamic
              architecture, local building traditions and adaptation to the
              natural landscape. Large gateways, domes, arches, courtyards and
              water structures form important elements of the historic city.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🏛️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Palaces
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Monumental palaces demonstrate the architectural ambition of
                  Mandu's medieval rulers.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🕌</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Mosques
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Historic mosques showcase arches, domes, courtyards and
                  distinctive medieval architectural forms.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">💧</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Water Systems
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Reservoirs and water structures were essential to life in
                  the fortified plateau city.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">⛰️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Natural Setting
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The monuments are closely connected with Mandu's hills,
                  valleys and surrounding landscape.
                </p>
              </div>

            </div>
          </section>

          {/* Jahaz Mahal */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Jahaz Mahal
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Jahaz Mahal is one of Mandu's most recognizable monuments. Its
              long, narrow structure stands between two water bodies, creating
              the visual impression of a ship floating between lakes.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The building is associated with the pleasure and residential
              architecture of the Malwa Sultanate and demonstrates how water
              was incorporated into the design of Mandu's royal complexes.
            </p>
          </section>

          {/* Hindola Mahal */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Hindola Mahal
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Hindola Mahal is known for its distinctive sloping buttresses,
              which give the building a visual appearance resembling a
              swinging structure. The monument is an important example of
              Mandu's medieval architectural style.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Its strong geometric form and massive walls demonstrate the
              structural techniques used by builders in the region.
            </p>
          </section>

          {/* Royal Enclave */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Royal Enclave
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The Royal Enclave contains several important structures,
              including Jahaz Mahal and other buildings associated with the
              ruling elite of Mandu.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-[#f7f1e3] p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Jahaz Mahal
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  A celebrated palace positioned between two water bodies.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f1e3] p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Hindola Mahal
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  A distinctive structure recognized for its sloping
                  architectural supports.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f1e3] p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Champa Baoli
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  A historic stepwell associated with Mandu's sophisticated
                  water-management traditions.
                </p>
              </div>

            </div>
          </section>

          {/* Hoshang Shah's Tomb */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Hoshang Shah's Tomb
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The tomb of Hoshang Shah is one of the important monuments of
              Mandu. Built largely in marble, it is noted for its dome,
              arches, decorative details and carefully proportioned form.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The monument is significant in the architectural history of
              central India and is often discussed in relation to the
              development of later Indo-Islamic architecture.
            </p>
          </section>

          {/* Jami Masjid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Jami Masjid
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The Jami Masjid is one of the major religious monuments in
              Mandu. Its large courtyard, arcaded spaces, domes and arches
              demonstrate the monumental character of the city's medieval
              architecture.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The mosque forms part of the larger architectural landscape that
              made Mandu an important political and cultural centre.
            </p>
          </section>

          {/* Rupmati Pavilion */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Rupmati's Pavilion
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Rupmati's Pavilion stands on the edge of the plateau and is
              famous for its views over the surrounding landscape. Its
              elevated position gives it a strong visual relationship with
              the Narmada valley.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The pavilion is also connected with the popular historical and
              romantic traditions surrounding Baz Bahadur and Rani Rupmati.
              Some details of these stories belong to later literary and local
              traditions and should not automatically be treated as
              archaeological fact.
            </p>
          </section>

          {/* Water Management */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Water Management
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Water management was essential to maintaining a large settlement
              on the Malwa plateau. Mandu contains reservoirs, tanks,
              stepwells and other water-related structures.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">💧</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Reservoirs
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Large water bodies helped support the historic settlement.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🪜</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Stepwells
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Stepwells provided access to stored water and formed part of
                  the city's infrastructure.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🏞️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Lakes
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Water bodies were incorporated into the design of royal
                  complexes and public spaces.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🏗️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Engineering
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Water structures demonstrate adaptation to the plateau's
                  geography and environmental conditions.
                </p>
              </div>

            </div>
          </section>

          {/* Cultural Significance */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Mandu represents a remarkable combination of architecture,
              history, landscape and water engineering. Its monuments preserve
              evidence of the political and cultural life of medieval Malwa.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The site is also important because its heritage is not limited
              to individual buildings. The relationship between the monuments,
              fortifications, water systems and surrounding landscape forms an
              integrated cultural environment.
            </p>
          </section>

          {/* Legends & Literature */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Legends & Living Memory
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Stories of Baz Bahadur and Rani Rupmati have become an important
              part of Mandu's popular cultural identity. Their story has been
              retold through literature, music and local traditions.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Such traditions add another layer to Mandu's heritage, showing
              how historical places can continue to inspire stories and
              cultural memory long after their original political importance
              has changed.
            </p>
          </section>

          {/* Heritage Protection */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Heritage Protection & Conservation
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Mandu's monuments face challenges from weathering, vegetation,
              environmental exposure and visitor pressure. Conservation must
              therefore protect individual structures as well as the wider
              historic landscape.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Responsible tourism, documentation and regular conservation
              work are important for ensuring that Mandu's architectural
              heritage remains accessible to future generations.
            </p>
          </section>

          {/* Today */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Mandu Today
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Today, Mandu is an important heritage and tourism destination in
              Madhya Pradesh. Visitors explore its palaces, mosques, tombs,
              pavilions, gateways and water structures while experiencing the
              historic landscape of the Malwa plateau.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Digital platforms such as Virasat.ai can help younger audiences
              discover Mandu by connecting its monuments, history, geography
              and cultural stories in one place.
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
              of Madhya Pradesh tourism and culture departments, Ministry of
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