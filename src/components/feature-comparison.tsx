import { Check, X } from "lucide-react";
import { ContentData } from "@/lib/content";

interface FeatureComparisonProps {
  content: ContentData;
}

const comparisonData = [
  {
    category: "CORE SERVICES",
    features: [
      {
        name: "Payment Claims (SoP)",
        competitors: { housecall: true, serviceTitan: false },
        us: true,
      },
      {
        name: "Contract Reviews",
        competitors: { housecall: true, serviceTitan: true },
        us: true,
      },
      {
        name: "WHS Compliance",
        competitors: { housecall: false, serviceTitan: true },
        us: true,
      },
    ],
  },
  {
    category: "LEGAL SUPPORT",
    features: [
      {
        name: "Employment Law",
        competitors: { housecall: true, serviceTitan: false },
        us: true,
      },
      {
        name: "Dispute Resolution",
        competitors: { housecall: false, serviceTitan: true },
        us: true,
      },
      {
        name: "Insurance Claims",
        competitors: { housecall: true, serviceTitan: true },
        us: true,
      },
      {
        name: "Environmental Approvals",
        competitors: { housecall: false, serviceTitan: false },
        us: true,
      },
    ],
  },
  {
    category: "SETUP AND INTEGRATIONS",
    features: [
      {
        name: "24/7 AI Assistant",
        competitors: { housecall: false, serviceTitan: true },
        us: true,
      },
      {
        name: "Dedicated Lawyer Support",
        competitors: { housecall: false, serviceTitan: false },
        us: true,
      },
    ],
  },
];

export default function FeatureComparison({ content }: FeatureComparisonProps) {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col gap-8 mb-16">
          <div className="flex justify-center">
            <div className="px-6 py-3 border-2 border-white/20 rounded-full">
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                {content.featureComparison.badge}
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            {content.featureComparison.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-normal">
            {content.featureComparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-primary/5 border-2 border-white/20 rounded-3xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-white/5 border-b border-white/20">
            <div className="p-6">
              <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
                Features
              </span>
            </div>
            <div className="p-6 text-center">
              <span className="text-white text-base font-semibold">
                Traditional Law
              </span>
            </div>
            <div className="p-6 text-center">
              <span className="text-white text-base font-semibold">
                Online Services
              </span>
            </div>
            <div className="p-6 text-center bg-gradient-to-r from-primary/20 to-secondary/20 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-tr-3xl"></div>
              <div className="relative flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🚧</span>
                </div>
                <span className="text-white text-base font-bold">
                  Construction Legal
                </span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          {comparisonData.map((category, categoryIndex) => (
            <div key={category.category}>
              {/* Category Header */}
              <div className="bg-white/5 border-b border-white/10">
                <div className="p-4">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                    {category.category}
                  </span>
                </div>
              </div>

              {/* Features */}
              {category.features.map((feature, featureIndex) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-4 border-b border-white/10 hover:bg-white/5 transition-colors ${
                    featureIndex === category.features.length - 1 &&
                    categoryIndex === comparisonData.length - 1
                      ? "border-b-0"
                      : ""
                  }`}
                >
                  <div className="p-6">
                    <span className="text-white text-sm font-medium">
                      {feature.name}
                    </span>
                  </div>

                  {/* Traditional Law */}
                  <div className="p-6 flex justify-center">
                    {feature.competitors.housecall ? (
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                    )}
                  </div>

                  {/* Online Services */}
                  <div className="p-6 flex justify-center">
                    {feature.competitors.serviceTitan ? (
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                    ) : (
                      <span className="text-yellow-400 text-xs font-medium bg-yellow-400/20 px-2 py-1 rounded-full">
                        Limited
                      </span>
                    )}
                  </div>

                  {/* Us */}
                  <div className="p-6 flex justify-center bg-primary/5">
                    <div className="w-6 h-6 bg-primary/30 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.featureComparison.bottomCta.title}
            </h3>
            <p className="text-white/70 mb-6">
              {content.featureComparison.bottomCta.subtitle}
            </p>
            <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 flex items-center gap-2 mx-auto">
              {content.featureComparison.bottomCta.ctaText}
              <Check className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
