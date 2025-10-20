import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'alternate' | 'gradient' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'default',
  padding = 'lg'
}) => {
  const backgroundClasses = {
    default: 'bg-white dark:bg-dark-900',
    alternate: 'bg-gray-50 dark:bg-dark-800',
    gradient: 'bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900',
    transparent: 'bg-transparent'
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-32'
  };

  return (
    <section 
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;