import Navbar from "@/components/Navbar";

export default function BharatanatyamPage() {
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
              Bharatanatyam
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 Tamil Nadu, India
            </p>
          </div>

          {/* Image Placeholder */}
          
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
              <img
                src="/images/kathakali.jpg"
                alt="Kathakali"
                className="h-full w-full object-cover"
              />
            </div>
            
          {/* About */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Bharatanatyam
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              Bharatanatyam is one of India's major classical dance traditions
              and is strongly associated with Tamil Nadu. It combines rhythmic
              movement, expressive gestures, facial expressions and
              storytelling.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The dance is known for its precise footwork, geometric body
              positions and expressive presentation. Traditionally, both
              technical dance and dramatic expression play important roles.
            </p>
          </section>

          {/* History */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Bharatanatyam has deep historical connections with the temple and
              performance traditions of South India. The form developed through
              generations of dancers, teachers, musicians and cultural
              communities.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              During the twentieth century, major artists and institutions
              contributed to its revival, documentation and development as a
              widely recognized classical dance tradition.
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
                  Adavus
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Adavus are fundamental movement units that combine
                  coordinated footwork, body positions and rhythmic patterns.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Mudras
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Hand gestures are used to communicate ideas, objects,
                  emotions and elements of the narrative.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Abhinaya
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Expressive performance uses facial expressions, gestures and
                  body language to communicate emotions and stories.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Rhythmic Footwork
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Precise footwork works together with rhythmic patterns and
                  musical accompaniment.
                </p>
              </div>

            </div>
          </section>

          {/* Dance Structure */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Dance & Storytelling
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Bharatanatyam combines pure dance, known as nritta, with
              expressive storytelling, known as abhinaya. Performances can
              therefore move between intricate rhythmic sequences and
              emotionally expressive narrative sections.
            </p>
          </section>

          {/* Music */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Music & Instruments
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Bharatanatyam is traditionally performed with Carnatic music.
              Accompanying performances may include instruments such as the
              mridangam, violin, flute and veena, along with vocal music and
              cymbals.
            </p>
          </section>

          {/* Costume */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Costume & Jewellery
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Bharatanatyam costumes are traditionally designed to support the
              dancer's movements and create a distinctive visual appearance.
              Traditional jewellery and hair arrangements are also important
              elements of the performance presentation.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Bharatanatyam represents an important part of Tamil Nadu's
              performing arts heritage. Its combination of rhythm, movement,
              music and expressive storytelling has made it one of India's
              most widely recognized classical dance traditions.
            </p>
          </section>

          {/* Today */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Bharatanatyam Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Today, Bharatanatyam is taught and performed throughout India
              and internationally. Artists continue to preserve its traditional
              vocabulary while also exploring contemporary themes and
              presentation formats.
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
              Government of India, and recognized institutions dedicated to
              Bharatanatyam and Indian classical dance.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}