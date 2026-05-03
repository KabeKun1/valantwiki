import { Sparkles, Globe, Zap, Shield } from "lucide-react";

const loreItems = [
  {
    icon: Sparkles,
    title: "The First Light",
    description:
      "A cataclysmic event that transformed Earth forever, awakening dormant abilities in certain individuals known as Radiants. This mysterious occurrence changed the course of human history and set the stage for the conflicts to come.",
  },
  {
    icon: Globe,
    title: "Kingdom Corporation",
    description:
      "A global energy conglomerate that discovered and began harnessing Radianite, a powerful new element. Their towers now dot skylines worldwide, providing clean energy while harboring darker secrets beneath their gleaming surfaces.",
  },
  {
    icon: Zap,
    title: "Radianite",
    description:
      "A mysterious substance with extraordinary properties that emerged after the First Light. It powers advanced technology and amplifies the abilities of Radiants, making it the most valuable—and dangerous—resource on Earth.",
  },
  {
    icon: Shield,
    title: "VALORANT Protocol",
    description:
      "A covert organization assembling the world&apos;s most elite agents to combat threats from across dimensions. Operating in the shadows, they protect humanity from forces that most people don&apos;t even know exist.",
  },
];

export function LoreSection() {
  return (
    <section id="lore" className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            The <span className="text-primary">VALORANT</span> Universe
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore the rich lore and world-building that shapes the stories of
            every agent in the VALORANT universe.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {loreItems.map((item) => (
            <div
              key={item.title}
              className="group flex gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-foreground">
            A World in Conflict
          </h3>
          <p className="mx-auto max-w-3xl leading-relaxed text-muted-foreground">
            As mirror versions of Earth threaten our reality, the agents of
            VALORANT stand as humanity&apos;s last line of defense. Each battle
            fought, each bomb defused, pushes back against the chaos threatening
            to consume both worlds. The fate of dimensions hangs in the balance,
            and only the combined might of these extraordinary individuals can
            tip the scales toward survival.
          </p>
        </div>
      </div>
    </section>
  );
}
