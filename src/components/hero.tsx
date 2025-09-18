import { ChevronRight } from "lucide-react";
import React from "react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Countdown from "./countdown";
import { LogoMarquee } from "./logo-marquee";
import { ContentData } from "@/lib/content";

interface HeroProps {
  content: ContentData;
}

const Hero = ({ content }: HeroProps) => {

  return (
    <section className="relative w-full overflow-hidden flex flex-col sm:h-screen sm:pb-10">
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="h-20 sm:h-24 md:h-32 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
{content.branding.companyName}
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center mt-8 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
{content.hero.announcement.split(' ').slice(0, 1)}{" "}
            <hr className="mx-1 sm:mx-2 h-3 sm:h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="whitespace-pre-wrap text-center text-sm sm:text-base font-medium leading-none tracking-tight text-white/90">
              {content.hero.announcement.split(' ').slice(1).join(' ')}
            </AnimatedGradientText>
            <ChevronRight
              className="ml-1 size-3 sm:size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-none">
            {content.hero.title.split('. ').map((part, index) => (
              <span key={index}>
                {part}
                {index < content.hero.title.split('. ').length - 1 && '. '}
                {index === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-white/80 max-w-3xl">
            {content.hero.subtitle}
          </p>
          <Countdown targetDate={new Date(content.hero.launchDate)} />
          <div className="p-3 sm:p-5 w-full mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
            <div className="relative max-w-[550px] w-full">
              <input
                type="email"
                className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full bg-black/30 backdrop-blur-sm placeholder:text-white/60 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200"
                placeholder={content.hero.emailPlaceholder}
              />
              <button className="font-medium cursor-pointer text-white hidden sm:flex items-center gap-1 absolute -right-1 top-0 bg-primary hover:bg-primary/80 h-full px-6 rounded-full transition-all duration-200 text-base">
                <ChevronRight size={18} />
{content.hero.ctaText}
              </button>
            </div>
            <button className="font-medium cursor-pointer text-white flex sm:hidden items-center justify-center gap-2 bg-primary hover:bg-primary/80 px-8 py-3 rounded-full transition-all duration-200 text-base">
              <ChevronRight size={18} />
              {content.hero.ctaText}
            </button>
          </div>
        </div>
        <LogoMarquee />
      </div>
    </section>
  );
};

export default Hero;
