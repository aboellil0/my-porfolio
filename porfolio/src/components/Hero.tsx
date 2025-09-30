import { Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen hero-animated-bg flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float floating-orb"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float floating-orb"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float floating-orb"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Fighting Mascots Container */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-16 lg:px-24 pointer-events-none">
        {/* Node.js Mascot - Left Side */}
        <div className="relative animate-fade-in-left">
          <img 
            src="../images/left-one.png" 
            alt="Node.js Fighting Mascot" 
            className="w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 object-contain 
            drop-shadow-[0_0_35px_rgba(0,0,0,0.8)] 
            drop-shadow-[0_0_60px_rgba(147,51,234,0.7)] 
            drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
            hover:drop-shadow-[0_0_50px_rgba(147,51,234,1)] 
            hover:drop-shadow-[0_0_80px_rgba(147,51,234,0.8)]
            hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]
            filter brightness-110 contrast-110 animate-float"
            style={{animationDelay: '1s'}}
          />
          {/* Multiple layered glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[60px] -z-20 animate-glow"></div>
          <div className="absolute inset-0 bg-gradient-radial from-purple-400/40 to-transparent rounded-full blur-2xl -z-30 scale-150"></div>
        </div>
        
        {/* .NET Mascot - Right Side */}
        <div className="relative animate-fade-in-right">
          <img 
            src="../images/right-one.png" 
            alt=".NET Fighting Mascot" 
            className="w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 object-contain 
            drop-shadow-[0_0_35px_rgba(0,0,0,0.8)] 
            drop-shadow-[0_0_60px_rgba(59,130,246,0.7)] 
            drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
            hover:drop-shadow-[0_0_50px_rgba(59,130,246,1)] 
            hover:drop-shadow-[0_0_80px_rgba(59,130,246,0.8)]
            hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]
            filter brightness-110 contrast-110 animate-float"
            style={{animationDelay: '1.5s'}}
          />
          {/* Multiple layered glow effects */}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-purple-600/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px] -z-20 animate-glow"></div>
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/40 to-transparent rounded-full blur-2xl -z-30 scale-150"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl border border-white/20 animate-scale-in" style={{animationDelay: '0.5s'}}>
            <img 
              src="../images/worry-mouse.gif" 
              alt="Worried Mouse" 
              className="h-16 w-16 mx-auto object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 animate-fade-in-up" 
              style={{animationDelay: '0.8s'}}>
            Mohamed Aboellil
          </h1>
          
          <div className="text-xl md:text-2xl text-blue-200 mb-4 animate-fade-in-up" style={{animationDelay: '1.1s'}}>
            Full Stack Developer
          </div>
          
          <div className="text-lg md:text-xl text-purple-200 mb-8 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
            Electronics & Communications Engineering Student
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '1.7s'}}>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
              <Code className="h-5 w-5 text-purple-300" />
              <span className="text-white">.NET & Node.js</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
              <Database className="h-5 w-5 text-blue-300" />
              <span className="text-white">Full Stack</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
              <Globe className="h-5 w-5 text-purple-400" />
              <span className="text-white">Egypt</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '2s'}}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg hover:shadow-glow-accent"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;