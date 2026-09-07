import Navbar from "@/components/Navbar";

export default function ManipuriPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3]">
      <Navbar />

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a05a2c]">
              Indian Classical Dance
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
              Manipuri
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 Manipur, India
            </p>
          </div>

          {/* Image Placeholder */}
         <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/manipuri.jpg"
              alt="Manipuri"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Manipuri
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              Manipuri is one of India&apos;s major classical dance traditions
              and originates from the northeastern state of Manipur. It is
              known for its graceful, soft movements, devotional themes and
              distinctive costumes.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The dance tradition has strong connections with the cultural and
              devotional traditions of Manipur, particularly stories associated
              with Radha and Krishna.
            </p>
          </section>

          {/* History */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Manipuri developed within the cultural traditions of Manipur,
              where dance, music and religious practices were closely
              connected. Vaishnavite traditions played an important role in
              shaping its devotional repertoire.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              Over time, the tradition evolved through temple and community
              performance practices and later gained wider recognition as one
              of India&apos;s classical dance forms.
            </p>
          </section>

          {/* Key Features */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Key Features
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Graceful Movements
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Manipuri is recognized for its gentle, flowing movements and
                  controlled body technique, creating a soft and graceful visual
                  style.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Ras Lila
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Ras Lila is an important performance tradition depicting
                  devotional stories associated with Radha and Krishna.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Expressive Storytelling
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Facial expressions, gestures and movement are used to
                  communicate emotions, characters and stories.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Circular Movements
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Many Manipuri movements emphasize smooth and rounded motion,
                  giving performances a distinctive flowing quality.
                </p>
              </div>

            </div>
          </section>

          {/* Dance & Storytelling */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Dance & Storytelling
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Manipuri performances frequently explore devotional and mythological
              themes. Stories connected with Krishna, Radha and other figures
              from Vaishnavite traditions form an important part of the
              repertoire.
            </p>
          </section>

          {/* Music */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Music & Instruments
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Music is an integral part of Manipuri dance. Traditional
              performances can include vocal music and instruments such as the
              pung, a traditional drum associated with Manipur, along with
              cymbals and other musical instruments.
            </p>
          </section>

          {/* Costume */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Costume & Jewellery
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Manipuri dance is known for its distinctive costumes. Female
              performers traditionally wear the characteristic stiff cylindrical
              skirt known as the Kumil, along with decorative clothing and
              jewellery.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Manipuri represents the cultural identity and artistic traditions
              of Manipur. Its connection with devotional practices, music,
              storytelling and community traditions makes it an important part
              of India&apos;s performing arts heritage.
            </p>
          </section>

          {/* Today */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Manipuri Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Manipuri is taught and performed in India and internationally.
              Dance institutions and artists continue to preserve traditional
              techniques while introducing the art form to new audiences.
            </p>
          </section>

          {/* Source */}
          <section className="mt-14 rounded-2xl bg-[#eadbc5] p-6">
            <h2 className="text-xl font-bold text-[#3b2416]">
              Source & Verification
            </h2>

            <p className="mt-3 leading-7 text-[#654b3b]">
              Heritage information should be verified using authoritative
              cultural institutions, government sources and reliable academic
              references.
            </p>

            <p className="mt-3 text-sm text-[#7b5f4d]">
              Primary references can include the Ministry of Culture,
              Government of India, Sangeet Natak Akademi and recognized
              institutions associated with Manipuri dance.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}