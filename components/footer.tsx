export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <span className="text-sm font-bold text-primary-foreground">V</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              VALORANT <span className="text-primary">AGENTS</span>
            </span>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            This is a fan-made website. VALORANT and all related properties are
            trademarks of Riot Games.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#agents"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Agents
            </a>
            <a
              href="#roles"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Roles
            </a>
            <a
              href="#lore"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Lore
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
