import Navbar from "@/components/Navbar";

export default function SittanavasalCavePage() {
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
              Sittanavasal Cave
            </h1>

            <p className="mt-4 text-lg text-[#654b3b]">
              📍 Sittanavasal, Pudukkottai, Tamil Nadu, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/sittanavasal-cave.jpg"
              alt="Sittanavasal Cave"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Sittanavasal Cave
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Sittanavasal Cave is an important historic rock-cut site in
              Tamil Nadu, best known for its ancient paintings and connection
              with Jain traditions. The cave is located on a rocky hill in the
              Pudukkottai region.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Its paintings, inscriptions and rock-cut architectural features
              provide valuable evidence of the artistic and religious
              traditions that developed in southern India.
            </p>
          </section>

          {/* History */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The site is associated with Jainism and contains evidence of
              religious activity connected with Jain communities in the
              region. The cave and its surrounding structures developed over
              different historical periods.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The famous paintings are generally associated with the
              Pallava-period artistic tradition, while later additions and
              inscriptions contribute to the site's layered history.
            </p>
          </section>

          {/* Rock-Cut Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Rock-Cut Architecture
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The cave was created by modifying the natural rock of the hill.
              Its architectural features demonstrate the practice of
              transforming natural rock surfaces into spaces associated with
              religious activity.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🪨</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Rock-Cut Cave
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The monument is carved into the natural rock of a hill,
                  creating a distinctive historic cave space.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🎨</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Ancient Paintings
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Painted surfaces inside the cave are among its most valuable
                  artistic features.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🙏</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Jain Heritage
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The site has strong associations with Jain religious
                  traditions and monastic activity.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">📜</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Inscriptions
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Inscriptions provide additional evidence about the history
                  and religious use of the site.
                </p>
              </div>

            </div>
          </section>

          {/* Paintings */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              The Famous Paintings
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Sittanavasal is particularly famous for its mural paintings.
              The artwork includes natural and symbolic imagery, with
              representations of a lotus pond, flowers, animals and human
              figures.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The paintings are important examples of early South Indian
              mural traditions and provide insight into the artistic skills
              and visual language of their creators.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">🌸</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Lotus Pond
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The famous lotus pond imagery contains flowers, plants and
                  aquatic elements arranged as part of a symbolic scene.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">🐘</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Nature & Animals
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Animals and natural forms contribute to the visual richness
                  of the painted compositions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="text-4xl">🎭</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Human Figures
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Human figures appear within the painted scenes, adding
                  movement and narrative character to the artwork.
                </p>
              </div>

            </div>
          </section>

          {/* Jain Connection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Jain Cultural Heritage
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Sittanavasal is closely connected with Jain religious traditions
              in Tamil Nadu. The site's caves, sculptures and inscriptions
              reflect the presence and influence of Jain communities in the
              region.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Jain concepts and religious imagery provide an important context
              for understanding the site's paintings and architectural
              features.
            </p>
          </section>

          {/* Painting Technique */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Artistic Technique
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The paintings demonstrate sophisticated knowledge of composition,
              line, colour and natural forms. Artists used the available rock
              surfaces to create decorative and narrative scenes.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Their surviving fragments are especially valuable because early
              mural paintings are vulnerable to environmental conditions and
              many historic examples have been lost over time.
            </p>
          </section>

          {/* Inscriptions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Inscriptions & Historical Evidence
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Inscriptions found at and around the site provide important
              information for understanding its religious history and the
              communities connected with it.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              When studied alongside architecture, paintings and archaeological
              evidence, these inscriptions help researchers reconstruct the
              historical development of Sittanavasal.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Sittanavasal is significant because it brings together
              rock-cut architecture, ancient painting, inscriptions and Jain
              religious heritage within a single historic landscape.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              It is also an important reminder of the artistic traditions that
              developed in Tamil Nadu and the wider cultural connections of
              South India.
            </p>
          </section>

          {/* Conservation */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Heritage Protection & Conservation
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The paintings at Sittanavasal are particularly sensitive to
              environmental changes, moisture, biological growth and human
              activity. Conservation requires careful monitoring and
              protection of the fragile painted surfaces.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Archaeological conservation and responsible visitor management
              are essential for protecting the remaining artwork for future
              generations.
            </p>
          </section>

          {/* Today */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Sittanavasal Today
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Today, Sittanavasal is an important archaeological and cultural
              site in Tamil Nadu. It attracts visitors, researchers and
              heritage enthusiasts interested in ancient Indian art and Jain
              history.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Digital documentation can help introduce this lesser-known
              heritage site to students and younger audiences while promoting
              awareness of the need for conservation.
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
              of Tamil Nadu tourism and culture departments, Ministry of
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