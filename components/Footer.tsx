export default function Footer() {
  const team = [
    "Utkarsh Priyanshu",
    "Aditya Ray",
    "Yatika Negi",
    "Shiva Singh",
    "Mohd Saim",
    "Rachit Pratap Singh",
  ];

  return (
    <footer className="bg-[#3b2416] px-6 py-14 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold">
            Virasat.ai — Artifacts of India
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#e8d6c5]">
          Discover, understand and celebrate the rich cultural heritage of
          India.
        </p>

        <div className="mx-auto mt-10 h-px max-w-3xl bg-[#765442]" />

        <p className="mt-8 text-lg font-medium">
          Made with ❤️ for SIH 2026
        </p>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9b99a]">
            Made by
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#e8d6c5]">
            {team.map((member) => (
              <span key={member}>{member}</span>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-[#bda99a]">
          © 2026 Virasat.ai. Built for Smart India Hackathon 2026.
        </p>
      </div>
    </footer>
  );
}