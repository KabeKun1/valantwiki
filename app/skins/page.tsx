import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SkinsGrid } from "@/components/skins-grid";
import { Palette, Sparkles } from "lucide-react";
import { allSkins, skinTiers } from "@/lib/skins";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weapon Skins | VALORANT Collection",
  description: "Browse all VALORANT weapon skins by collection, tier, and weapon type. From Prime to Elderflame, explore every skin available.",
};

export default function SkinsPage() {
  const tierCounts = {
    Exclusive: allSkins.filter(s => s.tier === "Exclusive").length,
    Ultra: allSkins.filter(s => s.tier === "Ultra").length,
    Premium: allSkins.filter(s => s.tier === "Premium").length,
    Deluxe: allSkins.filter(s => s.tier === "Deluxe").length,
    Select: allSkins.filter(s => s.tier === "Select").length,
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Palette className="h-8 w-8 text-primary" />
            </div>
            
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-primary">Weapon</span> Skins
            </h1>
            
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Browse the complete collection of VALORANT weapon skins. From legendary collections 
              like Prime and Elderflame to exclusive Champions bundles.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {Object.entries(skinTiers).reverse().map(([tier, info]) => (
                <div
                  key={tier}
                  className="flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: info.color }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {tierCounts[tier as keyof typeof tierCounts]} {tier}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">{allSkins.length} total skins available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <SkinsGrid />
      </section>

      <Footer />
    </main>
  );
}
