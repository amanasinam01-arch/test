import { Infinity, Clock } from "lucide-react";
import { ContentData } from "@/lib/content";

interface BentoGridProps {
  content: ContentData;
}

export default function BentoGrid({ content }: BentoGridProps) {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative">
      <div className="flex flex-col gap-20">
        {/* Header Section */}
        <div className="text-center flex flex-col gap-8">
          <div className="flex justify-center">
            <div className="px-6 py-3 border-2 border-white/20 rounded-full">
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                {content.bentoGrid.badge}
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent leading-tight whitespace-pre-line">
            {content.bentoGrid.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-normal">
            {content.bentoGrid.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-fit">
          {/* World-class card with design examples - Top left spanning 2 columns */}
          <div className="lg:col-span-2 bg-primary/5 border-2 border-white/20 p-8 rounded-3xl hover:border-white/40 transition-all duration-300 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.bentoGrid.cards[0].title}
            </h3>
            <p className="text-white/70 text-base mb-6 max-w-md">
              {content.bentoGrid.cards[0].description}
            </p>
            <div className="absolute -bottom-4 -right-4 opacity-60">
              <div className="grid grid-cols-2 gap-2 transform rotate-12">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  SOP
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  WHS
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  CLAIMS
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  LEGAL
                </div>
              </div>
            </div>
          </div>

          {/* Request as many designs - Right column */}
          <div className="bg-primary/5 border-2 border-white/20 p-8 rounded-3xl hover:border-white/40 transition-all duration-300 lg:row-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              {content.bentoGrid.cards[1].title}
            </h3>
            <p className="text-white/70 text-base mb-8">
              {content.bentoGrid.cards[1].description}
            </p>
            <div className="flex justify-center">
              <div className="relative">
                <Infinity className="w-20 h-20 text-primary" strokeWidth={3} />
                <div className="absolute inset-0 bg-primary w-20 h-20 rounded-full blur-xl opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Fixed Monthly Fee */}
          <div className="bg-primary/5 border-2 border-white/20 p-6 rounded-3xl hover:border-white/40 transition-all duration-300 text-center">
            <h3 className="text-lg font-bold text-white mb-4">
              {content.bentoGrid.cards[2].title}
            </h3>
            <p className="text-white/70 text-sm mb-6">
              {content.bentoGrid.cards[2].description}
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">$</span>
              </div>
            </div>
          </div>

          {/* Quick Turnarounds */}
          <div className="bg-primary/5 border-2 border-white/20 p-6 rounded-3xl hover:border-white/40 transition-all duration-300 text-center">
            <h3 className="text-lg font-bold text-white mb-4">
              {content.bentoGrid.cards[3].title}
            </h3>
            <p className="text-white/70 text-sm mb-6">
              {content.bentoGrid.cards[3].description}
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>

          {/* Exclusive Ownership */}
          <div className="bg-primary/5 border-2 border-white/20 p-8 rounded-3xl hover:border-white/40 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6">{content.bentoGrid.cards[4].title}</h3>
            <p className="text-white/70 text-base">
              {content.bentoGrid.cards[4].description}
            </p>
          </div>

          {/* Flexible & Scalable - spans 2 columns */}
          <div className="lg:col-span-2 bg-primary/5 border-2 border-white/20 p-8 rounded-3xl hover:border-white/40 transition-all duration-300 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                {content.bentoGrid.cards[5].title}
              </h3>
              <p className="text-white/70 text-base max-w-md">
                {content.bentoGrid.cards[5].description}
              </p>
            </div>
            <div className="hidden md:flex items-end space-x-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-16 bg-primary rounded-full"></div>
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-24 bg-primary rounded-full"></div>
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-12 bg-primary rounded-full"></div>
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-20 bg-primary rounded-full"></div>
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
