"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
            <span className="text-sm font-bold text-primary-foreground">V</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            VALORANT <span className="text-primary">WIKI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Agents
          </Link>
          <Link
            href="/weapons"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Weapons
          </Link>
          <Link
            href="/skins"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Skins
          </Link>
          <Link
            href="/#roles"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Roles
          </Link>
          <Link
            href="/#lore"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Lore
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="/"
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Agents
            </Link>
            <Link
              href="/weapons"
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Weapons
            </Link>
            <Link
              href="/skins"
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Skins
            </Link>
            <Link
              href="/#roles"
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Roles
            </Link>
            <Link
              href="/#lore"
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Lore
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
