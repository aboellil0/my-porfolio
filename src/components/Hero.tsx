import { Code, Database, Globe } from "lucide-react";
import { Button } from "./ui";
import { HeroBackground, Mascot } from "./common";
import { Container, Section } from "./layout";

const Hero = () => {
  return (
    <Section
      className="min-h-screen hero-animated-bg flex items-center justify-center relative overflow-hidden pt-20 pb-8"
      background="transparent"
      padding="none"
    >
      <HeroBackground />

      {/* Mascots - Hidden on small screens for better mobile experience */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-between pointer-events-none">
        <Mascot
          src="/images/left.png"
          alt="Node.js Muscular Mascot"
          side="left"
          theme="node"
          delay="1s"
        />

        <Mascot
          src="/images/right.png"
          alt=".NET Muscular Mascot"
          side="right"
          theme="net"
          delay="1.5s"
        />
      </div>

      {/* Mobile-friendly smaller mascots */}
      <div className="absolute inset-0 sm:hidden flex items-end justify-center pointer-events-none pb-20">
        <div className="flex space-x-4 opacity-30">
          <img
            src="/images/left.png"
            alt="Node.js Mascot"
            className="h-16 w-16 object-contain animate-float"
            style={{ animationDelay: "1s" }}
          />
          <img
            src="/images/right.png"
            alt=".NET Mascot"
            className="h-16 w-16 object-contain animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Hero Content - Enhanced Mobile Layout */}
      <Container
        className="text-center relative z-10 px-4 sm:px-6 lg:px-8"
        maxWidth="xl"
      >
        <div className="space-y-6 sm:space-y-8">
          <div
            className="inline-block p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6 shadow-2xl border border-white/20 animate-scale-in"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src="/images/worry-mouse.gif"
              alt="Worried Mouse"
              className="h-12 w-12 sm:h-16 sm:w-16 mx-auto object-contain"
            />
          </div>

          <h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4 sm:mb-6 animate-fade-in-up leading-tight"
            style={{ animationDelay: "0.8s" }}
          >
            Mohamed Aboellil
          </h1>

          <p
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-blue-200 mb-3 sm:mb-4 animate-fade-in-up font-medium"
            style={{ animationDelay: "1.1s" }}
          >
            Full Stack Developer
          </p>

          <p
            className="text-base xs:text-lg sm:text-xl md:text-2xl text-purple-200 mb-6 sm:mb-8 animate-fade-in-up px-4 sm:px-0"
            style={{ animationDelay: "1.4s" }}
          >
            Electronics & Communications Engineering Student
          </p>

          <div
            className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up px-4 sm:px-0"
            style={{ animationDelay: "1.7s" }}
          >
            <Skill label=".NET & Node.js" Icon={Code} color="text-purple-300" />
            <Skill label="Full Stack" Icon={Database} color="text-blue-300" />
            <Skill label="Egypt" Icon={Globe} color="text-purple-400" />
          </div>

          <div
            className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up px-4 sm:px-0"
            style={{ animationDelay: "2s" }}
          >
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              onClick={(e) => {
                e?.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full xs:w-auto touch-manipulation"
            >
              Get In Touch
            </Button>

            <Button
              href="#projects"
              variant="outline"
              size="lg"
              onClick={(e) => {
                e?.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full xs:w-auto touch-manipulation"
            >
              View My Work
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Skill = ({
  label,
  Icon,
  color,
}: {
  label: string;
  Icon: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  color: string;
}) => (
  <div className="flex items-center space-x-1.5 xs:space-x-2 bg-white/10 backdrop-blur-md px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow touch-manipulation">
    <Icon className={`h-4 w-4 xs:h-5 xs:w-5 ${color}`} />
    <span className="text-white text-xs xs:text-sm sm:text-base font-medium whitespace-nowrap">
      {label}
    </span>
  </div>
);

export default Hero;
