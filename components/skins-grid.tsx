"use client";

import { useState, useMemo } from "react";
import { allSkins, skinTiers, collections, type Skin } from "@/lib/skins";
import Image from "next/image";
import { Search, Filter, Sparkles } from "lucide-react";
import Link from "next/link";

const tiers = ["All", "Exclusive", "Ultra", "Premium", "Deluxe", "Select"] as const;

export function SkinsGrid() {
  const [selectedTier, setSelectedTier] = useState<string>("All");
  const [selectedCollection, setSelectedCollection] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkins = useMemo(() => {
    return allSkins.filter((skin) => {
      const matchesTier = selectedTier === "All" || skin.tier === selectedTier;
      const matchesCollection = selectedCollection === "All" || skin.collection === selectedCollection;
      const matchesSearch = skin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skin.weaponName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skin.collection.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTier && matchesCollection && matchesSearch;
    });
  }, [selectedTier, selectedCollection, searchQuery]);

  const groupedByCollection = useMemo(() => {
    if (selectedCollection !== "All") {
      return { [selectedCollection]: filteredSkins };
    }
    
    const groups: Record<string, Skin[]> = {};
    filteredSkins.forEach((skin) => {
      if (!groups[skin.collection]) {
        groups[skin.collection] = [];
      }
      groups[skin.collection].push(skin);
    });
    return groups;
  }, [filteredSkins, selectedCollection]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search skins by name, weapon, or collection..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-secondary/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Tier:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tiers.map((tier) => {
              const tierInfo = tier !== "All" ? skinTiers[tier as keyof typeof skinTiers] : null;
              return (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    selectedTier === tier
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {tierInfo && (
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: tierInfo.color }}
                    />
                  )}
                  {tier}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">Collection:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCollection("All")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              selectedCollection === "All"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            All Collections
          </button>
          {collections.map((collection) => {
            const count = allSkins.filter(s => s.collection === collection).length;
            if (count === 0) return null;
            return (
              <button
                key={collection}
                onClick={() => setSelectedCollection(collection)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedCollection === collection
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {collection} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        Showing {filteredSkins.length} skins
      </p>

      {Object.entries(groupedByCollection).map(([collection, skins]) => {
        if (skins.length === 0) return null;
        return (
          <div key={collection} className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <h3 className="text-xl font-bold text-foreground">{collection}</h3>
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                {skins.length} {skins.length === 1 ? "skin" : "skins"}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {skins.map((skin) => (
                <SkinGridCard key={skin.id} skin={skin} />
              ))}
            </div>
          </div>
        );
      })}

      {filteredSkins.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 rounded-full bg-secondary p-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">No skins found</h3>
          <p className="text-sm text-muted-foreground">
            Try adjusting your filters or search query
          </p>
        </div>
      )}
    </div>
  );
}

function SkinGridCard({ skin }: { skin: Skin }) {
  const tier = skinTiers[skin.tier];
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/weapons/${skin.weaponId}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${tier.color}15 0%, transparent 50%)`,
        }}
      />

      <div className="relative h-28 w-full overflow-hidden bg-secondary/30">
        {!imgError ? (
          <Image
            src={skin.image}
            alt={skin.name}
            fill
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs text-muted-foreground">No image</span>
          </div>
        )}
        <div
          className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: tier.color }}
          title={tier.label}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-3">
        <h4 className="mb-1 text-xs font-semibold text-foreground line-clamp-2">
          {skin.name}
        </h4>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{skin.weaponName}</span>
          <span
            className="text-xs font-medium"
            style={{ color: tier.color }}
          >
            {skin.tier}
          </span>
        </div>
      </div>
    </Link>
  );
}
