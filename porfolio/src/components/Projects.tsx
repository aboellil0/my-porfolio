import { ExternalLink, Github, Database, MessageCircle, Calendar, Play, Package, Users, Zap, Shield } from 'lucide-react';
import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Quran Memorization & Islamic Education Platform",
      description: "Built a production-ready, full-stack platform with multi-role access, a secure RESTful API (JWT/OAuth), real-time notifications, and Docker containerization.",
      detailedDescription: "A comprehensive Islamic education platform designed to facilitate Quran memorization and religious learning. The platform features a robust multi-role system supporting students, teachers, and administrators with tailored dashboards and permissions. Built with scalability in mind, it includes real-time progress tracking, interactive learning modules, and seamless communication tools.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Docker", "Swagger"],
      icon: <Database className="h-6 w-6" />,
      features: ["Multi-role access control", "Real-time notifications", "JWT/OAuth authentication", "Docker containerization"],
      detailedFeatures: [
        { icon: <Users className="h-5 w-5" />, title: "Multi-role Access Control", description: "Comprehensive user management system with different permission levels for students, teachers, and administrators" },
        { icon: <Zap className="h-5 w-5" />, title: "Real-time Notifications", description: "Live updates for progress tracking, assignment submissions, and announcements using Socket.io" },
        { icon: <Shield className="h-5 w-5" />, title: "Secure Authentication", description: "JWT/OAuth implementation with refresh tokens and session management" },
        { icon: <Package className="h-5 w-5" />, title: "Docker Containerization", description: "Fully containerized application for easy deployment and scaling across different environments" }
      ],
      gradient: "from-primary-500 to-accent-500",
      image: "/images/node1.png",
      contentBgImage: "../images/node2.png",
      modalImages: ["/images/node1.png", "/images/node2.png", "/images/node3.png"],
      projectType: "Full-Stack Web Application",
      duration: "3 months",
      role: "Lead Full-Stack Developer",
      challenges: "Implementing secure multi-role authentication, optimizing real-time performance, and ensuring scalability for growing user base.",
      achievements: "Successfully deployed to production with 99.9% uptime, serving over 500 active users with real-time synchronization."
    },
    {
      title: "Service Booking System",
      description: "Engineered a service booking platform with technician profiles, role management, and real-time notifications for status updates using SignalR.",
      detailedDescription: "A comprehensive service management platform that streamlines the booking process for technical services. The system features dynamic technician assignment, real-time status tracking, and integrated communication tools. Built with ASP.NET Core MVC and SignalR for seamless real-time updates.",
      technologies: ["ASP.NET Core MVC", "EF Core", "SQL Server", "SignalR"],
      icon: <Calendar className="h-6 w-6" />,
      features: ["Technician profiles", "Role management", "Real-time status updates", "SignalR integration"],
      detailedFeatures: [
        { icon: <Users className="h-5 w-5" />, title: "Technician Profiles", description: "Detailed technician management with skills, availability, and performance tracking" },
        { icon: <Shield className="h-5 w-5" />, title: "Role Management", description: "Hierarchical permission system for customers, technicians, and administrators" },
        { icon: <Zap className="h-5 w-5" />, title: "Real-time Updates", description: "Live status updates using SignalR for booking progress and notifications" },
        { icon: <Calendar className="h-5 w-5" />, title: "Smart Scheduling", description: "Intelligent booking system with conflict detection and automatic assignment" }
      ],
      gradient: "from-accent-500 to-primary-600",
      image: "/images/net1.png",
      contentBgImage: "../images/net5.png",
      modalImages: ["/images/net1.png", "/images/net2.png", "/images/net5.png"],
      projectType: "Enterprise Web Application",
      duration: "4 months",
      role: "Backend Developer",
      challenges: "Complex booking algorithms, real-time synchronization across multiple user types, and performance optimization for concurrent users.",
      achievements: "Reduced booking processing time by 60% and improved customer satisfaction with real-time status updates."
    },
    {
      title: "Event Booking System",
      description: "Developed a full-stack event management system using a Clean Architecture approach with a RESTful API backend and an interactive Blazor UI.",
      detailedDescription: "A modern event management platform built with Clean Architecture principles, featuring a decoupled RESTful API and an interactive Blazor frontend. The system supports complex event scheduling, attendee management, and payment processing with a focus on maintainability and scalability.",
      technologies: ["ASP.NET Core API", "Blazor", "Clean Architecture"],
      icon: <Calendar className="h-6 w-6" />,
      features: ["Clean Architecture", "RESTful API", "Interactive Blazor UI", "Event management"],
      detailedFeatures: [
        { icon: <Package className="h-5 w-5" />, title: "Clean Architecture", description: "Well-structured codebase with clear separation of concerns and dependency inversion" },
        { icon: <Zap className="h-5 w-5" />, title: "RESTful API", description: "Comprehensive API with proper HTTP methods, status codes, and documentation" },
        { icon: <Users className="h-5 w-5" />, title: "Interactive Blazor UI", description: "Rich client-side experience with server-side rendering and real-time updates" },
        { icon: <Calendar className="h-5 w-5" />, title: "Event Management", description: "Complete event lifecycle management from creation to post-event analytics" }
      ],
      gradient: "from-primary-600 to-accent-500",
      image: "/images/net3.png",
      contentBgImage: "../images/net4.png",
      modalImages: ["/images/net3.png", "/images/net4.png", "/images/net2.png"],
      projectType: "Event Management Platform",
      duration: "2 months",
      role: "Full-Stack Developer",
      challenges: "Implementing Clean Architecture patterns, complex event scheduling logic, and ensuring smooth Blazor-API integration.",
      achievements: "Created a highly maintainable codebase with 95% test coverage and seamless user experience."
    },
    {
      title: "Real-Time Chat Application",
      description: "Created a real-time messaging app for group/private chats using SignalR, featuring JWT security, photo messaging, and emoji support.",
      detailedDescription: "A feature-rich real-time messaging application supporting both group and private conversations. Built with ASP.NET Core MVC and SignalR, the application includes advanced features like photo sharing, emoji reactions, message encryption, and user presence indicators.",
      technologies: ["ASP.NET Core MVC", "SignalR", "ASP.NET Identity"],
      icon: <MessageCircle className="h-6 w-6" />,
      features: ["Group/private chats", "JWT security", "Photo messaging", "Emoji support"],
      detailedFeatures: [
        { icon: <MessageCircle className="h-5 w-5" />, title: "Group & Private Chats", description: "Support for both one-on-one conversations and group discussions with unlimited participants" },
        { icon: <Shield className="h-5 w-5" />, title: "JWT Security", description: "End-to-end encryption with secure JWT authentication and message protection" },
        { icon: <Package className="h-5 w-5" />, title: "Media Sharing", description: "Photo and file sharing capabilities with automatic compression and preview generation" },
        { icon: <Zap className="h-5 w-5" />, title: "Real-time Features", description: "Live typing indicators, message delivery status, and emoji reactions" }
      ],
      gradient: "from-accent-600 to-primary-500",
      image: "/images/net5.png",
      contentBgImage: "../images/node3.png",
      modalImages: ["/images/net5.png", "/images/node3.png", "/images/node4.png"],
      projectType: "Real-time Communication App",
      duration: "2.5 months",
      role: "Full-Stack Developer",
      challenges: "Managing real-time connections at scale, implementing message encryption, and optimizing performance for large group chats.",
      achievements: "Successfully handles 1000+ concurrent users with sub-100ms message delivery and 99.9% uptime."
    },
    {
      title: "Entertainment Hub",
      description: "Developed a responsive media hub using JavaScript and Bootstrap, integrating multiple third-party REST APIs for dynamic content.",
      detailedDescription: "A comprehensive entertainment platform that aggregates content from multiple sources including movies, games, and music. Built with vanilla JavaScript and Bootstrap, the application features dynamic content loading, personalized recommendations, and responsive design for optimal user experience across all devices.",
      technologies: ["JavaScript", "jQuery", "Bootstrap"],
      icon: <Play className="h-6 w-6" />,
      features: ["Movies, Games & Music", "Third-party API integration", "Responsive design", "Dynamic content"],
      detailedFeatures: [
        { icon: <Play className="h-5 w-5" />, title: "Multi-Media Content", description: "Comprehensive entertainment hub featuring movies, games, and music from various sources" },
        { icon: <Zap className="h-5 w-5" />, title: "API Integration", description: "Seamless integration with multiple third-party APIs for real-time content updates" },
        { icon: <Users className="h-5 w-5" />, title: "Responsive Design", description: "Mobile-first approach ensuring optimal experience across all device sizes" },
        { icon: <Package className="h-5 w-5" />, title: "Dynamic Loading", description: "Optimized content loading with lazy loading and infinite scroll capabilities" }
      ],
      gradient: "from-primary-700 to-accent-600",
      image: "/images/node4.png",
      contentBgImage: "../images/node5.png",
      modalImages: ["/images/node4.png", "/images/node5.png", "/images/node1.png"],
      projectType: "Entertainment Web Application",
      duration: "1.5 months",
      role: "Frontend Developer",
      challenges: "Managing multiple API integrations, optimizing performance with large datasets, and ensuring cross-browser compatibility.",
      achievements: "Integrated 5+ APIs with 99% uptime, achieving 90+ Google PageSpeed score and supporting 10,000+ daily users."
    },
    {
      title: "Inventory Management System",
      description: "Designed a WinForms desktop app for inventory control, using Entity Framework Core and LINQ for data access and query optimization.",
      detailedDescription: "A robust desktop inventory management system designed for small to medium businesses. Built with WinForms and Entity Framework Core, the application provides comprehensive inventory tracking, automated reorder alerts, detailed reporting, and multi-location support with optimized database queries.",
      technologies: ["C#", ".NET", "EF Core", "SQL Server", "WinForms"],
      icon: <Package className="h-6 w-6" />,
      features: ["Inventory control", "LINQ optimization", "Desktop application", "Data access layer"],
      detailedFeatures: [
        { icon: <Package className="h-5 w-5" />, title: "Inventory Control", description: "Complete inventory lifecycle management with barcode scanning and automated tracking" },
        { icon: <Zap className="h-5 w-5" />, title: "LINQ Optimization", description: "Highly optimized database queries using LINQ with performance monitoring and caching" },
        { icon: <Users className="h-5 w-5" />, title: "Multi-user Support", description: "Role-based access control with concurrent user management and conflict resolution" },
        { icon: <Shield className="h-5 w-5" />, title: "Data Security", description: "Encrypted data storage with automated backups and audit trails" }
      ],
      gradient: "from-accent-700 to-primary-600",
      image: "/images/left-one.png",
      contentBgImage: "../images/net3.png",
      modalImages: ["/images/left-one.png", "/images/net3.png", "/images/right-one.png"],
      projectType: "Desktop Business Application",
      duration: "3 months",
      role: "Desktop Application Developer",
      challenges: "Complex inventory algorithms, database performance optimization, and creating intuitive desktop UI/UX.",
      achievements: "Reduced inventory processing time by 75% and eliminated stock discrepancies through automated tracking."
    }
  ];

  // Create animation hooks for each project card
  const projectCardAnimations = projects.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ delay: 200 + (index * 150) })
  );

  const openModal = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const currentProject = selectedProject !== null ? projects[selectedProject] : null;

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
                    <button 
                      onClick={() => openModal(index)}
                      className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} hover:shadow-xl text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">View Details</span>
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

      {/* Project Modal */}
      <ProjectModal
        project={currentProject}
        isOpen={selectedProject !== null}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;