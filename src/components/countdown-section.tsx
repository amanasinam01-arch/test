import Countdown from "./countdown";
import { ContentData } from "@/lib/content";

interface CountdownSectionProps {
  content: ContentData;
}

export default function CountdownSection({ content }: CountdownSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Closing Message */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {content.countdownSection.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            {content.countdownSection.subtitle}
          </p>
        </div>

        {/* Countdown */}
        <Countdown targetDate={new Date(content.countdownSection.targetDate)} />
      </div>
    </section>
  );
}
