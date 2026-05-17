"use client";

import { useState } from "react";
import { type WeaponSkin, skinTiers } from "@/lib/weapons";
import Image from "next/image";

interface SkinCardProps {
  skin: WeaponSkin;
}

export function SkinCard({ skin }: SkinCardProps) {
  const tier = skinTiers[skin.tier];
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${tier.color}15 0%, transparent 50%)`,
        }}
      />

      <div className="relative h-32 w-full overflow-hidden bg-secondary/30">
        {!imgError ? (
          <Image
            src={skin.image}
            alt={skin.name}
            width={140}
            height={140}
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
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
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-4">
        <h4 className="mb-2 text-sm font-semibold text-foreground line-clamp-2">
          {skin.name}
        </h4>
        <div className="mt-auto flex items-center gap-2">
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: tier.color }}
          />
          <span className="text-xs text-muted-foreground">{tier.label}</span>
        </div>
      </div>
    </div>
  );
}
