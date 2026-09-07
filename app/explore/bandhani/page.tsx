export default function BandhaniPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Indian Textile & Craft
          </p>

          <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
            Bandhani
          </h1>

          <p className="mt-4 text-lg text-[#7b5f4d]">
            📍 Gujarat & Rajasthan, India
          </p>
        </header>

        {/* Image Placeholder */}
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
          <img
            src="/images/bandhani.jpg"
            alt="Bandhani"
            className="h-full w-full object-cover"
          />
        </div>

        {/* About */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            About Bandhani
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Bandhani is a traditional Indian tie-and-dye textile technique
            strongly associated with Gujarat and Rajasthan. The name refers
            to the process of tying small portions of fabric before dyeing
            it, creating distinctive dotted and patterned designs.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The craft is particularly known for colourful textiles used in
            sarees, dupattas, odhnis, turbans and other traditional garments.
            Different regions and communities have developed their own
            patterns, colours and ways of wearing Bandhani textiles.
          </p>
        </section>

        {/* History */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            History & Evolution
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              Tie-and-dye traditions have a long history in the Indian
              subcontinent. Bandhani became particularly established in the
              western regions of India, especially Gujarat and Rajasthan,
              where textile communities developed specialised techniques.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The craft was traditionally practiced within households and
              artisan communities. Knowledge of tying patterns, dyeing and
              finishing was passed from one generation to another.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Today, Bandhani continues to combine traditional methods with
              contemporary designs and is widely used in both traditional
              clothing and modern fashion.
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
              <div className="text-4xl">🔴</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Dotted Patterns
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Tiny resist-dyed dots form the most recognisable visual
                element of Bandhani textiles.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🪢</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Hand Tying
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Small sections of fabric are carefully tied before dyeing to
                resist the colour.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🎨</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Bright Colours
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Strong combinations of colours give Bandhani its vibrant
                traditional appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🌀</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Repeated Motifs
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Dots can be arranged into waves, circles, flowers, geometric
                forms and other repeating patterns.
              </p>
            </div>

          </div>
        </section>

        {/* Tie and Dye Technique */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            The Tie-and-Dye Technique
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The defining feature of Bandhani is the controlled tying of
            sections of fabric. These tied areas resist the dye, producing
            lighter or undyed patterns when the fabric is opened.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                1. Pinching
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Small portions of fabric are carefully picked up to create
                the desired pattern.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                2. Tying
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The selected sections are tightly tied with thread so that
                dye cannot easily penetrate them.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                3. Dyeing
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The fabric is immersed in dye and later opened to reveal the
                characteristic resist-dyed pattern.
              </p>
            </div>

          </div>
        </section>

        {/* Traditional Motifs */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Traditional Patterns & Motifs
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Dots
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Small circular dots are the basic visual units from which
                many Bandhani patterns are constructed.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Waves & Circles
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Groups of tied dots can create flowing, circular and
                geometric arrangements across the fabric.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Floral Forms
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Some designs arrange the dots into flower-like and
                nature-inspired forms.
              </p>
            </div>

          </div>
        </section>

        {/* Cultural Connection */}
        <section className="mb-10 rounded-2xl bg-[#eadbc5] p-8">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Cultural Connection
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Bandhani textiles have traditionally been connected with
            celebrations, festivals, weddings and other important occasions
            in western India.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Particular colours and textile styles can also carry regional,
            social or ceremonial associations. The textile therefore serves
            as more than decoration and forms part of cultural expression.
          </p>
        </section>

        {/* Making Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            How Bandhani Is Made
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                01
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Fabric Preparation
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                A suitable lightweight textile is selected and prepared for
                the tie-and-dye process.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                02
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Pattern Tying
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Numerous small sections are pinched and tightly tied to
                create the intended pattern.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                03
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Dyeing
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The textile is dyed while the tied sections resist the
                colour.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                04
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Opening & Finishing
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The ties are removed and the fabric is opened to reveal the
                final pattern before finishing.
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
                Regional Identity
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Bandhani is an important part of the textile heritage of
                Gujarat and Rajasthan.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Celebrations
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Traditional Bandhani garments are commonly associated with
                festivals, ceremonies and weddings.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Artisan Knowledge
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                The craft preserves specialised knowledge of tying, pattern
                creation, dyeing and textile finishing.
              </p>
            </div>

          </div>
        </section>

        {/* Geographical Identity */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Geographical Identity
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Bandhani has strong cultural and craft associations with Gujarat
            and Rajasthan. Cities and craft centres across these regions have
            developed distinctive traditions of tie-and-dye textiles.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Gujarat
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Gujarat is one of the major centres of Bandhani production
                and related textile traditions.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Rajasthan
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Rajasthan has its own long-standing tie-and-dye traditions
                and distinctive regional textile styles.
              </p>
            </div>

          </div>
        </section>

        {/* Today */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Bandhani Today
          </h2>

          <div className="mt-6 rounded-2xl bg-[#7b3f00] p-8 text-white">
            <p className="leading-8">
              Bandhani remains popular in traditional Indian clothing while
              also appearing in contemporary fashion, accessories and home
              textiles.
            </p>

            <p className="mt-4 leading-8">
              Modern production includes both handmade and commercially
              produced textiles. Traditional hand-tied Bandhani continues to
              represent specialised artisan knowledge.
            </p>
          </div>
        </section>

        {/* Preservation */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Heritage Protection & Preservation
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Preserving Bandhani involves supporting skilled artisans,
            documenting traditional techniques and ensuring that knowledge of
            pattern-making and dyeing continues to be passed between
            generations.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Awareness of authentic handmade techniques can also help
            distinguish traditional craftsmanship from mass-produced
            imitations.
          </p>
        </section>

        {/* Source */}
        <section className="rounded-2xl border border-[#d9c2a3] bg-[#eadbc5] p-8">
          <h2 className="text-2xl font-bold text-[#3b2416]">
            Source & Verification
          </h2>

          <p className="mt-4 leading-7 text-[#654b3b]">
            Information for this page should be verified using Government of
            India handicrafts and textiles resources, Geographical Indication
            records, Gujarat and Rajasthan government resources, recognised
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