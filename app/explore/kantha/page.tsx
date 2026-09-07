export default function KanthaPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Indian Textile & Craft
          </p>

          <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
            Kantha
          </h1>

          <p className="mt-4 text-lg text-[#7b5f4d]">
            📍 West Bengal, India
          </p>
        </header>

        {/* Image Placeholder */}
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
          <img
            src="/images/kantha.jpg"
            alt="Kantha"
            className="h-full w-full object-cover"
          />
        </div>

        {/* About */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            About Kantha
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Kantha is a traditional textile and embroidery tradition strongly
            associated with Bengal. It is especially recognised for its
            running-stitch embroidery, often worked on layers of old or
            recycled cloth.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Traditional Kantha textiles can combine practical reuse of fabric
            with decorative storytelling. Designs may include flowers,
            animals, plants, geometric forms and scenes inspired by everyday
            life.
          </p>
        </section>

        {/* History */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            History & Evolution
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              Kantha developed as a household textile practice in Bengal,
              where layers of worn cotton cloth could be stitched together
              and given a new practical purpose.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Women traditionally played a major role in creating Kantha
              textiles. Embroidery could transform simple household
              materials into quilts, wraps, covers and other useful objects.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Over time, Kantha evolved from primarily domestic use into a
              recognised craft tradition. Contemporary artisans continue to
              use traditional stitching while creating products for modern
              markets.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Key Features
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🪡</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Running Stitch
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Repeated running stitches form the foundation of many
                traditional Kantha textiles.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">♻️</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Reuse of Fabric
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Layers of previously used cloth were traditionally brought
                together to create useful textile objects.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🌿</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Nature Motifs
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Plants, flowers, animals and birds are common sources of
                inspiration for Kantha designs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">📖</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Visual Storytelling
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Some Kantha pieces use imagery to represent aspects of
                cultural life, beliefs and everyday experiences.
              </p>
            </div>

          </div>
        </section>

        {/* Stitching Technique */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            The Kantha Stitch
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The running stitch is the defining technique of traditional
            Kantha. Rows of stitches can be placed across layers of fabric,
            helping hold them together while also producing decorative
            textures and patterns.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Depending on the design, artisans may use different arrangements
            of stitches to create borders, geometric shapes, floral motifs
            and figurative imagery.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Layering
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Multiple pieces or layers of cloth can be placed together to
                form the textile base.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Stitching
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Repeated running stitches secure the layers and contribute
                to the visual design.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Embellishment
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Additional patterns and motifs can be built into the
                embroidered surface.
              </p>
            </div>

          </div>
        </section>

        {/* Motifs */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Traditional Motifs
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Floral & Plant Forms
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Flowers, leaves, vines and other plant forms appear frequently
                in decorative Kantha compositions.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Animals & Birds
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Fish, birds, elephants and other animals can appear in
                figurative and symbolic designs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Everyday Life
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Some pieces depict people, activities and scenes connected
                with daily life and cultural traditions.
              </p>
            </div>

          </div>
        </section>

        {/* Types */}
        <section className="mb-10 rounded-2xl bg-[#eadbc5] p-8">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Traditional Uses
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Quilts
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Layered and stitched cloth was traditionally used to create
                warm household quilts and wraps.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Decorative Textiles
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Kantha embroidery could also be used for covers, cloths and
                other decorative household textiles.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Personal Items
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                The tradition has also been applied to garments, bags,
                accessories and other useful objects.
              </p>
            </div>

          </div>
        </section>

        {/* Making Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            How Kantha Is Made
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                01
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Fabric Selection
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Suitable pieces or layers of fabric are selected and
                prepared.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                02
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Layering
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Layers of cloth are arranged to create the base of the
                textile.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                03
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Embroidery
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Running stitches are worked across the layers to secure them
                and create decorative patterns.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                04
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Finishing
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The finished textile is checked, trimmed and prepared for
                practical or decorative use.
              </p>
            </div>

          </div>
        </section>

        {/* Cultural Significance */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Cultural Significance
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Bengali Heritage
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Kantha is an important part of the textile and embroidery
                heritage of Bengal.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Women's Knowledge
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Women have historically played a major role in preserving and
                transmitting Kantha embroidery skills.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Sustainable Tradition
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                The traditional reuse of cloth demonstrates a long-standing
                relationship between craftsmanship and resourcefulness.
              </p>
            </div>

          </div>
        </section>

        {/* Regional Identity */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Regional Identity
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Kantha is particularly associated with West Bengal and the wider
            Bengali cultural region. Related embroidery traditions are also
            found in neighbouring areas, reflecting the historical cultural
            connections of Bengal.
          </p>

          <div className="mt-6 rounded-xl bg-[#eadbc5] p-5">
            <p className="font-semibold text-[#7b3f00]">
              Region: West Bengal, India
            </p>
          </div>
        </section>

        {/* Today */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Kantha Today
          </h2>

          <div className="mt-6 rounded-2xl bg-[#7b3f00] p-8 text-white">
            <p className="leading-8">
              Kantha has moved beyond traditional household textiles and is
              now used in contemporary clothing, bags, accessories, home
              furnishings and decorative art.
            </p>

            <p className="mt-4 leading-8">
              Contemporary artisans continue to preserve traditional
              stitching while experimenting with new fabrics, compositions
              and applications.
            </p>
          </div>
        </section>

        {/* Preservation */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Heritage Protection & Preservation
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Preserving Kantha requires continued support for artisans,
            documentation of traditional designs and transmission of
            embroidery knowledge to younger generations.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Responsible craft markets and awareness of handmade techniques
            can help maintain the value of traditional Kantha while providing
            sustainable opportunities for artisan communities.
          </p>
        </section>

        {/* Source */}
        <section className="rounded-2xl border border-[#d9c2a3] bg-[#eadbc5] p-8">
          <h2 className="text-2xl font-bold text-[#3b2416]">
            Source & Verification
          </h2>

          <p className="mt-4 leading-7 text-[#654b3b]">
            Information for this page should be verified using Government of
            India handicrafts and textiles resources, West Bengal government
            resources, recognised craft institutions, museums and reliable
            academic references.
          </p>

          <p className="mt-4 text-sm font-semibold text-[#7b3f00]">
            Virasat.ai follows a source-first approach for cultural heritage
            information.
          </p>
        </section>

      </div>
    </main>
  );
}