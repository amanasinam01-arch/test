import { Marquee } from "./ui/marquee";
import Image from "next/image";

const logos = [
  "/marquee/logo1.avif",
  "/marquee/logo2.avif",
  "/marquee/logo3.avif",
  "/marquee/logo4.avif",
  "/marquee/logo5.avif",
  "/marquee/logo6.avif",
];

const LogoCard = ({ logoSrc }: { logoSrc: string }) => {
  return (
    <div className="flex items-center justify-center h-16 w-40 mx-4">
      <Image
        src={logoSrc}
        alt="Company logo"
        width={128}
        height={48}
        className="max-h-12 max-w-32 object-contain filter invert"
      />
    </div>
  );
};

export function LogoMarquee() {
  return (
    <div className="relative flex w-full lg:max-w-[1200px] mx-auto flex-col items-center justify-center overflow-hidden">
      <div
        className="flex flex-col w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {logos.map((logo, index) => (
            <LogoCard key={index} logoSrc={logo} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
