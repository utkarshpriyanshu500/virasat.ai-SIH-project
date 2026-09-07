import Navbar from "@/components/Navbar";

export default function KathakaliPage() {
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
              Kathakali
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 Kerala, India
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
              About Kathakali
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              Kathakali is a major classical dance-drama tradition of Kerala.
              It combines dance, acting, music, elaborate costumes, facial
              expressions and stylized movements to present stories and
              characters from Indian literary and cultural traditions.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The form is especially known for its highly recognizable makeup,
              colorful costumes and expressive performance style.
            </p>
          </section>

          {/* History */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Kathakali developed in Kerala from earlier performance traditions
              and gradually evolved into a distinctive dance-drama form.
              Royal and temple-related cultural environments contributed to its
              development and patronage.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              Over time, teachers and institutions helped preserve its
              techniques and performance traditions while allowing the art form
              to reach wider audiences.
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
                  Expressive Acting
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Facial expressions, hand gestures and controlled body
                  movements are central to Kathakali storytelling.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Elaborate Makeup
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Distinctive makeup styles help communicate the identity and
                  nature of different characters.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Costumes
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Performers wear elaborate costumes and headgear that create
                  the dramatic visual identity of Kathakali.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Music & Rhythm
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Vocal music and percussion accompany the performers and help
                  establish the rhythm and dramatic atmosphere.
                </p>
              </div>

            </div>
          </section>

          {/* Performance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Performance & Storytelling
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Kathakali traditionally presents dramatic stories through a
              combination of dance, acting, gestures and music. Performers use
              a highly developed vocabulary of facial and bodily expressions
              to communicate emotions and narrative situations.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Kathakali represents an important part of Kerala's performing
              arts heritage. Its combination of dance, theatre, music,
              storytelling, costume and visual design makes it a distinctive
              cultural tradition.
            </p>
          </section>

          {/* Today */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Kathakali Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Kathakali continues to be taught and performed in Kerala and
              beyond. Cultural institutions, training centers, festivals and
              individual artists contribute to its continued practice and
              transmission to new generations.
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
              Primary references can include Kerala cultural institutions and
              the Ministry of Culture, Government of India.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}