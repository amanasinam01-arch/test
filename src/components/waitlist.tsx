import { ChevronRight } from "lucide-react";
import { ContentData } from "@/lib/content";

interface WaitlistProps {
  content: ContentData;
}

export default function Waitlist({ content }: WaitlistProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-secondary to-tertiary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-8 left-8">
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-white">
              <path
                d="M10 40 Q 30 10, 50 40 T 90 40"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="absolute bottom-8 right-8">
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-white">
              <path
                d="M10 40 Q 30 70, 50 40 T 90 40"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          {/* Bell icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Bell shape */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center transform rotate-12">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              {/* Dots around bell */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-tertiary rounded-full"></div>
              <div className="absolute top-2 -right-3 w-2 h-2 bg-secondary rounded-full"></div>
              <div className="absolute -top-2 right-2 w-2 h-2 bg-primary rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-tertiary rounded-full"></div>
              <div className="absolute bottom-2 -left-3 w-3 h-3 bg-secondary rounded-full"></div>
            </div>
          </div>

          {/* Launch badge */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-3 border-2 border-white/30 rounded-full">
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                {content.waitlist.badge}
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {content.waitlist.title}
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            {content.waitlist.subtitle}
          </p>

          {/* Email signup form */}
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <input
                type="email"
                className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full bg-black/30 backdrop-blur-sm placeholder:text-white/60 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200"
                placeholder={content.waitlist.emailPlaceholder}
              />
              <button className="font-medium cursor-pointer text-white flex items-center gap-1 absolute -right-1 top-0 bg-primary hover:bg-primary/80 h-full px-6 rounded-full transition-all duration-200 text-base">
                <ChevronRight size={18} />
{content.waitlist.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}