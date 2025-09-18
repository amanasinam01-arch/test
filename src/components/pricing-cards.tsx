"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";

export interface PricingFeature {
  name: string;
  highlight?: boolean;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price?: number | null;
  priceText?: string;
  interval?: string;
  description: string;
  features: PricingFeature[];
  highlight?: boolean;
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
}

export interface PricingCardsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tiers: PricingTier[];
  containerClassName?: string;
  cardClassName?: string;
  sectionClassName?: string;
}

export function PricingCards({
  tiers,
  className,
  containerClassName,
  cardClassName,
  sectionClassName,
  ...props
}: PricingCardsProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 px-4",
        "fade-bottom overflow-hidden pb-0",
        sectionClassName
      )}
    >
      <div
        className={cn("w-full max-w-5xl mx-auto px-4", containerClassName)}
        {...props}
      >
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group",
                "rounded-2xl transition-all duration-500",
                tier.highlight
                  ? "bg-gradient-to-br from-primary via-secondary to-tertiary relative"
                  : "bg-primary/5",
                "border border-neutral-800",
                "hover:border-neutral-700",
                "hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]",
                cardClassName
              )}
            >
              {tier.highlight && (
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
              )}
              <div className="p-10 flex flex-col h-full relative z-10">
                <div className="space-y-4">
                  <h3
                    className={cn(
                      "text-lg uppercase tracking-wider font-medium",
                      tier.highlight ? "text-white font-bold" : "text-white"
                    )}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className={cn(
                      "text-5xl font-light",
                      tier.highlight ? "text-white font-bold" : "text-white"
                    )}>
                      {tier.priceText || `$${tier.price}`}
                    </span>
                    <span className={cn(
                      "text-sm",
                      tier.highlight ? "text-white/80" : "text-neutral-400"
                    )}>
                      {tier.interval || "one-time"}
                    </span>
                  </div>
                  <p className={cn(
                    "text-sm pb-6 border-b",
                    tier.highlight 
                      ? "text-white/90 border-white/20" 
                      : "text-neutral-400 border-neutral-800"
                  )}>
                    {tier.description}
                  </p>
                </div>

                <div className="mt-8 space-y-4 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                          feature.included ? "text-white" : "text-neutral-700"
                        )}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={cn(
                        "text-sm",
                        tier.highlight ? "text-white/90" : "text-neutral-300"
                      )}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {tier.cta && (
                  <div className="mt-8">
                    <button
                      className={cn(
                        "w-full h-12 group relative rounded-lg",
                        tier.highlight
                          ? "bg-white hover:bg-neutral-100 text-neutral-900"
                          : "bg-white hover:bg-neutral-100 text-neutral-900",
                        "transition-all duration-300 font-medium tracking-wide"
                      )}
                      onClick={tier.cta.onClick}
                    >
                      {tier.cta.href ? (
                        <a
                          href={tier.cta.href}
                          className="w-full h-full flex items-center justify-center gap-2"
                        >
                          {tier.cta.text}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          {tier.cta.text}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
