export default function KanglaFortPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Indian Heritage Monument
          </p>

          <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
            Kangla Fort
          </h1>

          <p className="mt-4 text-lg text-[#7b5f4d]">
            📍 Imphal, Manipur, India
          </p>
        </header>

        {/* Image Placeholder */}
       <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
          <img
            src="/images/kangla-fort.jpg"
            alt="Kangla Fort"
            className="h-full w-full object-cover"
          />
        </div>

        {/* About */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            About Kangla Fort
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Kangla Fort is a historic fortified complex located in the heart
            of Imphal, Manipur. It was an important royal centre of the
            Meitei kingdom and played a major role in the political, cultural
            and religious history of Manipur.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            More than a conventional fort, Kangla represents a cultural
            landscape containing archaeological remains, sacred spaces,
            historic structures and traditional associations connected with
            the history of the Meitei people.
          </p>
        </section>

        {/* History */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            History & Evolution
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              Kangla has been associated with the rulers of Manipur for
              centuries and developed as the political and ceremonial centre
              of the kingdom. Its history reflects the changing political
              landscape of the region and the evolution of the Meitei state.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              During the colonial period, Kangla came under British control
              following the Anglo-Manipur conflict of the nineteenth century.
              The site subsequently experienced significant changes in its
              use and physical condition.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              In modern times, efforts have focused on recognising Kangla as
              an important symbol of Manipur's history and conserving its
              archaeological and cultural heritage.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Architectural & Cultural Features
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">👑</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Royal Centre
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Kangla functioned as an important royal and administrative
                centre of the historic kingdom of Manipur.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🧱</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Fortification
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                The complex developed as a fortified landscape containing
                defensive features and enclosed royal spaces.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🌿</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Sacred Landscape
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Historic structures, water bodies and sacred places form an
                important part of Kangla's cultural landscape.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🏺</div>
              <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                Archaeological Heritage
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                Archaeological remains at Kangla provide evidence of the
                site's long historical development.
              </p>
            </div>

          </div>
        </section>

        {/* Kangla Sha */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            The Kangla Sha
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            The Kangla Sha are two iconic guardian figures associated with
            Kangla. They are traditionally represented as powerful mythical
            creatures and have become important visual symbols of Manipur's
            cultural identity.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Their imagery connects the historic site with the traditional
            beliefs and symbolic traditions associated with the Meitei
            cultural landscape.
          </p>
        </section>

        {/* Royal Heritage */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Royal Heritage
          </h2>

          <div className="mt-6 rounded-2xl bg-[#eadbc5] p-8">
            <p className="leading-8 text-[#654b3b]">
              Kangla was closely connected with the monarchy of Manipur.
              Royal authority, administration and important ceremonial
              activities were associated with the complex.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The remains of the site therefore provide more than architectural
              evidence. They also help illustrate the political organisation,
              traditions and cultural practices of the historic Manipur
              kingdom.
            </p>
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
                Identity
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Kangla is strongly associated with the historical and cultural
                identity of Manipur.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Living Traditions
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                The site remains connected with cultural memory, traditional
                practices and public heritage awareness.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2416]">
                Historical Memory
              </h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Kangla represents an important chapter in the political and
                cultural history of the region.
              </p>
            </div>

          </div>
        </section>

        {/* Conservation */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Heritage Protection & Conservation
          </h2>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Conservation of Kangla involves protecting its archaeological
            remains, historic structures, sacred landscape and cultural
            associations. Government and heritage authorities have undertaken
            efforts to maintain and restore important parts of the complex.
          </p>

          <p className="mt-4 leading-8 text-[#654b3b]">
            Sustainable heritage management is important so that conservation
            work protects both the physical remains and the cultural
            significance of the site.
          </p>
        </section>

        {/* Today */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#3b2416]">
            Kangla Fort Today
          </h2>

          <div className="mt-6 rounded-2xl bg-[#7b3f00] p-8 text-white">
            <p className="leading-8">
              Today, Kangla is one of the most significant heritage sites in
              Imphal. The complex serves as an important destination for
              understanding Manipur's history, architecture and cultural
              traditions.
            </p>

            <p className="mt-4 leading-8">
              Its combination of archaeological remains, royal history,
              sacred traditions and distinctive cultural symbols makes Kangla
              an important part of India's diverse heritage landscape.
            </p>
          </div>
        </section>

        {/* Source */}
        <section className="rounded-2xl border border-[#d9c2a3] bg-[#eadbc5] p-8">
          <h2 className="text-2xl font-bold text-[#3b2416]">
            Source & Verification
          </h2>

          <p className="mt-4 leading-7 text-[#654b3b]">
            Information for this page should be verified using official
            Government of Manipur heritage resources, the Kangla Fort
            authorities, Ministry of Culture resources and reliable
            archaeological or academic references.
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