import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AgentsGrid } from "@/components/agents-grid";
import { RolesSection } from "@/components/roles-section";
import { LoreSection } from "@/components/lore-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AgentsGrid />
      <RolesSection />
      <LoreSection />
      <Footer />
    </main>
  );
}
