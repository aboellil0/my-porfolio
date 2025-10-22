import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-xl border-b border-gray-100 dark:border-dark-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/images/icon.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled
                    ? "text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400"
                    : "text-white hover:text-accent-300"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? "text-dark-700 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-800"
                  : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Mobile Menu and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-all duration-300 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isScrolled
                  ? "text-dark-700 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-800"
                  : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-full transition-all duration-300 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isScrolled
                  ? "hover:bg-gray-100 dark:hover:bg-dark-800"
                  : "hover:bg-white/20"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isScrolled
                      ? "text-dark-700 dark:text-dark-200"
                      : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isScrolled
                      ? "text-dark-700 dark:text-dark-200"
                      : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced with better spacing and animations */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/98 dark:bg-dark-900/98 backdrop-blur-md border-t border-gray-100 dark:border-dark-700 shadow-lg">
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="group block w-full text-left px-6 py-4 font-medium text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation min-h-[48px]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
