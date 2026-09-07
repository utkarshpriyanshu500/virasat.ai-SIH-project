export default function KanjeevaramSilkPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Indian Textile & Craft
          </p>

          <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
            Kanjeevaram Silk
          </h1>

          <p className="mt-4 text-lg text-[#7b5f4d]">
            📍 Kanchipuram, Tamil Nadu, India
          </p>
        </header>

        {/* Image Placeholder */}
       <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
          <img
            src="/images/kanjeevaram-silk.jpg"
            alt="Kanjeevaram Silk"
            className="h-full w-full object-cover"
          />
        </div>

        {/* About */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            About Kanjeevaram Silk
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Kanjeevaram silk, also known as Kanchipuram silk, is a celebrated
            traditional silk weaving craft from Kanchipuram in Tamil Nadu.
            It is particularly famous for its strong silk fabric, vibrant
            colours, elaborate designs and distinctive zari work.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Kanjeevaram sarees are closely associated with South Indian
            weddings, festivals and ceremonial occasions. The craft represents
            generations of specialised weaving knowledge and remains an
            important part of Tamil Nadu's textile heritage.
          </p>
        </section>

        {/* History */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            History & Evolution
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              Kanchipuram has a long association with silk weaving. The
              development of the region's silk tradition was influenced by
              weaving communities, temple culture and the patronage of
              South Indian royal and religious institutions.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Over generations, weavers developed distinctive techniques for
              constructing sarees with strong borders, richly patterned
              bodies and contrasting pallus. Traditional motifs were often
              inspired by temples, nature and regional artistic traditions.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Modern Kanjeevaram weaving continues to combine traditional
              techniques with changing colours, patterns and contemporary
              designs.
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
              <div className="text-4xl">🧵</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Pure Silk Tradition
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Traditional Kanjeevaram sarees are known for their substantial
                silk fabric and durable construction.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">✨</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Zari Work
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Metallic zari is used extensively for borders, pallus and
                decorative motifs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🏛️</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Temple Motifs
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Traditional designs can draw inspiration from temples,
                architecture and South Indian artistic traditions.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🎨</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Vibrant Colours
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Strong colour combinations and contrasting borders are common
                features of Kanjeevaram sarees.
              </p>
            </div>

          </div>
        </section>

        {/* Weaving Technique */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Traditional Weaving Technique
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Kanjeevaram sarees are traditionally woven on handlooms using
            carefully prepared silk yarns. A distinctive feature of the craft
            is the construction of the body, border and pallu as strongly
            integrated parts of the saree.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Skilled weavers carefully manage the arrangement of threads to
            produce detailed patterns and maintain the strength and appearance
            of the finished textile.
          </p>
        </section>

        {/* Motifs */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Motifs & Designs
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Temple Motifs
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Architectural forms and patterns inspired by South Indian
                temples appear in many traditional designs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Nature
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Flowers, leaves, birds and other nature-inspired forms are
                commonly incorporated into textile designs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Geometric Borders
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Repeating geometric patterns create distinctive borders and
                decorative structures throughout the saree.
              </p>
            </div>

          </div>
        </section>

        {/* Temple Connection */}
        <section className="mb-10 rounded-2xl bg-[#eadbc5] p-8">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Connection with Temple Culture
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Kanchipuram is historically known as an important temple city.
            This cultural environment influenced the visual language of local
            textiles, with architectural and religiously inspired motifs
            appearing in weaving traditions.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            This connection between textile design and the surrounding
            cultural landscape is an important part of Kanjeevaram's heritage
            identity.
          </p>
        </section>

        {/* Craft Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            How Kanjeevaram Silk Is Made
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                01
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Silk Preparation
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Silk yarns are prepared and organised for the weaving
                process.
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
                Colours, motifs, borders and the pallu design are planned
                before weaving.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                03
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Handloom Weaving
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Skilled weavers construct the saree and its decorative
                patterns on the loom.
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
                The finished saree is inspected and prepared for use or
                presentation.
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
                Tamil Heritage
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Kanjeevaram weaving forms an important part of Tamil Nadu's
                traditional textile culture.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Wedding Tradition
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Kanjeevaram sarees are strongly associated with weddings,
                festivals and other important ceremonies.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Artisan Knowledge
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Traditional weaving knowledge is passed through generations of
                skilled weaving communities.
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
            Kancheepuram Silk is recognised under the Geographical Indication
            system, highlighting its association with the Kanchipuram region
            and its traditional silk weaving heritage.
          </p>

          <div className="mt-6 rounded-xl bg-[#eadbc5] p-5">
            <p className="font-semibold text-[#7b3f00]">
              Region: Kanchipuram, Tamil Nadu
            </p>
          </div>
        </section>

        {/* Today */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Kanjeevaram Silk Today
          </h2>

          <div className="mt-6 rounded-2xl bg-[#7b3f00] p-8 text-white">
            <p className="leading-8">
              Kanjeevaram silk continues to be one of India's most recognised
              traditional handloom textiles. It remains especially popular
              for weddings, religious celebrations and other ceremonial
              occasions.
            </p>

            <p className="mt-4 leading-8">
              Contemporary weavers and designers are also experimenting with
              new colours, patterns and applications while retaining the
              distinctive identity of the traditional craft.
            </p>
          </div>
        </section>

        {/* Preservation */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Heritage Protection & Preservation
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Protecting Kanjeevaram weaving requires continued support for
            handloom weavers, documentation of traditional techniques and
            awareness about authentic handcrafted textiles.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Geographical Indication recognition and support from government
            agencies, handloom institutions and responsible consumers can help
            sustain the craft for future generations.
          </p>
        </section>

        {/* Source */}
        <section className="rounded-2xl border border-[#d9c2a3] bg-[#eadbc5] p-8">
          <h2 className="text-2xl font-bold text-[#3b2416]">
            Source & Verification
          </h2>

          <p className="mt-4 leading-7 text-[#654b3b]">
            Information for this page should be verified using official
            Geographical Indication records, Government of India handloom and
            handicrafts resources, Tamil Nadu government resources, recognised
            textile institutions and reliable academic references.
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