import Navbar from "@/components/Navbar";

export default function KathakPage() {
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
              Kathak
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 North India • Strongly associated with Uttar Pradesh
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/kathak.jpg"
              alt="Kathak"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Introduction */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Kathak
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              Kathak is one of the major classical dance traditions of India.
              The form is known for storytelling through movement, expressive
              gestures, rhythmic footwork, spins and close interaction with
              music.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The word Kathak is traditionally associated with the Sanskrit
              word "katha", meaning story or narrative. Storytelling has
              therefore remained an important aspect of the tradition.
            </p>
          </section>

          {/* History */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Kathak developed through a long history of storytelling,
              performance and patronage. Over time, the tradition evolved
              through different cultural environments and developed distinctive
              schools known as gharanas.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              The Lucknow and Jaipur gharanas became particularly important in
              the development of modern Kathak. The Lucknow tradition is known
              for its emphasis on expression and graceful movement, while the
              Jaipur tradition is especially associated with strong rhythmic
              technique.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              After Indian independence, changes in royal patronage created new
              challenges for traditional performers. Institutions such as
              Kathak Kendra helped support systematic teaching, performance and
              preservation of the dance form.
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
                  Rhythmic Footwork
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Precise footwork forms an important part of Kathak
                  performances and works closely with rhythmic cycles in the
                  accompanying music.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Spins & Movement
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Controlled spins and graceful movements contribute to the
                  distinctive visual character of Kathak.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Storytelling
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Facial expressions, gestures and movement are used to
                  communicate stories and emotions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Music & Rhythm
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Kathak performances are closely connected with Hindustani
                  classical music and rhythmic structures.
                </p>
              </div>
            </div>
          </section>

          {/* Gharanas */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Major Gharanas
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Lucknow Gharana
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Associated strongly with the Nawabi cultural environment of
                  Awadh, the Lucknow tradition is particularly noted for
                  expressive elements, elegance and subtle movement.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Jaipur Gharana
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The Jaipur tradition is especially recognized for its
                  emphasis on rhythm, energetic footwork and technical
                  precision.
                </p>
              </div>
            </div>
          </section>

          {/* Cultural Significance */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Kathak represents the interaction of dance, music, rhythm,
              storytelling and cultural traditions. It has continued to evolve
              while retaining its traditional vocabulary and performance
              practices.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              Institutions dedicated to Kathak education and performance play
              an important role in passing the tradition to new generations.
              Kathak Kendra in New Delhi, established in 1964 as a constituent
              unit of the Sangeet Natak Akademi, is one such major institution.
            </p>
          </section>

          {/* Modern Kathak */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Kathak Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Today, Kathak is performed and taught in India and internationally.
              Contemporary choreographers and performers continue to experiment
              with presentation while drawing from the traditional vocabulary
              of the form.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              The tradition has also expanded from primarily solo performances
              to include larger group productions and stage presentations.
              Kathak institutions and festivals continue to provide platforms
              for learning, performance and innovation.
            </p>
          </section>

          {/* Source */}
          <section className="mt-14 rounded-2xl bg-[#eadbc5] p-6">
            <h2 className="text-xl font-bold text-[#3b2416]">
              Source & Verification
            </h2>

            <p className="mt-3 leading-7 text-[#654b3b]">
              Heritage information should be verified using authoritative
              cultural institutions and reliable historical sources.
            </p>

            <p className="mt-3 text-sm text-[#7b5f4d]">
              Primary reference: Sangeet Natak Akademi, Ministry of Culture,
              Government of India.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}