import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  gradient: string;
  delay?: number;
  className?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  title,
  value,
  href,
  gradient,
  delay = 0,
  className = ''
}) => {
  const content = (
    <div className={`group bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-700 ${className}`}>
      <div className="flex items-center">
        <div className={`p-3 bg-gradient-to-r ${gradient} text-white rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-dark-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-dark-600 dark:text-dark-300 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ animationDelay: `${delay}ms` }}
        className="block animate-fade-in-up"
      >
        {content}
      </a>
    );
  }

  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="animate-fade-in-up"
    >
      {content}
    </div>
  );
};

export default ContactItem;