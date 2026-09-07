import Navbar from "@/components/Navbar";

export default function OdissiPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3]">
      <Navbar />

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a05a2c]">
              Indian Classical Dance
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
              Odissi
            </h1>

            <p className="mt-3 text-lg text-[#7b5f4d]">
              📍 Odisha, India
            </p>
          </div>

          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/odissi.jpg"
              alt="Odissi"
              className="h-full w-full object-cover"
            />
          </div>

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Odissi
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
              Odissi is one of India's major classical dance traditions and
              originates from Odisha. It is known for graceful movements,
              expressive gestures, sculptural poses and storytelling through
              dance.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
              The tradition has strong historical connections with Odisha's
              temple culture and devotional traditions. Its movements and
              poses are often associated with the artistic traditions visible
              in Odisha's temples and sculptures.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Odissi developed through a long history of performance,
              devotional practices and artistic traditions in Odisha. Temple
              dancers and performance communities played an important role in
              its historical development.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#654b3b]">
              During the twentieth century, artists and scholars worked to
              document, organize and revive the dance tradition as a recognized
              classical form.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Key Features
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Tribhangi
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Tribhangi is a characteristic body position in Odissi that
                  creates a three-part bend and contributes to the graceful
                  visual style of the dance.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Chauka
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Chauka is a strong square-like stance that provides balance
                  and stability and is an important part of Odissi technique.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Expressive Storytelling
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Facial expressions, hand gestures and body movements are used
                  to communicate emotions and stories.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Sculptural Movement
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Odissi is particularly recognized for poses and movements
                  that reflect the sculptural heritage of Odisha.
                </p>
              </div>

            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Music & Instruments
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Odissi performances are accompanied by Odissi music. Traditional
              performances can feature instruments such as the mardala,
              flute, violin and other melodic and rhythmic instruments.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Costume & Jewellery
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Odissi dancers traditionally wear distinctive costumes and
              jewellery associated with Odisha. Silver jewellery and the
              characteristic head ornament are important elements of the
              traditional appearance.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Odissi reflects the artistic, devotional and cultural heritage
              of Odisha. Its relationship with temple architecture, sculpture,
              music and storytelling makes it an important part of India's
              performing arts heritage.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Odissi Today
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-[#654b3b]">
              Odissi is performed and taught throughout India and
              internationally. Contemporary performers continue to preserve
              traditional techniques while exploring new themes and
              presentation styles.
            </p>
          </section>

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
              Government of India, and recognized cultural institutions
              associated with Odissi.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}