import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white py-6 xs:py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-1 xs:gap-2 mb-4 text-sm xs:text-base">
            <span className="text-gray-300 dark:text-dark-400">Built with</span>
            <Heart className="h-4 w-4 text-red-500 flex-shrink-0" />
            <span className="text-gray-300 dark:text-dark-400">and</span>
            <Code className="h-4 w-4 text-blue-400 flex-shrink-0" />
            <span className="text-gray-300 dark:text-dark-400">
              by Mohamed Aboellil
            </span>
          </div>

          <div className="text-gray-400 dark:text-dark-500 text-xs xs:text-sm mb-4 px-2 leading-relaxed">
            <span className="block xs:inline">Full Stack Developer</span>
            <span className="hidden xs:inline"> | </span>
            <span className="block xs:inline">IEEE Web Head</span>
            <span className="hidden xs:inline"> | </span>
            <span className="block xs:inline">
              Electronics & Communications Engineering Student
            </span>
          </div>

          <div className="border-t border-gray-800 dark:border-dark-800 pt-4">
            <p className="text-gray-500 dark:text-dark-600 text-xs xs:text-sm px-2">
              © {new Date().getFullYear()} Mohamed Aboellil. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
