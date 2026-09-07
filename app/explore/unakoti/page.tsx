import Navbar from "@/components/Navbar";

export default function UnakotiPage() {
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
              Unakoti
            </h1>

            <p className="mt-4 text-lg text-[#654b3b]">
              📍 Unakoti, Kailashahar, Tripura, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/unakoti.jpg"
              alt="Unakoti"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Unakoti
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Unakoti is a remarkable heritage site in the state of Tripura,
              known for its enormous rock-cut sculptures carved into hillsides
              and exposed rock surfaces. The site is particularly associated
              with Shaivite traditions and contains a large number of
              sculptures depicting Shiva and other Hindu deities.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Surrounded by forests and natural landscapes, Unakoti combines
              religious heritage, monumental rock art and local traditions,
              making it one of the distinctive cultural sites of Northeast
              India.
            </p>
          </section>

          {/* History */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The sculptures of Unakoti are generally associated with the
              early medieval period, although the exact chronology and
              development of the site have been discussed by historians and
              archaeologists.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Over time, Unakoti developed into an important pilgrimage and
              cultural site. Its combination of monumental carvings, natural
              surroundings and religious traditions has helped preserve its
              significance across generations.
            </p>
          </section>

          {/* Rock-Cut Sculptures */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Rock-Cut Sculptures
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The most striking feature of Unakoti is its collection of
              monumental rock-cut sculptures. Figures were carved directly
              into natural rock faces and boulders, creating a distinctive
              open-air heritage landscape.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🕉️</div>
                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Unakotiswara Kal Bhairava
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  A monumental rock relief traditionally identified with
                  Shiva in his Kal Bhairava form.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🗿</div>
                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Rock Reliefs
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Large figures and relief carvings appear across the rocky
                  landscape of the site.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🌿</div>
                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Natural Landscape
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Forests, hills and streams form an important part of the
                  visual character of Unakoti.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🙏</div>
                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Shaivite Heritage
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The site has a strong connection with traditions devoted to
                  Shiva.
                </p>
              </div>

            </div>
          </section>

          {/* Major Figures */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Major Sculptures & Figures
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Among the best-known carvings at Unakoti is the massive relief
              commonly known as Unakotiswara Kal Bhairava. Other sculptures
              include representations associated with Ganesha and other Hindu
              deities.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The scale of several carvings, combined with their placement
              within the natural rock formations, gives Unakoti a character
              different from conventional temple architecture.
            </p>
          </section>

          {/* Legend */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Legend of Unakoti
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The name <strong>Unakoti</strong> is commonly understood to mean
              “one less than a crore.” A popular local legend says that Shiva
              was travelling towards Kashi with a crore deities and divine
              beings. They stopped at this location for the night, but when
              morning came, Shiva continued his journey while the others
              remained behind.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              According to the legend, the remaining figures were turned into
              stone, giving the place its name and explaining the enormous
              number of carvings found there. This story is a traditional
              legend and should be understood separately from archaeological
              evidence.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Unakoti represents an important part of Tripura's cultural
              heritage and demonstrates how religious traditions, sculpture
              and natural landscapes can come together to create a unique
              heritage environment.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The site also highlights the rich and diverse cultural heritage
              of Northeast India, an area whose traditions are often less
              represented in mainstream discussions of Indian heritage.
            </p>
          </section>

          {/* Festivals & Traditions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Festivals & Traditions
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Unakoti has long been associated with pilgrimage and religious
              traditions. The annual Ashokastami festival is one of the
              important occasions connected with the site and attracts
              pilgrims and visitors.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-[#eadbc5] p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Ashokastami
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  A major religious gathering associated with Unakoti,
                  featuring pilgrimage and traditional observances.
                </p>
              </div>

              <div className="rounded-2xl bg-[#eadbc5] p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Living Heritage
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Religious practices, local traditions and storytelling
                  continue to contribute to the cultural identity of the
                  site.
                </p>
              </div>

            </div>
          </section>

          {/* Heritage Protection */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Heritage Protection & Conservation
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The rock sculptures are vulnerable to natural weathering because
              they are exposed to the outdoor environment. Conservation of
              the site therefore requires attention to the sculptures,
              surrounding landscape and visitor management.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Archaeological and government heritage agencies play an
              important role in documenting, protecting and maintaining the
              site's cultural resources.
            </p>
          </section>

          {/* Today */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Unakoti Today
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Today, Unakoti is an important cultural and archaeological
              attraction in Tripura. Visitors come to experience its
              monumental sculptures, natural surroundings, religious
              traditions and distinctive history.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Digital platforms such as Virasat.ai can help make lesser-known
              heritage sites like Unakoti easier for students, travellers and
              younger generations to discover.
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
              of Tripura tourism and culture departments, Ministry of Culture,
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