import { ExternalLink, Github, Database, MessageCircle, Calendar, Play, Package } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });

  const projects = [
    {
      title: "Quran Memorization & Islamic Education Platform",
      description: "Built a production-ready, full-stack platform with multi-role access, a secure RESTful API (JWT/OAuth), real-time notifications, and Docker containerization.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Docker", "Swagger"],
      icon: <Database className="h-6 w-6" />,
      features: ["Multi-role access control", "Real-time notifications", "JWT/OAuth authentication", "Docker containerization"],
      gradient: "from-primary-500 to-accent-500",
      image: "/images/node 1.png",
      contentBgImage: "../images/node2.png"
    },
    {
      title: "Service Booking System",
      description: "Engineered a service booking platform with technician profiles, role management, and real-time notifications for status updates using SignalR.",
      technologies: ["ASP.NET Core MVC", "EF Core", "SQL Server", "SignalR"],
      icon: <Calendar className="h-6 w-6" />,
      features: ["Technician profiles", "Role management", "Real-time status updates", "SignalR integration"],
      gradient: "from-accent-500 to-primary-600",
      image: "/images/net 1.png",
      contentBgImage: "../images/net5.png"
    },
    {
      title: "Event Booking System",
      description: "Developed a full-stack event management system using a Clean Architecture approach with a RESTful API backend and an interactive Blazor UI.",
      technologies: ["ASP.NET Core API", "Blazor", "Clean Architecture"],
      icon: <Calendar className="h-6 w-6" />,
      features: ["Clean Architecture", "RESTful API", "Interactive Blazor UI", "Event management"],
      gradient: "from-primary-600 to-accent-500",
      image: "/images/net 3.png",
      contentBgImage: "../images/net4.png"
    },
    {
      title: "Real-Time Chat Application",
      description: "Created a real-time messaging app for group/private chats using SignalR, featuring JWT security, photo messaging, and emoji support.",
      technologies: ["ASP.NET Core MVC", "SignalR", "ASP.NET Identity"],
      icon: <MessageCircle className="h-6 w-6" />,
      features: ["Group/private chats", "JWT security", "Photo messaging", "Emoji support"],
      gradient: "from-accent-600 to-primary-500",
      image: "/images/net 5.png",
      contentBgImage: "../images/node3.png"
    },
    {
      title: "Entertainment Hub",
      description: "Developed a responsive media hub using JavaScript and Bootstrap, integrating multiple third-party REST APIs for dynamic content.",
      technologies: ["JavaScript", "jQuery", "Bootstrap"],
      icon: <Play className="h-6 w-6" />,
      features: ["Movies, Games & Music", "Third-party API integration", "Responsive design", "Dynamic content"],
      gradient: "from-primary-700 to-accent-600",
      image: "/images/node 4.png",
      contentBgImage: "../images/node5.png"
    },
    {
      title: "Inventory Management System",
      description: "Designed a WinForms desktop app for inventory control, using Entity Framework Core and LINQ for data access and query optimization.",
      technologies: ["C#", ".NET", "EF Core", "SQL Server", "WinForms"],
      icon: <Package className="h-6 w-6" />,
      features: ["Inventory control", "LINQ optimization", "Desktop application", "Data access layer"],
      gradient: "from-accent-700 to-primary-600",
      image: "/images/left-one.png",
      contentBgImage: "../images/net3.png"
    }
  ];

  // Create animation hooks for each project card
  const projectCardAnimations = projects.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ delay: 200 + (index * 150) })
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`text-center mb-16 ${titleAnimation.animationClasses}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-4">Professional Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={projectCardAnimations[index].ref}
              className={`bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-2xl dark:hover:shadow-primary-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-dark-700 group ${projectCardAnimations[index].animationClasses}`}
            >
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Content background image with overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${project.contentBgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                
                {/* Semi-transparent overlay for better text readability */}
                <div className="absolute inset-0 bg-white/50 dark:bg-dark-800/50 backdrop-blur-[0.5px] rounded-2xl group-hover:bg-white/40 dark:group-hover:bg-dark-800/40 transition-all duration-500" />
                
                {/* Content with higher z-index */}
                <div className="relative z-10">
                  {/* Freelance badge for Quran project */}
                  {index === 0 && (
                    <div className="absolute -top-4 -right-4 z-20">
                      <span className="bg-white/20 dark:bg-white/10 backdrop-blur-lg text-dark-800 dark:text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl border border-white/40 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 hover:border-white/60 dark:hover:border-white/30 transition-all duration-300">
                        Freelance
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark-800 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300 drop-shadow-md">{project.title}</h3>
                  </div>
                  
                  <p className="text-dark-700 dark:text-dark-200 mb-6 leading-relaxed text-base drop-shadow-md font-semibold">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-dark-800 dark:text-dark-200 mb-3 drop-shadow-md">Key Features:</h4>
                    <ul className="text-sm text-dark-700 dark:text-dark-300 space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center drop-shadow-md">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3 shadow-sm`}></div>
                          <span className="font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-white/90 dark:bg-dark-700/90 backdrop-blur-sm text-dark-800 dark:text-dark-100 px-4 py-2 rounded-full text-xs font-bold border border-primary-200/50 dark:border-dark-500/50 hover:border-primary-400 dark:hover:border-primary-400 transition-all duration-300 shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} hover:shadow-xl text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg`}>
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Live Demo</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;