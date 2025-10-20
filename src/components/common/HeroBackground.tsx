import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Background Lights */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px),
            radial-gradient(circle at 25% 50%, rgba(147,51,234,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)
          `,
          backgroundSize: "60px 60px, 60px 60px, 800px 800px, 800px 800px",
        }}
      ></div>

      {/* Energy Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-500/50 via-red-500/70 to-blue-500/50 animate-pulse"></div>
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-purple-400/30 via-yellow-400/50 to-blue-400/30 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </>
  );
};

export default HeroBackground;