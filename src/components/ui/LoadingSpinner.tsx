import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'accent';
  text?: string;
  progress?: number;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
  progress,
  className = ''
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const colors = {
    primary: 'border-primary-500',
    white: 'border-white',
    accent: 'border-accent-500'
  };

  const textColors = {
    primary: 'text-primary-600 dark:text-primary-400',
    white: 'text-white/90',
    accent: 'text-accent-600 dark:text-accent-400'
  };

  return (
    <div className={`text-center ${className}`}>
      <div className={`${sizes[size]} border-4 border-white/20 border-t-${colors[color]} rounded-full animate-spin mx-auto mb-4`}></div>
      {text && (
        <p className={`${textColors[color]} text-xl font-semibold mb-2`}>
          {text}
        </p>
      )}
      {progress !== undefined && (
        <p className={`${textColors[color]} text-sm`}>
          {progress}%
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;