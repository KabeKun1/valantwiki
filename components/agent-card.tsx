"use client";

import { type Agent } from "@/lib/agents";
import { MapPin, Quote } from "lucide-react";
import Image from "next/image";

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card text-left transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${agent.color}10 0%, transparent 50%)`,
        }}
      />

      <div className="relative h-48 w-full overflow-hidden" style={{ backgroundColor: `${agent.color}15` }}>
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-contain object-center p-4 transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span
          className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: `${agent.color}90`, color: "#fff" }}
        >
          {agent.role}
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5">
        <h3 className="mb-1 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {agent.name}
        </h3>

        <div className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>{agent.origin}</span>
        </div>

        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {agent.biography}
        </p>

        <div className="flex items-start gap-2 rounded-md bg-secondary/50 p-3">
          <Quote className="h-4 w-4 shrink-0 text-primary" />
          <p className="text-sm italic text-foreground line-clamp-1">&quot;{agent.quote}&quot;</p>
        </div>
      </div>
    </button>
  );
}
