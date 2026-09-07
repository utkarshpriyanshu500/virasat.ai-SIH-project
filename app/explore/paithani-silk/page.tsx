export default function PaithaniSilkPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Indian Textile & Craft
          </p>

          <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
            Paithani Silk
          </h1>

          <p className="mt-4 text-lg text-[#7b5f4d]">
            📍 Maharashtra, India
          </p>
        </header>

        {/* Image Placeholder */}
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
          <img
            src="/images/paithani-silk.jpg"
            alt="Paithani Silk"
            className="h-full w-full object-cover"
          />
        </div>

        {/* About */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            About Paithani
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Paithani is a celebrated handwoven textile tradition from
            Maharashtra, particularly associated with the town of Paithan.
            It is especially known for silk sarees featuring intricate
            borders, richly woven pallus and distinctive motifs.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Traditionally woven on handlooms, Paithani combines silk and
            zari work with highly detailed designs. The craftsmanship and
            time involved in weaving make each traditional piece a product
            of considerable skill.
          </p>
        </section>

        {/* History */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            History & Evolution
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              The Paithani tradition is associated with the historic town of
              Paithan in Maharashtra and has developed over a long period of
              textile production in the Deccan region.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Paithani weaving received important patronage during different
              periods of Maharashtra's history. Over time, weaving activity
              became strongly associated with centres such as Yeola, where
              the craft continues to be practised.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              While traditional designs remain important, contemporary
              weavers and designers have also adapted Paithani techniques
              for changing preferences and markets.
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
                Handwoven Silk
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Traditional Paithani sarees are woven using fine silk on
                handlooms.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">✨</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Zari Work
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Metallic zari is traditionally used to create elaborate
                borders and pallu designs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🦚</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Peacock Motifs
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Peacock designs are among the most recognisable motifs found
                in traditional Paithani weaving.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🌈</div>

              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Rich Colours
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Paithani is known for vibrant colour combinations and
                distinctive contrasts between the body and border.
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
            Paithani weaving involves careful placement of coloured silk
            threads and zari to create intricate motifs directly within the
            fabric. Traditional designs are built during the weaving process
            rather than simply printed onto the finished textile.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The detailed work required for the pallu and borders can make
            traditional Paithani weaving a time-intensive craft. The skill
            of the weaver is therefore central to the quality and appearance
            of the finished saree.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Handloom
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Traditional Paithani is produced using handloom weaving
                techniques.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Silk Threads
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Fine silk threads form the main structure and decorative
                elements of the textile.
              </p>
            </div>

            <div className="rounded-xl bg-[#eadbc5] p-5">
              <h3 className="font-bold text-[#3b2416]">
                Zari Integration
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Zari is woven into selected sections to create luminous
                borders and motifs.
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
                Peacock
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Peacock motifs are strongly associated with Paithani and are
                often featured prominently on the pallu.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Asawali
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                The Asawali pattern is a floral and vine-inspired design
                associated with traditional Paithani textiles.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Munia
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Munia-style motifs use small parrot-like forms and are a
                recognisable element of traditional Paithani design.
              </p>
            </div>

          </div>
        </section>

        {/* Pallu & Border */}
        <section className="mb-10 rounded-2xl bg-[#eadbc5] p-8">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            The Pallu & Border
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The pallu is one of the most visually important parts of a
            Paithani saree. It can contain elaborate motifs and extensive
            zari work, creating a strong contrast with the main body of the
            saree.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Traditional borders may feature geometric, floral and other
            repeated patterns. The relationship between the body, border and
            pallu gives Paithani its distinctive visual identity.
          </p>
        </section>

        {/* Making Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            How Paithani Is Made
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
                Silk yarn is prepared and coloured according to the intended
                design.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                02
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Loom Setup
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The yarn is carefully arranged on the handloom before
                weaving begins.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-3xl font-bold text-[#a05a2c]">
                03
              </span>

              <h3 className="mt-3 font-bold text-[#3b2416]">
                Motif Weaving
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Coloured silk and zari are woven together to form the
                detailed borders, pallu and motifs.
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
                The completed textile is inspected and finished before it is
                ready for use.
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
                Maharashtra Heritage
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Paithani is an important part of Maharashtra's textile and
                craft heritage.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Craftsmanship
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                The tradition preserves specialised knowledge of handloom
                weaving, silk preparation and decorative techniques.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Ceremonial Tradition
              </h3>

              <p className="mt-3 leading-7 text-[#654b3b]">
                Paithani sarees have an important place in Maharashtrian
                cultural and ceremonial clothing traditions.
              </p>
            </div>

          </div>
        </section>

        {/* GI */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Geographical Indication
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Paithani is recognised under India's Geographical Indication
            framework. GI recognition helps protect the regional identity
            associated with this traditional textile craft.
          </p>

          <div className="mt-6 rounded-xl bg-[#eadbc5] p-5">
            <p className="font-semibold text-[#7b3f00]">
              Region: Maharashtra, India
            </p>
          </div>
        </section>

        {/* Today */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Paithani Today
          </h2>

          <div className="mt-6 rounded-2xl bg-[#7b3f00] p-8 text-white">
            <p className="leading-8">
              Paithani continues to be produced in Maharashtra and remains
              popular for traditional, festive and ceremonial clothing.
            </p>

            <p className="mt-4 leading-8">
              Contemporary versions of Paithani are also being developed
              alongside traditional designs, allowing the craft to reach new
              generations while retaining its distinctive weaving identity.
            </p>
          </div>
        </section>

        {/* Preservation */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Heritage Protection & Preservation
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Preserving Paithani requires continued support for traditional
            weavers, documentation of weaving techniques and transmission of
            specialised knowledge to younger generations.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Supporting authentic handwoven production and increasing
            awareness of GI-recognised textiles can help protect the cultural
            and economic value of the tradition.
          </p>
        </section>

        {/* Source */}
        <section className="rounded-2xl border border-[#d9c2a3] bg-[#eadbc5] p-8">
          <h2 className="text-2xl font-bold text-[#3b2416]">
            Source & Verification
          </h2>

          <p className="mt-4 leading-7 text-[#654b3b]">
            Information for this page should be verified using Geographical
            Indication records, Government of India handicrafts and textiles
            resources, Maharashtra government resources, recognised
            handloom institutions and reliable academic references.
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