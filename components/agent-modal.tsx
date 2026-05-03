"use client";

import { type Agent } from "@/lib/agents";
import { MapPin, Quote, X, Zap, Shield, Target } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

interface AgentModalProps {
  agent: Agent;
  onClose: () => void;
}

export function AgentModal({ agent, onClose }: AgentModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const getAbilityIcon = (type: string) => {
    switch (type) {
      case "Basic":
        return <Zap className="h-4 w-4" />;
      case "Signature":
        return <Shield className="h-4 w-4" />;
      case "Ultimate":
        return <Target className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 z-10 flex items-center justify-between border-b border-border p-6"
          style={{
            background: `linear-gradient(135deg, ${agent.color}15 0%, var(--card) 100%)`,
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="relative h-20 w-20 overflow-hidden rounded-xl"
              style={{ backgroundColor: `${agent.color}25` }}
            >
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{agent.name}</h2>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: `${agent.color}20`, color: agent.color }}
                >
                  {agent.role}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {agent.origin}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Quote className="h-5 w-5 text-primary" />
              Signature Quote
            </h3>
            <blockquote
              className="rounded-lg p-4 text-lg italic"
              style={{ backgroundColor: `${agent.color}10`, borderLeft: `3px solid ${agent.color}` }}
            >
              &quot;{agent.quote}&quot;
            </blockquote>
          </div>

          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Biography</h3>
            <p className="leading-relaxed text-muted-foreground">{agent.biography}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Abilities</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {agent.abilities.map((ability) => (
                <div
                  key={ability.name}
                  className="rounded-lg border border-border bg-secondary/30 p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-foreground">{ability.name}</span>
                    <span
                      className="flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor:
                          ability.type === "Ultimate"
                            ? `${agent.color}30`
                            : ability.type === "Signature"
                            ? `${agent.color}20`
                            : `${agent.color}10`,
                        color: agent.color,
                      }}
                    >
                      {getAbilityIcon(ability.type)}
                      {ability.type}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {ability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
