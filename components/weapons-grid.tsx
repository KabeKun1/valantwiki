"use client";

import { useState } from "react";
import { weapons, categories } from "@/lib/weapons";
import { WeaponCard } from "./weapon-card";

export function WeaponsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredWeapons = selectedCategory === "all" 
    ? weapons 
    : weapons.filter((w) => w.category === selectedCategory);

  return (
    <section id="weapons" className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            ARSENAL
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse the complete collection of weapons in VALORANT. Click on any weapon to explore its available skins.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {category.name}
              <span className="ml-1.5 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredWeapons.map((weapon) => (
            <WeaponCard key={weapon.id} weapon={weapon} />
          ))}
        </div>
      </div>
    </section>
  );
}
