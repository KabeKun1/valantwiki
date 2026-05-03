"use client";

import { useState } from "react";
import { agents, roles } from "@/lib/agents";
import { AgentCard } from "./agent-card";
import { AgentModal } from "./agent-modal";
import type { Agent } from "@/lib/agents";

export function AgentsGrid() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const filteredAgents = activeRole
    ? agents.filter((agent) => agent.role === activeRole)
    : agents;

  return (
    <section id="agents" className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Meet the <span className="text-primary">Agents</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Each agent brings unique abilities and a compelling backstory to the
            battlefield. Click on any agent to learn more about their origins and
            powers.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveRole(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeRole === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            All Agents
          </button>
          {roles.map((role) => (
            <button
              key={role.name}
              onClick={() => setActiveRole(role.name)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeRole === role.name
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{
                backgroundColor:
                  activeRole === role.name ? `${role.color}30` : "var(--secondary)",
                borderColor: activeRole === role.name ? role.color : "transparent",
                borderWidth: "1px",
              }}
            >
              {role.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onClick={() => setSelectedAgent(agent)}
            />
          ))}
        </div>

        {selectedAgent && (
          <AgentModal
            agent={selectedAgent}
            onClose={() => setSelectedAgent(null)}
          />
        )}
      </div>
    </section>
  );
}
