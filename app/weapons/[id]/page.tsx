import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { weapons, skinTiers } from "@/lib/weapons";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Crosshair, Layers, Shield, Target } from "lucide-react";
import { SkinCard } from "@/components/skin-card";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const weapon = weapons.find((w) => w.id === id);

  if (!weapon) {
    return { title: "Weapon Not Found" };
  }

  return {
    title: `${weapon.name} Skins | VALORANT Arsenal`,
    description: `Explore all ${weapon.skins.length} skins available for the ${weapon.name} in VALORANT.`,
  };
}

export async function generateStaticParams() {
  return weapons.map((weapon) => ({
    id: weapon.id,
  }));
}

export default async function WeaponDetailPage({ params }: Props) {
  const { id } = await params;
  const weapon = weapons.find((w) => w.id === id);

  if (!weapon) {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sidearm": return "#58C8D4";
      case "SMG": return "#FE8040";
      case "Shotgun": return "#D97F42";
      case "Rifle": return "#FF4655";
      case "Sniper": return "#3AE25A";
      case "Machine Gun": return "#9D44B5";
      case "Melee": return "#F8B855";
      default: return "#58C8D4";
    }
  };

  const categoryColor = getCategoryColor(weapon.category);

  const skinsByTier = {
    Exclusive: weapon.skins.filter((s) => s.tier === "Exclusive"),
    Ultra: weapon.skins.filter((s) => s.tier === "Ultra"),
    Premium: weapon.skins.filter((s) => s.tier === "Premium"),
    Deluxe: weapon.skins.filter((s) => s.tier === "Deluxe"),
    Select: weapon.skins.filter((s) => s.tier === "Select"),
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <Link
          href="/weapons"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Arsenal
        </Link>

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <div
            className="relative flex items-center justify-center rounded-xl border border-border p-8"
            style={{ backgroundColor: `${categoryColor}08` }}
          >
            <div className="relative h-48 w-full md:h-64">
              <Image
                src={weapon.image}
                alt={weapon.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <span
              className="absolute top-4 right-4 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ backgroundColor: `${categoryColor}`, color: "#fff" }}
            >
              {weapon.category}
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              {weapon.name}
            </h1>

            {weapon.cost > 0 && (
              <p className="mb-6 text-2xl font-bold text-primary">
                {weapon.cost} Credits
              </p>
            )}

            <div className="mb-6 grid grid-cols-2 gap-4">
              {weapon.fireRate > 0 && (
                <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                  <Crosshair className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Fire Rate</p>
                    <p className="font-semibold text-foreground">{weapon.fireRate} rds/sec</p>
                  </div>
                </div>
              )}
              {weapon.magazineSize > 0 && (
                <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                  <Layers className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Magazine</p>
                    <p className="font-semibold text-foreground">{weapon.magazineSize} rounds</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                <Target className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Wall Penetration</p>
                  <p className="font-semibold text-foreground">{weapon.wallPenetration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Available Skins</p>
                  <p className="font-semibold text-foreground">{weapon.skins.length} skins</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {Object.entries(skinTiers).map(([tier, info]) => {
                const count = weapon.skins.filter((s) => s.tier === tier).length;
                if (count === 0) return null;
                return (
                  <div
                    key={tier}
                    className="flex items-center gap-2 rounded-full px-3 py-1"
                    style={{ backgroundColor: `${info.color}20` }}
                  >
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: info.color }}
                    />
                    <span className="text-xs font-medium text-foreground">
                      {count} {tier}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Available Skins
          </h2>

          {Object.entries(skinsByTier).map(([tier, skins]) => {
            if (skins.length === 0) return null;
            const tierInfo = skinTiers[tier as keyof typeof skinTiers];

            return (
              <div key={tier} className="mb-10">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: tierInfo.color }}
                  />
                  <h3 className="text-lg font-semibold text-foreground">
                    {tierInfo.label}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    ({skins.length} {skins.length === 1 ? "skin" : "skins"})
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {skins.map((skin) => (
                    <SkinCard key={skin.id} skin={skin} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>

      <Footer />
    </main>
  );
}
