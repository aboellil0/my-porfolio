import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradient?: string;
  delay?: number;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  gradient = 'from-dark-800 dark:from-white to-primary-600',
  delay = 100,
  className = ''
}) => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay });

  return (
    <div
      ref={titleAnimation.ref}
      className={`text-center mb-16 ${titleAnimation.animationClasses} ${className}`}
    >
      <h2 className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-dark-300 max-w-2xl mx-auto mt-6">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;