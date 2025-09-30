import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300 dark:text-dark-400">Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-gray-300 dark:text-dark-400">and</span>
            <Code className="h-4 w-4 text-blue-400" />
            <span className="text-gray-300 dark:text-dark-400">by Mohamed Aboellil</span>
          </div>
          
          <div className="text-gray-400 dark:text-dark-500 text-sm mb-4">
            Full Stack Developer | IEEE Web Head | Electronics & Communications Engineering Student
          </div>
          
          <div className="border-t border-gray-800 dark:border-dark-800 pt-4">
            <p className="text-gray-500 dark:text-dark-600 text-sm">
              © {new Date().getFullYear()} Mohamed Aboellil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;