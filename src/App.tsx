import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LoadingSpinner } from "./components/ui";

function App() {
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
      <ThemeProvider>
        <div className="min-h-screen hero-animated-bg flex items-center justify-center relative overflow-hidden">
          <LoadingSpinner
            size="lg"
            color="white"
            text="Loading Portfolio..."
            progress={loadingProgress}
          />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
