import { Code, Database, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { LoadingSpinner, Button } from "./ui";
import { HeroBackground, Mascot } from "./common";
import { Container, Section } from "./layout";

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const imagePaths = [
      "/images/left.png",
      "/images/right.png",
      "/images/net1.png",
      "/images/net2.png",
      "/images/net3.png",
      "/images/net4.png",
      "/images/net5.png",
      "/images/node1.png",
      "/images/node2.png",
      "/images/node3.png",
      "/images/node4.png",
      "/images/node5.png",
      "/images/worry-mouse.gif",
    ];

    let loadedCount = 0;
    const totalImages = imagePaths.length;

    const loadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = img.onerror = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.src = src;
      });

    Promise.all(imagePaths.map(loadImage))
      .then(() => setTimeout(() => setImagesLoaded(true), 500))
      .catch(() => setImagesLoaded(true));
  }, []);

  if (!imagesLoaded) {
    return (
      <Section 
        className="min-h-screen hero-animated-bg flex items-center justify-center relative overflow-hidden"
        background="transparent"
        padding="none"
      >
        <HeroBackground />
        <LoadingSpinner 
          size="lg" 
          color="white" 
          text="Loading..." 
          progress={loadingProgress}
        />
      </Section>
    );
  }

  return (
    <Section 
      className="min-h-screen hero-animated-bg flex items-center justify-center relative overflow-hidden"
      background="transparent"
      padding="none"
    >
      <HeroBackground />

      {/* Mascots */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
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

      {/* Hero Content */}
      <Container className="text-center relative z-10 space-y-8" maxWidth="xl">
        <div
          className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl border border-white/20 animate-scale-in"
          style={{ animationDelay: "0.5s" }}
        >
          <img
            src="/images/worry-mouse.gif"
            alt="Worried Mouse"
            className="h-16 w-16 mx-auto object-contain"
          />
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          Mohamed Aboellil
        </h1>

        <p
          className="text-xl md:text-2xl text-blue-200 mb-4 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          Full Stack Developer
        </p>

        <p
          className="text-lg md:text-xl text-purple-200 mb-8 animate-fade-in-up"
          style={{ animationDelay: "1.4s" }}
        >
          Electronics & Communications Engineering Student
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "1.7s" }}
        >
          <Skill label=".NET & Node.js" Icon={Code} color="text-purple-300" />
          <Skill label="Full Stack" Icon={Database} color="text-blue-300" />
          <Skill label="Egypt" Icon={Globe} color="text-purple-400" />
        </div>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
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
          >
            View My Work
          </Button>
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
  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
    <Icon className={`h-5 w-5 ${color}`} />
    <span className="text-white">{label}</span>
  </div>
);

export default Hero;
