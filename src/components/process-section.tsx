import { Marquee } from "./ui/marquee";
import { CreditCard, Zap, Clock } from "lucide-react";
import { ContentData } from "@/lib/content";

interface ProcessSectionProps {
  content: ContentData;
}

const ProcessSection = ({ content }: ProcessSectionProps) => {

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* Hassle-free Process */}
        <div className="text-center flex flex-col gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {content.process.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-normal">
            {content.process.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.process.steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative group">
                <div className="h-64 lg:w-72 lg:h-72 mx-auto bg-primary/5 border-2 border-white/20 rounded-3xl flex flex-col p-5 lg:p-7 hover:border-white/40 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out">
                  <div className="flex-1 flex items-center justify-center">
                    {index === 0 && <CreditCard className="w-12 h-12 lg:w-14 lg:h-14 text-primary" />}
                    {index === 1 && <Zap className="w-12 h-12 lg:w-14 lg:h-14 text-secondary" />}
                    {index === 2 && <Clock className="w-12 h-12 lg:w-14 lg:h-14 text-tertiary" />}
                  </div>
                  <div className="text-center w-full">
                    <h3 className="text-base lg:text-lg font-bold text-white uppercase tracking-wider">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2 whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Your Design Needs */}
        <div className="bg-primary/5 border-2 border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-300 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="flex-shrink-0 lg:w-1/3 flex flex-col gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight whitespace-pre-line">
                {content.process.bottomSection.title}
              </h2>
              <p className="text-sm sm:text-base text-white/70">
                {content.process.bottomSection.subtitle}
              </p>
            </div>

            {/* Right side - Services Marquee */}
            <div className="flex-1 overflow-hidden">
              <div className="space-y-4">
                <div
                  className="w-full overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  }}
                >
                  <Marquee className="[--duration:25s]">
                    {content.process.legalServices.slice(0, 5).map((service, index) => (
                      <div
                        key={index}
                        className="mx-2 px-4 py-2 font-bold border border-white/20 rounded-full whitespace-nowrap bg-primary/20"
                        style={{
                          color: getServiceColor(service),
                        }}
                      >
                        {service}
                      </div>
                    ))}
                  </Marquee>
                </div>
                <div
                  className="w-full overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  }}
                >
                  <Marquee reverse className="[--duration:25s]">
                    {content.process.legalServices.slice(5).map((service, index) => (
                      <div
                        key={index}
                        className="mx-2 px-4 py-2 font-bold border border-white/20 rounded-full whitespace-nowrap bg-primary/20"
                        style={{
                          color: getServiceColor(service),
                        }}
                      >
                        {service}
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to assign colors to different services
function getServiceColor(service: string) {
  const colors = [
    "#3B82F6", // bright blue
    "#A855F7", // bright purple
    "#22C55E", // bright green
    "#EF4444", // bright red
    "#F59E0B", // bright yellow
    "#EC4899", // bright pink
    "#06B6D4", // bright cyan
    "#8B5CF6", // bright violet
    "#F97316", // bright orange
  ];

  const hash = service.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  return colors[Math.abs(hash) % colors.length];
}

export default ProcessSection;
