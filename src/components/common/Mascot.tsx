import React from 'react';

interface MascotProps {
  src: string;
  alt: string;
  side: 'left' | 'right';
  theme: 'node' | 'net';
  delay?: string;
  className?: string;
}

const Mascot: React.FC<MascotProps> = ({
  src,
  alt,
  side,
  theme,
  delay = '1s',
  className = ''
}) => {
  const sideClasses = {
    left: 'animate-fade-in-left -ml-8 md:-ml-12 lg:-ml-16',
    right: 'animate-fade-in-right -mr-8 md:-mr-12 lg:-mr-16'
  };

  const themeColors = {
    node: {
      gradient: 'from-green-400/50 via-emerald-500/40 to-green-600/50',
      glow: 'bg-green-500/30',
      radial: 'from-green-300/60 via-emerald-400/40 to-transparent',
      spin: 'from-green-500/25'
    },
    net: {
      gradient: 'from-purple-400/50 via-violet-500/40 to-purple-600/50',
      glow: 'bg-purple-500/30',
      radial: 'from-purple-300/60 via-violet-400/40 to-transparent',
      spin: 'from-purple-500/25'
    }
  };

  const colors = themeColors[theme];

  return (
    <div className={`relative ${sideClasses[side]} group ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-72 h-72 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem]
          opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 object-contain
          drop-shadow-[0_0_50px_rgba(0,0,0,0.9)_0_0_100px_rgba(34,197,94,0.9)_0_30px_60px_rgba(0,0,0,0.8)]
          group-hover:drop-shadow-[0_0_70px_rgba(34,197,94,1)_0_0_140px_rgba(34,197,94,1)_0_35px_70px_rgba(0,0,0,1)]
          brightness-110 contrast-120 saturate-120 animate-float"
        style={{ animationDelay: delay }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl -z-10 animate-pulse-slow`}></div>
      <div className={`absolute inset-0 ${colors.glow} rounded-full blur-[100px] -z-20 animate-glow`}></div>
      <div className={`absolute inset-0 bg-gradient-radial ${colors.radial} rounded-full blur-2xl -z-30 scale-150`}></div>
      <div className={`absolute -inset-12 bg-gradient-to-${side === 'left' ? 'r' : 'l'} ${colors.spin} to-transparent rounded-full blur-xl animate-spin-slow -z-40`}></div>
    </div>
  );
};

export default Mascot;