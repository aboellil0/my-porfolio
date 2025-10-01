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

      {/* Animated Grid Background with Battle-themed Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px),
            radial-gradient(circle at 25% 50%, rgba(147,51,234,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)
          `,
          backgroundSize: '60px 60px, 60px 60px, 800px 800px, 800px 800px'
        }}></div>
      </div>

      {/* Battle Energy Lines - Visual connection between mascots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-500/50 via-red-500/70 to-blue-500/50 animate-pulse"></div>
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-purple-400/30 via-yellow-400/50 to-blue-400/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Fighting Mascots Container with Enhanced Effects */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-16 lg:px-24 pointer-events-none">
        {/* Node.js Muscular Mascot - Left Side */}
        <div className="relative animate-fade-in-left group">
          <img 
            src="/images/left.png" 
            alt="Node.js Muscular Fighting Mascot" 
            className="w-72 h-72 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 object-contain 
            drop-shadow-[0_0_50px_rgba(0,0,0,0.9)] 
            drop-shadow-[0_0_100px_rgba(34,197,94,0.9)] 
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]
            group-hover:drop-shadow-[0_0_70px_rgba(34,197,94,1)] 
            group-hover:drop-shadow-[0_0_140px_rgba(34,197,94,1)]
            group-hover:drop-shadow-[0_35px_70px_rgba(0,0,0,1)]
            filter brightness-110 contrast-120 saturate-120 animate-float"
            style={{animationDelay: '1s'}}
          />
          {/* Enhanced Multi-layered Glow Effects - Green Theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/50 via-emerald-500/40 to-green-600/50 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-green-500/30 rounded-full blur-[100px] -z-20 animate-glow"></div>
          <div className="absolute inset-0 bg-gradient-radial from-green-300/60 via-emerald-400/40 to-transparent rounded-full blur-2xl -z-30 scale-150"></div>
          
          {/* Muscle Flex Effect */}
          <div className="absolute -inset-12 bg-gradient-to-r from-green-500/25 to-transparent rounded-full blur-xl animate-spin-slow -z-40"></div>
        </div>
        
        {/* .NET Muscular Mascot - Right Side */}
        <div className="relative animate-fade-in-right group">
          <img 
            src="/images/right.png" 
            alt=".NET Muscular Fighting Mascot" 
            className="w-72 h-72 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 object-contain 
            drop-shadow-[0_0_50px_rgba(0,0,0,0.9)] 
            drop-shadow-[0_0_100px_rgba(147,51,234,0.9)] 
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]
            group-hover:drop-shadow-[0_0_70px_rgba(147,51,234,1)] 
            group-hover:drop-shadow-[0_0_140px_rgba(147,51,234,1)]
            group-hover:drop-shadow-[0_35px_70px_rgba(0,0,0,1)]
            filter brightness-110 contrast-120 saturate-120 animate-float"
            style={{animationDelay: '1.5s'}}
          />
          {/* Enhanced Multi-layered Glow Effects - Purple Theme */}
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-400/50 via-violet-500/40 to-purple-600/50 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-[100px] -z-20 animate-glow"></div>
          <div className="absolute inset-0 bg-gradient-radial from-purple-300/60 via-violet-400/40 to-transparent rounded-full blur-2xl -z-30 scale-150"></div>
          
          {/* Weightlifting Aura Effect */}
          <div className="absolute -inset-12 bg-gradient-to-l from-purple-500/25 to-transparent rounded-full blur-xl animate-spin-slow -z-40"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl border border-white/20 animate-scale-in" style={{animationDelay: '0.5s'}}>
            <img 
              src="/images/worry-mouse.gif" 
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