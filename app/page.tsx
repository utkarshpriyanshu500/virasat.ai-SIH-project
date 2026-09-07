import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import CommunityArtisanCard from "@/components/CommunityArtisanCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <Hero />

      <AboutSection />

      <CommunityArtisanCard />

      <Footer />
    </main>
  );
}