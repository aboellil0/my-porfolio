import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  hover?: boolean;
  animation?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  gradient,
  hover = true,
  animation = ''
}) => {
  const baseClasses = 'bg-white dark:bg-dark-900 rounded-xl shadow-lg dark:shadow-2xl dark:shadow-primary-500/10 border border-gray-100 dark:border-dark-700 transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl dark:hover:shadow-primary-500/20 transform hover:-translate-y-2' : '';
  const gradientClasses = gradient ? `bg-gradient-to-r ${gradient}` : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${animation} ${className}`}>
      {children}
    </div>
  );
};

export default Card;