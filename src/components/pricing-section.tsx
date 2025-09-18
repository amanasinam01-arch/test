import { PricingCards, PricingTier } from "./pricing-cards";
import { ContentData } from "@/lib/content";

interface PricingSectionProps {
  content: ContentData;
}

const pricingTiers: PricingTier[] = [
  {
    name: "👷 Starter",
    price: 295,
    interval: "per month",
    description: "For sole traders & subbies",
    features: [
      { name: "1 request at a time", included: true },
      { name: "Payment claim generator", included: true },
      { name: "2 contract checks/month", included: true },
      { name: "WHS starter kit", included: true },
      { name: "Cancel anytime", included: true },
      { name: "Priority support", included: false },
      { name: "Unlimited contract templates", included: false },
      { name: "Lawyer-reviewed documents", included: false },
      { name: "Full WHS toolkit", included: false },
    ],
    cta: {
      text: "Get Started",
      href: "#",
    },
  },
  {
    name: "🏗️ Professional",
    price: 995,
    interval: "per month",
    description: "For small builders",
    highlight: true,
    features: [
      { name: "2 requests at a time", included: true },
      { name: "Unlimited contract templates", included: true },
      { name: "5 lawyer-reviewed documents/month", included: true },
      { name: "Full WHS toolkit", included: true },
      { name: "Priority support", included: true },
      { name: "Payment claim generator", included: true },
      { name: "Cancel anytime", included: true },
      { name: "Compliance dashboard", included: false },
      { name: "Dedicated lawyer support", included: false },
    ],
    cta: {
      text: "Get Started",
      href: "#",
    },
  },
  {
    name: "🏢 Enterprise",
    price: null,
    priceText: "Custom Pricing",
    interval: "per month",
    description: "For large firms & developers",
    features: [
      { name: "3+ requests at a time", included: true },
      { name: "Unlimited reviews & claims", included: true },
      { name: "Compliance dashboard", included: true },
      { name: "Dedicated lawyer support", included: true },
      { name: "Full WHS toolkit", included: true },
      { name: "Priority support", included: true },
      { name: "Custom integrations", included: true },
      { name: "24/7 emergency support", included: true },
      { name: "White-label options", included: true },
    ],
    cta: {
      text: "Contact Sales",
      href: "#",
    },
  },
];

const PricingSection = ({ content }: PricingSectionProps) => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="text-center flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {content.pricing.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-normal whitespace-pre-line">
            {content.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <PricingCards 
          tiers={pricingTiers}
          sectionClassName="py-0"
          containerClassName="max-w-6xl px-0"
          className="grid-cols-1 lg:grid-cols-3 gap-6"
        />
      </div>
    </section>
  );
};

export default PricingSection;