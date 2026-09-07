export default function PhulkariPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Indian Textile & Craft
          </p>

          <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
            Phulkari
          </h1>

          <p className="mt-4 text-lg text-[#7b5f4d]">
            📍 Punjab, India
          </p>
        </header>

        {/* Image Placeholder */}
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
          <img
            src="/images/phulkari.jpg"
            alt="Phulkari"
            className="h-full w-full object-cover"
          />
        </div>
        {/* About */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            About Phulkari
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Phulkari, meaning "flower work", is a traditional embroidery
            tradition associated with Punjab. It is recognised for colourful
            silk-thread embroidery worked on fabric, often creating bold
            floral and geometric patterns.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Phulkari has traditionally been closely connected with everyday
            life, celebrations, weddings and important family occasions.
            Embroidered textiles could carry both decorative and cultural
            meaning within Punjabi communities.
          </p>
        </section>

        {/* History */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            History & Evolution
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              Phulkari developed as a household embroidery tradition in the
              Punjab region, where embroidery skills were passed between
              generations. Women played an important role in creating and
              preserving these textiles.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Different styles and patterns developed across the region.
              Embroidered pieces could be created for personal use, family
              ceremonies and special occasions.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              During the twentieth century, changing lifestyles and textile
              production affected traditional Phulkari practices. In recent
              decades, renewed interest in Indian handicrafts has helped
              bring Phulkari into contemporary fashion and craft markets.
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
              <div className="text-4xl">🌸</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Floral Patterns
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Floral and nature-inspired forms are important elements of
                many traditional Phulkari designs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🪡</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Silk Thread
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Shiny silk floss threads are traditionally used to create
                colourful embroidered patterns.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🔷</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Geometric Forms
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Geometric shapes and repeated patterns contribute to the
                distinctive visual character of Phulkari.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🎨</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Vibrant Colours
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Bright contrasting threads create the colourful appearance
                associated with many Phulkari textiles.
              </p>
            </div>

          </div>
        </section>

        {/* Embroidery Technique */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Embroidery Technique
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Traditional Phulkari embroidery is commonly worked from the reverse
            side of the fabric. The artisan uses a special silk thread to
            create patterns using counted stitches.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The arrangement and direction of the stitches allow the embroidered
            surface to produce different shapes, textures and levels of
            coverage.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Base Fabric
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Traditionally, embroidery was often worked on handwoven
                cotton fabric.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Silk Thread
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Silk floss creates the characteristic shine and colourful
                appearance of the embroidery.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Counted Stitch
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Careful counting of fabric threads helps artisans create
                precise geometric and floral forms.
              </p>
            </div>

          </div>
        </section>

        {/* Styles */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Styles of Phulkari
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Phulkari
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Traditional floral embroidery can cover parts of the fabric
                while allowing the base cloth to remain visible.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Bagh
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Bagh embroidery is known for dense stitching that can cover
                much of the underlying fabric and create a rich surface.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Chope
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Chope is traditionally associated with ceremonial textiles
                and is distinguished by its characteristic embroidery style.
              </p>
            </div>

          </div>
        </section>

        {/* Cultural Life */}
        <section className="mb-10 rounded-2xl bg-[#eadbc5] p-8">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Phulkari in Punjabi Life
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Phulkari textiles have historically been connected with important
            moments in family and community life. Embroidered pieces could be
            prepared as gifts, ceremonial textiles or items associated with
            weddings and other celebrations.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The designs and effort invested in an embroidered textile could
            also reflect the skill, creativity and personal expression of the
            maker.
          </p>
        </section>

        {/* Craft Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            How Phulkari Is Made
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
                The base fabric is prepared and selected according to the
                intended textile.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                02
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Design Planning
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The placement and structure of the embroidery are planned
                before stitching.
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
                Artisans carefully create the design using traditional
                counted stitches.
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
                The completed textile is checked and finished before being
                used or presented.
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
                Punjabi Identity
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Phulkari is strongly associated with the cultural identity
                and textile traditions of Punjab.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Women's Craft
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Women historically played a central role in creating,
                preserving and passing down Phulkari embroidery knowledge.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Ceremonial Heritage
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Phulkari textiles have important associations with weddings,
                celebrations and family traditions.
              </p>
            </div>

          </div>
        </section>

        {/* GI Recognition */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Geographical Indication
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Phulkari is recognised under India's Geographical Indication
            system, helping identify and protect the geographical and
            traditional identity of the craft.
          </p>

          <div className="mt-6 rounded-xl bg-[#eadbc5] p-5">
            <p className="font-semibold text-[#7b3f00]">
              Region: Punjab
            </p>
          </div>
        </section>

        {/* Today */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Phulkari Today
          </h2>

          <div className="mt-6 rounded-2xl bg-[#7b3f00] p-8 text-white">
            <p className="leading-8">
              Phulkari continues to be used in traditional and contemporary
              clothing, accessories, home textiles and decorative products.
            </p>

            <p className="mt-4 leading-8">
              Designers and artisans are adapting traditional patterns for
              modern markets while efforts to preserve hand embroidery help
              maintain the craft's cultural identity.
            </p>
          </div>
        </section>

        {/* Preservation */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Heritage Protection & Preservation
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Preserving Phulkari requires documentation of traditional designs,
            continued transmission of embroidery skills and sustainable
            opportunities for artisans.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Supporting authentic handmade work and increasing awareness of
            traditional techniques can help ensure that Phulkari remains a
            living craft rather than only a historical textile tradition.
          </p>
        </section>

        {/* Source */}
        <section className="rounded-2xl border border-[#d9c2a3] bg-[#eadbc5] p-8">
          <h2 className="text-2xl font-bold text-[#3b2416]">
            Source & Verification
          </h2>

          <p className="mt-4 leading-7 text-[#654b3b]">
            Information for this page should be verified using official
            Geographical Indication records, Government of India handicrafts
            and textiles resources, Punjab government resources, recognised
            craft institutions and reliable academic references.
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