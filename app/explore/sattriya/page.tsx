import Navbar from "@/components/Navbar";

export default function SattriyaPage() {
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
              Sattriya
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 Assam, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/sattriya.jpg"
              alt="Sattriya"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Sattriya
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              Sattriya is one of India&apos;s major classical dance traditions
              and originated in Assam. It developed within the Vaishnavite
              monastic institutions known as Satras and is closely connected
              with the devotional and artistic traditions of Assam.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The dance combines movement, expression, music and storytelling
              to present devotional and mythological themes.
            </p>
          </section>

          {/* History */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Sattriya has its roots in the Neo-Vaishnavite movement associated
              with the Assamese saint and reformer Srimanta Sankardeva. The
              tradition developed as part of the cultural activities of the
              Satras.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              For centuries, Sattriya was primarily practiced within the Satra
              institutions. During the twentieth century, artists and scholars
              helped establish its wider recognition as a classical Indian
              dance tradition.
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
                  Devotional Themes
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Sattriya traditionally presents devotional stories and
                  themes, particularly those connected with Vaishnavite
                  traditions and the life of Lord Krishna.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Expressive Movement
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Body movements, hand gestures and facial expressions are
                  combined to communicate emotions, characters and stories.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Storytelling
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Sattriya uses dance and theatre elements to present episodes
                  from Hindu religious and mythological traditions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Sattras
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The historical development of Sattriya is closely associated
                  with Assam&apos;s Satras, which served as important centers
                  of religious and cultural activity.
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
              Sattriya performances can portray stories from Hindu epics,
              Puranic traditions and Vaishnavite devotional literature. Dance,
              acting and music work together to communicate the narrative.
            </p>
          </section>

          {/* Music */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Music & Instruments
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Music is an essential part of Sattriya performance. Traditional
              accompaniment includes the khol, a double-headed drum, along
              with cymbals, flute and vocal music.
            </p>
          </section>

          {/* Costume */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Costume & Jewellery
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Sattriya costumes reflect the cultural traditions of Assam.
              Traditional clothing, ornaments and distinctive costume elements
              help identify characters and enhance the visual presentation of
              performances.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Sattriya is an important part of Assam&apos;s cultural heritage.
              Its connection with the Satras, devotional traditions, music,
              theatre and literature gives it a distinctive place among
              India&apos;s classical performing arts.
            </p>
          </section>

          {/* Today */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Sattriya Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Sattriya is now taught and performed beyond the traditional Satra
              environment, including across India and internationally. Artists
              continue to preserve its traditional repertoire while presenting
              it to new audiences.
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
              institutions associated with Assam&apos;s Sattriya tradition.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}