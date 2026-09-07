export default function ChikankariPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Indian Textile & Craft
          </p>

          <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
            Chikankari
          </h1>

          <p className="mt-4 text-lg text-[#7b5f4d]">
            📍 Lucknow, Uttar Pradesh, India
          </p>
        </header>

        {/* Image Placeholder */}
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
          <img
            src="/images/chikankari.jpg"
            alt="Chikankari"
            className="h-full w-full object-cover"
          />
        </div>

        {/* About */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            About Chikankari
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Chikankari is a traditional embroidery craft strongly associated
            with Lucknow in Uttar Pradesh. It is known for delicate needlework
            created on fabrics such as cotton, silk and other textiles.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The craft is recognised for its elegant floral and geometric
            patterns, fine stitches and detailed handwork. Traditionally,
            Chikankari has been practiced by skilled artisans and has become
            an important part of Lucknow's cultural identity.
          </p>
        </section>

        {/* History */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            History & Evolution
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              The exact origins of Chikankari are debated, and several
              traditions and historical accounts are associated with its
              development. The craft became particularly established in
              Lucknow during the Mughal and later periods.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Over generations, artisans developed a distinctive vocabulary
              of stitches and motifs. Chikankari gradually evolved from
              traditional courtly and elite contexts into a widely recognised
              craft practiced and worn by people across different communities.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Modern Chikankari combines traditional hand embroidery with
              contemporary clothing designs, helping the craft remain relevant
              in today's fashion and textile markets.
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
                Hand Embroidery
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Traditional Chikankari is created through detailed needlework
                performed by skilled artisans.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🌸</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Floral Motifs
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Flowers, leaves, vines and other nature-inspired patterns are
                common elements of Chikankari designs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">✨</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Fine Detailing
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The craft is valued for delicate stitches and intricate
                patterns that create a subtle textured appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">👗</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Versatile Textiles
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Chikankari appears on garments and textiles ranging from
                traditional clothing to contemporary fashion.
              </p>
            </div>

          </div>
        </section>

        {/* Techniques */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Embroidery Techniques
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Chikankari includes a variety of traditional stitches and
            techniques. These can create outlines, filled patterns, textures
            and open areas within a design.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Shadow Work
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                A technique that creates a soft embroidered effect, often
                visible through the fabric.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Jaali Work
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Openwork patterns create a delicate net-like appearance while
                retaining the structure of the fabric.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Floral Stitching
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Fine stitches are used to create flowers, leaves and other
                decorative motifs.
              </p>
            </div>
          </div>
        </section>

        {/* Motifs */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Motifs & Designs
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              Traditional Chikankari designs frequently draw inspiration from
              nature. Flowers, leaves, vines, creepers and stylised botanical
              forms are arranged into repeating or flowing compositions.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The designs can range from extremely fine and understated
              embroidery to more elaborate compositions covering larger areas
              of a garment.
            </p>
          </div>
        </section>

        {/* Craft Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            How Chikankari Is Made
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">01</span>
              <h3 className="mt-3 font-bold text-[#3b2416]">
                Design
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                A pattern is prepared and transferred onto the fabric.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">02</span>
              <h3 className="mt-3 font-bold text-[#3b2416]">
                Stitching
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Artisans carefully embroider the design using traditional
                techniques.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">03</span>
              <h3 className="mt-3 font-bold text-[#3b2416]">
                Finishing
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The embroidered fabric is cleaned and finished for its final
                use.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">04</span>
              <h3 className="mt-3 font-bold text-[#3b2416]">
                Garment
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The finished textile can become clothing, accessories or
                decorative fabric.
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
                Lucknow's Identity
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Chikankari is closely connected with Lucknow's artistic and
                cultural identity.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Artisan Knowledge
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Traditional skills are passed between generations of artisans,
                preserving specialised embroidery knowledge.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Living Craft
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Chikankari continues to evolve through contemporary clothing,
                design and textile markets.
              </p>
            </div>

          </div>
        </section>

        {/* GI Recognition */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Geographical Identity
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Lucknow Chikan Craft is recognised as a Geographical Indication
            associated with the region. Such recognition helps highlight the
            geographical and traditional identity of the craft.
          </p>

          <div className="mt-6 rounded-xl bg-[#eadbc5] p-5">
            <p className="font-semibold text-[#7b3f00]">
              Region: Lucknow, Uttar Pradesh
            </p>
          </div>
        </section>

        {/* Today */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Chikankari Today
          </h2>

          <div className="mt-6 rounded-2xl bg-[#7b3f00] p-8 text-white">
            <p className="leading-8">
              Chikankari remains one of India's best-known traditional
              embroidery crafts. It can be found on sarees, kurtas, dresses,
              scarves, home textiles and many contemporary products.
            </p>

            <p className="mt-4 leading-8">
              The continued demand for Chikankari provides opportunities for
              artisans while also creating challenges around maintaining
              traditional handwork, fair livelihoods and craft authenticity.
            </p>
          </div>
        </section>

        {/* Conservation */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Heritage Protection & Preservation
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Preserving Chikankari involves supporting artisan communities,
            documenting traditional techniques and ensuring that knowledge of
            the craft continues to be passed to future generations.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Geographical recognition, craft organisations, museums, cultural
            institutions and responsible markets can all contribute to
            protecting the heritage value of traditional Chikankari.
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
            and textiles resources, Uttar Pradesh government resources,
            recognised craft institutions and reliable academic references.
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