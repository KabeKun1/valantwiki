import { Header } from "@/components/header";
import { WeaponsGrid } from "@/components/weapons-grid";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VALORANT Weapons & Skins | Arsenal",
  description: "Explore all VALORANT weapons and their skins. Browse sidearms, SMGs, rifles, snipers, and more.",
};

export default function WeaponsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              WEAPONS <span className="text-primary">&</span> SKINS
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Every weapon in VALORANT comes with unique characteristics and a variety of stunning skins to customize your loadout.
            </p>
          </div>
        </div>
        <WeaponsGrid />
      </div>
      <Footer />
    </main>
  );
}
