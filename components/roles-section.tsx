import { roles, agents } from "@/lib/agents";
import { Users } from "lucide-react";

export function RolesSection() {
  const getAgentCountByRole = (roleName: string) => {
    return agents.filter((agent) => agent.role === roleName).length;
  };

  return (
    <section id="roles" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Agent <span className="text-primary">Roles</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            VALORANT agents are divided into four distinct roles, each with their
            own playstyle and responsibilities on the battlefield.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.name}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-transparent hover:shadow-lg"
              style={{
                ["--role-color" as string]: role.color,
              }}
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${role.color}20` }}
              >
                <Users className="h-6 w-6" style={{ color: role.color }} />
              </div>

              <h3
                className="mb-2 text-xl font-bold"
                style={{ color: role.color }}
              >
                {role.name}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: `${role.color}20`, color: role.color }}
                >
                  {getAgentCountByRole(role.name)} Agents
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
