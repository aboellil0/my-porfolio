import { Code, Database, Globe, Server, Shield, Settings } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const conceptsAnimation = useScrollAnimation<HTMLDivElement>({ delay: 400 });

  const skillCategories = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Technologies",
      skills: ["C#", ".NET Core (MVC, Web API)", "Node.js", "Express.js", "LINQ", "Entity Framework Core"],
      color: "from-primary-500 to-primary-600",
      hoverEffect: "hover:animate-jello"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Frontend Technologies", 
      skills: ["JavaScript", "Blazor", "HTML", "CSS", "jQuery", "Bootstrap", "TailwindCSS"],
      color: "from-accent-500 to-accent-600",
      hoverEffect: "hover:animate-rubber-band"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Databases",
      skills: ["Microsoft SQL Server", "MongoDB", "MySQL", "Redis (Basics)"],
      color: "from-primary-600 to-accent-500",
      hoverEffect: "hover:animate-swing"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "APIs & Real-Time",
      skills: ["RESTful APIs", "SignalR", "Socket.io", "gRPC (Learning)"],
      color: "from-accent-600 to-primary-500",
      hoverEffect: "hover:animate-tada"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Authentication",
      skills: ["JWT", "OAuth 2.0", "Refresh Tokens", "ASP.NET Core Identity"],
      color: "from-primary-700 to-accent-600",
      hoverEffect: "hover:animate-heartbeat"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Postman", "Swagger (OpenAPI)", "Firebase"],
      color: "from-accent-700 to-primary-600",
      hoverEffect: "hover:animate-wobble"
    }
  ];

  const concepts = [
    "Object-Oriented Programming (OOP)",
    "LINQ", 
    "ORM (Entity Framework Core)",
    "Agile",
    "Clean Architecture",
    "Microservices (Basics)",
    "Event-Driven Architecture"
  ];

  // Create animation hooks for each skill card
  const skillCardAnimations = skillCategories.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ delay: 200 + (index * 100) })
  );

  return (
    <section id="skills" className="py-20 skills-animated-bg transition-colors duration-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-400 rounded-full animate-float floating-orb"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-400 rounded-full animate-float floating-orb"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary-500 rounded-full animate-float floating-orb"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleAnimation.ref} className={`text-center mb-16 ${titleAnimation.animationClasses}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-4 animate-text-shimmer bg-shimmer bg-200%">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto animate-gradient-x bg-200%"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              ref={skillCardAnimations[index].ref}
              className={`bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-2xl dark:hover:shadow-primary-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-700 group cursor-pointer ${category.hoverEffect} ${skillCardAnimations[index].animationClasses}`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-xl mr-4 group-hover:scale-110 transition-all duration-300 animate-glow`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-dark-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-dark-700 dark:to-dark-600 text-dark-700 dark:text-dark-200 px-4 py-2 rounded-full text-sm font-semibold border border-primary-100 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:animate-pulse cursor-pointer"
                    style={{animationDelay: `${skillIndex * 100}ms`}}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={conceptsAnimation.ref} className={`bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-10 rounded-2xl shadow-2xl dark:shadow-2xl dark:shadow-primary-500/10 border border-gray-100 dark:border-dark-700 relative overflow-hidden ${conceptsAnimation.animationClasses}`}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-animated-gradient-light dark:bg-animated-gradient-dark opacity-30"></div>
          
          <h3 className="text-3xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-8 text-center relative z-10">Core Concepts & Methodologies</h3>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {concepts.map((concept, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:animate-shimmer bg-shimmer cursor-pointer animate-fade-in-up"
                style={{animationDelay: `${index * 150}ms`}}
              >
                {concept}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;