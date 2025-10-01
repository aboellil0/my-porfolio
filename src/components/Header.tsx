import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-xl border-b border-gray-100 dark:border-dark-700' 
          : 'bg-transparent'
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
                    ? 'text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400' 
                    : 'text-white hover:text-accent-300'
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
                  ? 'text-dark-700 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-800' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile Menu and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-dark-700 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-800' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 transition-transform duration-300 ${isScrolled ? 'text-dark-700 dark:text-dark-200' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 transition-transform duration-300 ${isScrolled ? 'text-dark-700 dark:text-dark-200' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 dark:border-dark-700 animate-fade-in-down">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-dark-700 dark:text-dark-200 font-medium hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;