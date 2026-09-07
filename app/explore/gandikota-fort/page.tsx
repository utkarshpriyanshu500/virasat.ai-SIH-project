import Navbar from "@/components/Navbar";

export default function GandikotaFortPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e3]">
      <Navbar />

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a05a2c]">
              Indian Heritage Monument
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#3b2416] md:text-6xl">
              Gandikota Fort
            </h1>

            <p className="mt-4 text-lg text-[#654b3b]">
              📍 Gandikota, Andhra Pradesh, India
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-md md:h-[500px]">
            <img
              src="/images/gandikota-fort.jpg"
              alt="Gandikota Fort"
              className="h-full w-full object-cover"
            />
          </div>

          {/* About */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              About Gandikota Fort
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Gandikota Fort is a historic fort complex in Andhra Pradesh,
              situated on the banks of the Pennar River. The fort is especially
              famous for its dramatic natural setting, where the river cuts
              through a deep gorge surrounded by rugged rocky terrain.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Because of this landscape, Gandikota is often associated with
              the name “Grand Canyon of India.” Beyond its natural scenery,
              the fort contains gateways, temples, mosques, granaries and
              other historic structures that reflect the region's layered
              architectural history.
            </p>
          </section>

          {/* History */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              History & Evolution
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Gandikota developed as an important fortified settlement in the
              region and became associated with several ruling powers over
              different periods of history.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The fort is strongly associated with the Pemmasani Nayakas, who
              played an important role in the history of Gandikota during the
              Vijayanagara period. The fort's strategic position above the
              Pennar gorge made it naturally defensible.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Later historical developments brought Gandikota under the control
              of other regional powers, adding further layers to its
              architectural and cultural history.
            </p>
          </section>

          {/* Natural Landscape */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              The Pennar Gorge
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              One of Gandikota's most distinctive features is its location
              beside a dramatic gorge formed by the Pennar River. The steep
              rocky cliffs provided a natural defensive advantage and shaped
              the identity of the settlement.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🏞️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Pennar River
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The river flows through the gorge below the fort and forms
                  an important part of its landscape.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">⛰️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Rocky Gorge
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  Massive rock formations surround the fort and create its
                  characteristic rugged landscape.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🛡️</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Natural Defence
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The steep terrain and gorge provided significant defensive
                  advantages to the historic settlement.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-4xl">🌄</div>

                <h3 className="mt-4 text-xl font-bold text-[#3b2416]">
                  Scenic Landscape
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#654b3b]">
                  The combination of historic architecture and dramatic
                  natural scenery makes Gandikota visually distinctive.
                </p>
              </div>

            </div>
          </section>

          {/* Architecture */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Architecture & Structures
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              The fort complex contains a variety of historic structures.
              Together they demonstrate the religious, military and
              administrative functions of the settlement.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Fortification Walls
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Massive stone fortifications follow the natural contours of
                  the rocky landscape and helped protect the settlement.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Gandikota Gateway
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The historic entrance is an important part of the defensive
                  architecture of the fort.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Temples
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  Historic temples within the fort reflect the religious
                  traditions of the communities that lived in the region.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-bold text-[#3b2416]">
                  Mosque
                </h3>

                <p className="mt-3 leading-7 text-[#654b3b]">
                  The fort also contains Islamic architectural remains,
                  reflecting the changing political and cultural history of
                  the region.
                </p>
              </div>

            </div>
          </section>

          {/* Religious Heritage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Religious & Cultural Heritage
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Gandikota contains monuments representing different religious
              traditions. The presence of temples and a mosque within the
              historic fort illustrates the cultural layers that developed
              around the settlement over time.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Important structures associated with the fort include the
              Madhavaraya Temple and Ranganatha Swamy Temple, along with the
              historic Jamia Masjid.
            </p>
          </section>

          {/* Military Significance */}
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Military Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Gandikota's greatest strategic advantage came from its geography.
              The fort was positioned on a naturally protected plateau with
              steep cliffs and a deep gorge along the Pennar River.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              The combination of natural barriers and constructed walls made
              the settlement difficult to approach and contributed to its
              importance as a fortified centre.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Cultural Significance
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Gandikota represents the connection between India's natural
              landscapes and its built heritage. The fort demonstrates how
              historical communities adapted architecture and defence
              strategies to their geographical surroundings.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              It also reflects the cultural diversity of Andhra Pradesh through
              its temples, mosque, fortifications and historic settlement
              remains.
            </p>
          </section>

          {/* Heritage Protection */}
          <section className="mb-12 rounded-2xl bg-[#eadbc5] p-8">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Heritage Protection & Conservation
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Historic structures at Gandikota are exposed to weathering,
              vegetation growth and the effects of time. Protecting the fort
              requires conservation of both individual monuments and the
              larger historic landscape.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Responsible tourism and proper heritage management can help
              preserve the fort while allowing visitors to understand its
              historical and cultural importance.
            </p>
          </section>

          {/* Today */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#3b2416]">
              Gandikota Today
            </h2>

            <p className="mt-5 leading-8 text-[#654b3b]">
              Today, Gandikota is known for both its historic fort and its
              dramatic landscape. It attracts visitors interested in history,
              architecture, archaeology and natural scenery.
            </p>

            <p className="mt-4 leading-8 text-[#654b3b]">
              Its combination of a historic fortified settlement and the
              Pennar gorge makes Gandikota an excellent example of the
              relationship between geography and cultural heritage.
            </p>
          </section>

          {/* Source & Verification */}
          <section className="rounded-2xl bg-[#7b3f00] p-8 text-white">
            <h2 className="text-2xl font-bold">
              Source & Verification
            </h2>

            <p className="mt-4 leading-7 text-[#f7f1e3]">
              Heritage information should be verified using authoritative
              sources such as the Archaeological Survey of India, Government
              of Andhra Pradesh tourism and culture departments, Ministry of
              Culture, and reliable archaeological or academic publications.
            </p>

            <p className="mt-4 text-sm text-[#eadbc5]">
              Virasat.ai uses AI-assisted discovery and presentation while
              prioritizing reliable heritage information and source
              verification.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}