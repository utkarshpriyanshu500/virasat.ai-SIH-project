import Link from "next/link";

export default function KonarkSunTemplePage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] text-[#3b2416]">
      {/* Header */}
      <section className="border-b border-[#d9c2a3]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link
            href="/explore"
            className="text-sm font-semibold text-[#7b3f00] hover:underline"
          >
            ← Back to Explore
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
            Indian Heritage Monument
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-6xl">
            Konark Sun Temple
          </h1>

          <p className="mt-4 text-lg text-[#654b3b]">
            Konark, Odisha, India
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
          <img
            src="/images/konark-sun-temple.jpg"
            alt="Konark Sun Temple"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold">About Konark Sun Temple</h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
          The Konark Sun Temple is a monumental temple dedicated to Surya, the
          Hindu Sun God. Located on the eastern coast of Odisha, it is one of
          India&apos;s most celebrated examples of temple architecture and
          stone craftsmanship.
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
          The temple is famously designed in the form of a colossal chariot,
          representing the chariot of the Sun God. Its architecture combines
          religious symbolism, sculpture, engineering and artistic expression.
        </p>
      </section>

      {/* History */}
      <section className="bg-[#eadbc5]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">History & Evolution</h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
            The Konark Sun Temple was built in the 13th century during the
            reign of King Narasimhadeva I of the Eastern Ganga dynasty.
            Construction is generally dated to the 1200s.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
            Over the centuries, the temple complex experienced structural
            damage and deterioration. Despite this, its surviving sculptures
            and architectural elements continue to provide important evidence
            of medieval Odisha&apos;s artistic and cultural traditions.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Architectural Features</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Chariot Design</h3>
            <p className="mt-3 leading-7 text-[#654b3b]">
              The temple is conceived as a monumental stone chariot associated
              with Surya, creating one of the most distinctive architectural
              forms in Indian temple heritage.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Stone Wheels</h3>
            <p className="mt-3 leading-7 text-[#654b3b]">
              The monument is famous for its large carved stone wheels, which
              are among its most recognisable artistic features.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Sculptural Detail</h3>
            <p className="mt-3 leading-7 text-[#654b3b]">
              Its surviving surfaces contain extensive carvings depicting
              deities, musicians, animals, plants and scenes associated with
              social and cultural life.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Kalinga Architecture</h3>
            <p className="mt-3 leading-7 text-[#654b3b]">
              The temple represents an important development of the Kalinga
              architectural tradition of Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Wheels & Symbolism */}
      <section className="bg-[#eadbc5]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">The Famous Stone Wheels</h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
            The carved wheels are among the defining features of Konark. Their
            detailed spokes and decorative elements demonstrate the precision
            of medieval stone craftsmanship.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
            The wheel imagery contributes to the temple&apos;s broader
            representation of the Sun God&apos;s celestial chariot and the
            passage of time.
          </p>
        </div>
      </section>

      {/* Sculptures */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Sculptures & Artistic Heritage</h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
          Konark is renowned for its extensive sculptural programme. The
          surviving carvings show religious imagery alongside representations
          of musicians, dancers, animals, vegetation and aspects of everyday
          life.
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
          These sculptures make the monument valuable not only as a place of
          worship but also as a record of the artistic traditions and social
          imagination of its period.
        </p>
      </section>

      {/* Cultural Significance */}
      <section className="bg-[#eadbc5]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">Cultural Significance</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Odisha&apos;s Heritage</h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Konark is an important symbol of Odisha&apos;s architectural,
                artistic and religious heritage.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Architecture</h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                The monument demonstrates the technical and artistic
                achievements of medieval Indian temple builders.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Living Heritage</h3>
              <p className="mt-3 leading-7 text-[#654b3b]">
                Konark continues to influence cultural events, tourism,
                scholarship and artistic traditions in Odisha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Konark Sun Temple Today</h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-[#654b3b]">
          Today, the Konark Sun Temple is one of Odisha&apos;s most important
          heritage sites. Conservation efforts focus on protecting the
          surviving structure and sculptures while allowing visitors and
          researchers to understand its historical importance.
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#654b3b]">
          The monument also plays an important role in cultural tourism and
          the wider recognition of Odisha&apos;s heritage.
        </p>
      </section>

      {/* Source */}
      <section className="border-t border-[#d9c2a3] bg-[#f1e6d3]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-bold">Source & Verification</h2>

          <p className="mt-4 max-w-4xl leading-7 text-[#654b3b]">
            Historical and heritage information should be verified using
            authoritative sources such as the Archaeological Survey of India
            and UNESCO World Heritage documentation.
          </p>
        </div>
      </section>

      {/* Back */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/explore"
          className="inline-block rounded-full bg-[#7b3f00] px-6 py-3 font-semibold text-white transition hover:bg-[#5f3000]"
        >
          ← Explore More Heritage
        </Link>
      </div>
    </main>
  );
}