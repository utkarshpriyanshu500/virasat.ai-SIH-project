import Navbar from "@/components/Navbar";

export default function BateshwarGroupOfTemplesPage() {
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
              Bateshwar Group of Temples
            </h1>

            <p className="mt-4 text-lg text-[#654b3b]">
              📍 Morena District, Madhya Pradesh, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/bateshwar-group-of-temples.jpg"
              alt="Bateshwar Group of Temples"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Bateshwar
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The Bateshwar Group of Temples is a remarkable collection of
              ancient Hindu temples located in the Morena region of Madhya
              Pradesh. The complex contains numerous sandstone temples spread
              across a rocky landscape.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The temples are primarily associated with Hindu traditions and
              include shrines dedicated to deities such as Shiva, Vishnu and
              Shakti. Their architecture provides an important glimpse into
              the temple-building traditions of early medieval central India.
            </p>
          </section>

          {/* History */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The Bateshwar temples are generally dated to the early medieval
              period, with many structures associated with the Gurjara-Pratihara
              architectural tradition of central India.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Over time, the temple complex suffered significant damage and
              deterioration. Many structures collapsed or became buried,
              leaving the site in a heavily damaged condition for centuries.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Archaeological conservation and reconstruction work has helped
              restore a substantial number of temples and has brought greater
              attention to the historical importance of the complex.
            </p>
          </section>

          {/* Temple Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Temple Architecture
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The Bateshwar temples demonstrate the architectural vocabulary
              of early medieval North Indian temple construction. Many shrines
              feature stone-built sanctums, decorative elements and small
              towered superstructures.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🧱</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Sandstone
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Local sandstone was extensively used to construct and
                  decorate the temples.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🔺</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Temple Towers
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Many shrines feature towered forms characteristic of
                  northern Indian temple architecture.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🗿</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Sculptural Detail
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Decorative stone carvings and sculptural elements enrich
                  several surviving structures.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🛕</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Temple Cluster
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Numerous small shrines form a distinctive and dense
                  archaeological landscape.
                </p>
              </div>

            </div>
          </section>

          {/* Religious Traditions */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Religious Traditions
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The temple complex reflects several strands of Hindu religious
              practice. The surviving shrines are associated with different
              deities and demonstrate the diversity of worship represented in
              the historic settlement.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">🔱</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Shaivism
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Several shrines are connected with traditions devoted to
                  Shiva.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">🪷</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Vaishnavism
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Vishnu-related traditions are also represented within the
                  broader temple complex.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">🌺</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Shakti Traditions
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The site also contains evidence of traditions associated
                  with goddess worship.
                </p>
              </div>

            </div>
          </section>

          {/* Sculptures */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Sculptures & Decorative Art
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Carved architectural elements are an important feature of the
              Bateshwar temples. Decorative motifs, figures and religious
              imagery appear on surviving portions of the structures.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              These carvings help researchers understand the artistic
              vocabulary of temple builders in central India during the early
              medieval period.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Deity Imagery
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Sculptural representations connected with Hindu deities
                  appear among the surviving architectural elements.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Architectural Ornament
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Pillars, doorways, wall surfaces and other architectural
                  components contain decorative stonework.
                </p>
              </div>

            </div>
          </section>

          {/* Archaeological Landscape */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Archaeological Landscape
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              One of the most interesting aspects of Bateshwar is the density
              of its temple remains. Instead of being represented by one
              monumental structure, the heritage site consists of a large
              group of smaller shrines distributed across the landscape.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              This arrangement provides researchers with an opportunity to
              study temple construction as a broader architectural tradition
              rather than focusing on a single monument.
            </p>
          </section>

          {/* Conservation */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Conservation & Reconstruction
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The Bateshwar complex experienced extensive deterioration before
              systematic archaeological conservation began. Numerous temple
              structures had collapsed, with architectural fragments scattered
              throughout the site.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Conservation teams have carefully documented, recovered and
              reassembled architectural components where possible. The work
              demonstrates the importance of archaeological research,
              documentation and sensitive reconstruction.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Why Conservation Matters
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Preserving the temples protects not only individual structures
                but also the wider historical record of medieval temple
                architecture in central India.
              </p>
            </div>
          </section>

          {/* Cultural Significance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Bateshwar is significant for its concentration of early
              medieval temples and its connection with the architectural
              traditions of central India.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The site also demonstrates how archaeological conservation can
              recover heritage that has been damaged or partially lost over
              centuries.
            </p>
          </section>

          {/* Lesser Known Heritage */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              A Lesser-Known Heritage Treasure
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Compared with India's most famous monuments, Bateshwar receives
              considerably less public attention. Its large collection of
              historic temples makes it an excellent example of the lesser-known
              heritage that can be highlighted through digital platforms.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Virasat.ai can help users discover such places by connecting
              monuments with their location, history, architecture and
              cultural context.
            </p>
          </section>

          {/* Today */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Bateshwar Today
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Today, Bateshwar remains an important archaeological site in
              Madhya Pradesh. Its restored temples provide visitors with an
              opportunity to explore the architectural heritage of early
              medieval central India.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Continued documentation, conservation and responsible tourism
              can help ensure that the site's architectural heritage remains
              protected for future generations.
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