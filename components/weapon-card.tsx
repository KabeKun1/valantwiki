"use client";

import { useState } from "react";
import { type Weapon, skinTiers } from "@/lib/weapons";
import Image from "next/image";
import Link from "next/link";
import { Crosshair, Layers } from "lucide-react";

interface WeaponCardProps {
  weapon: Weapon;
}

export function WeaponCard({ weapon }: WeaponCardProps) {
  const [imgError, setImgError] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sidearm":
        return "#58C8D4";
      case "SMG":
        return "#FE8040";
      case "Shotgun":
        return "#D97F42";
      case "Rifle":
        return "#FF4655";
      case "Sniper":
        return "#3AE25A";
      case "Machine Gun":
        return "#9D44B5";
      case "Melee":
        return "#F8B855";
      default:
        return "#58C8D4";
    }
  };

  const categoryColor = getCategoryColor(weapon.category);

  return (
    <Link
      href={`/weapons/${weapon.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${categoryColor}10 0%, transparent 50%)`,
        }}
      />

      <div className="relative h-40 w-full overflow-hidden bg-secondary/30">
        {!imgError ? (
          <Image
            src={weapon.image}
            alt={weapon.name}
            width={180}
            height={180}
            className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs text-muted-foreground">
              Image unavailable
            </span>
          </div>
        )}
        <span
          className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: `${categoryColor}90`, color: "#fff" }}
        >
          {weapon.category}
        </span>
        {weapon.cost > 0 && (
          <span className="absolute bottom-3 left-3 rounded bg-background/80 px-2 py-1 text-xs font-bold text-primary">
            {weapon.cost} creds
          </span>
        )}
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5">
        <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {weapon.name}
        </h3>

        <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
          {weapon.fireRate > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Crosshair className="h-3.5 w-3.5 text-primary" />
              <span>{weapon.fireRate} rds/sec</span>
            </div>
          )}
          {weapon.magazineSize > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Layers className="h-3.5 w-3.5 text-primary" />
              <span>{weapon.magazineSize} rounds</span>
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1">
            {weapon.skins.slice(0, 4).map((skin) => (
              <div
                key={skin.id}
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: skinTiers[skin.tier].color }}
                title={skin.tier}
              />
            ))}
            {weapon.skins.length > 4 && (
              <span className="ml-1 text-xs text-muted-foreground">
                +{weapon.skins.length - 4}
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {weapon.skins.length} skins
          </span>
        </div>
      </div>
    </Link>
  );
}
