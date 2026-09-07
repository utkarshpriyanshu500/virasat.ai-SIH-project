import { supabase } from "@/lib/supabase";

export default async function TestSupabase() {
  const { data, error } = await supabase
    .from("heritage")
    .select("*");

  return (
    <main className="min-h-screen bg-[#f7f1e3] p-10">
      <h1 className="text-3xl font-bold text-[#3b2416]">
        Supabase Test
      </h1>

      {error ? (
        <p className="mt-6 text-red-600">
          Error: {error.message}
        </p>
      ) : (
        <p className="mt-6 text-green-700">
          Successfully loaded {data.length} heritage records!
        </p>
      )}
    </main>
  );
}