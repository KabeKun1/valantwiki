export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-primary">
              EXPLORE THE LORE
            </span>
          </div>

          <h1 className="mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Discover the{" "}
            <span className="text-primary">Stories</span> Behind
            Every Agent
          </h1>

          <p className="mb-10 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            Dive into the rich backstories, origins, and abilities of
            VALORANT&apos;s diverse roster of agents. From former assassins to
            cosmic warriors, each agent has a tale to tell.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#agents"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View All Agents
            </a>
            <a
              href="#lore"
              className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-8 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Read the Lore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
