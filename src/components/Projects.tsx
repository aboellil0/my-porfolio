import {
  ExternalLink,
  Github,
  Database,
  MessageCircle,
  Calendar,
  Play,
  Package,
  Users,
  Zap,
  Shield,
  BookOpen,
  Search,
} from "lucide-react";
import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Quran Memorization & Islamic Education Platform",
      description:
        "Built a production-ready, full-stack platform with multi-role access, a secure RESTful API (JWT/OAuth), real-time notifications, and Docker containerization.",
      detailedDescription:
        "A comprehensive Islamic education platform designed to facilitate Quran memorization and religious learning. The platform features a robust multi-role system supporting students, teachers, and administrators with tailored dashboards and permissions. Built with scalability in mind, it includes real-time progress tracking, interactive learning modules, and seamless communication tools.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Docker",
        "Swagger",
      ],
      icon: <Database className="h-6 w-6" />,
      features: [
        "Multi-role access control",
        "Real-time notifications",
        "JWT/OAuth authentication",
        "Docker containerization",
      ],
      detailedFeatures: [
        {
          icon: <Users className="h-5 w-5" />,
          title: "Multi-role Access Control",
          description:
            "Comprehensive user management system with different permission levels for students, teachers, and administrators",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Real-time Notifications",
          description:
            "Live updates for progress tracking, assignment submissions, and announcements using Socket.io",
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Secure Authentication",
          description:
            "JWT/OAuth implementation with refresh tokens and session management",
        },
        {
          icon: <Package className="h-5 w-5" />,
          title: "Docker Containerization",
          description:
            "Fully containerized application for easy deployment and scaling across different environments",
        },
      ],
      gradient: "from-green-500 to-emerald-600",
      image: "/images/node1.png",
      contentBgImage: "/images/node1.png",
      modalImages: [
        "/images/quraan1.png",
        "/images/quraan2.png",
        "/images/quraan3.png",
      ],
      projectType: "Full-Stack Web Application",
      duration: "3 months",
      role: "Lead Full-Stack Developer",
      challenges:
        "Implementing secure multi-role authentication, optimizing real-time performance, and ensuring scalability for growing user base.",
      achievements:
        "Successfully deployed to production with 99.9% uptime, serving over 500 active users with real-time synchronization.",
      mascotTheme: "node",
    },
    {
      title: "Course Management System",
      description:
        "A comprehensive web application for managing educational courses, enabling instructors and students to interact seamlessly with full CRUD operations.",
      detailedDescription:
        "A full-featured course management system built with ASP.NET MVC and Identity framework. The platform facilitates the complete learning lifecycle from course creation to student enrollment and progress tracking. Features include secure authentication, role-based access control for instructors and students, and comprehensive course management capabilities.",
      technologies: [
        "ASP.NET MVC",
        "C#",
        "SQL Server",
        "ASP.NET Identity",
        "Entity Framework",
      ],
      icon: <BookOpen className="h-6 w-6" />,
      features: [
        "Multi-role system (Instructors & Students)",
        "Secure authentication with Identity",
        "Complete CRUD operations",
        "Course enrollment management",
      ],
      detailedFeatures: [
        {
          icon: <Users className="h-5 w-5" />,
          title: "Multi-Role System",
          description:
            "Separate interfaces and permissions for instructors and students with tailored dashboards and functionalities",
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "ASP.NET Identity Integration",
          description:
            "Secure user authentication and authorization using Microsoft's Identity framework with role management",
        },
        {
          icon: <BookOpen className="h-5 w-5" />,
          title: "Course Management",
          description:
            "Complete CRUD operations for courses, allowing instructors to create, update, and manage educational content",
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Enrollment System",
          description:
            "Student enrollment management with progress tracking and course completion monitoring",
        },
      ],
      gradient: "from-purple-500 to-violet-600",
      image: "/images/net1.png",
      contentBgImage: "/images/net1.png",
      modalImages: [
        "https://mostaql.hsoubcdn.com/uploads/thumbnails/1304485/68c807ac0cac3/Screenshot-2025-09-15-152739.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c807adc5c2d/Screenshot-2025-09-15-152739.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c807acd95d1/Screenshot-2025-09-15-152845.png",
      ],
      projectType: "Educational Web Platform",
      duration: "2 months",
      role: "Full-Stack Developer",
      challenges:
        "Implementing role-based authorization, managing complex relationships between courses, instructors, and students, and ensuring data integrity across CRUD operations.",
      achievements:
        "Successfully created a scalable course management system with secure authentication, supporting multiple concurrent users and comprehensive course lifecycle management.",
      mascotTheme: "net",
      githubUrl: "https://github.com/aboellil0/TeachingAndLearning",
    },
    {
      title: "Service Booking System",
      description:
        "Engineered a service booking platform with technician profiles, role management, and real-time notifications for status updates using SignalR.",
      detailedDescription:
        "A comprehensive service management platform that streamlines the booking process for technical services. The system features dynamic technician assignment, real-time status tracking, and integrated communication tools. Built with ASP.NET Core MVC and SignalR for seamless real-time updates.",
      technologies: ["ASP.NET Core MVC", "EF Core", "SQL Server", "SignalR"],
      icon: <Calendar className="h-6 w-6" />,
      features: [
        "Technician profiles",
        "Role management",
        "Real-time status updates",
        "SignalR integration",
      ],
      detailedFeatures: [
        {
          icon: <Users className="h-5 w-5" />,
          title: "Technician Profiles",
          description:
            "Detailed technician management with skills, availability, and performance tracking",
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Role Management",
          description:
            "Hierarchical permission system for customers, technicians, and administrators",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Real-time Updates",
          description:
            "Live status updates using SignalR for booking progress and notifications",
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Smart Scheduling",
          description:
            "Intelligent booking system with conflict detection and automatic assignment",
        },
      ],
      gradient: "from-purple-600 to-indigo-600",
      image: "/images/net2.png",
      contentBgImage: "/images/net2.png",
      modalImages: [
        "https://mostaql.hsoubcdn.com/uploads/thumbnails/1304485/68c859ad79590/Screenshot-2025-09-15-205117.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c859ae7fd17/Screenshot-2025-09-15-212209.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c859aed6a8f/Screenshot-2025-09-15-205643.png",
      ],
      projectType: "Enterprise Web Application",
      duration: "4 months",
      role: "Backend Developer",
      challenges:
        "Complex booking algorithms, real-time synchronization across multiple user types, and performance optimization for concurrent users.",
      achievements:
        "Reduced booking processing time by 60% and improved customer satisfaction with real-time status updates.",
      mascotTheme: "net",
      githubUrl: "https://github.com/BasselRaafat/Services-Booking-System",
    },
    {
      title: "Event Booking System",
      description:
        "Developed a full-stack event management system using a Clean Architecture approach with a RESTful API backend and an interactive Blazor UI.",
      detailedDescription:
        "A modern event management platform built with Clean Architecture principles, featuring a decoupled RESTful API and an interactive Blazor frontend. The system supports complex event scheduling, attendee management, and payment processing with a focus on maintainability and scalability.",
      technologies: ["ASP.NET Core API", "Blazor", "Clean Architecture"],
      icon: <Calendar className="h-6 w-6" />,
      features: [
        "Clean Architecture",
        "RESTful API",
        "Interactive Blazor UI",
        "Event management",
      ],
      detailedFeatures: [
        {
          icon: <Package className="h-5 w-5" />,
          title: "Clean Architecture",
          description:
            "Well-structured codebase with clear separation of concerns and dependency inversion",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "RESTful API",
          description:
            "Comprehensive API with proper HTTP methods, status codes, and documentation",
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "Interactive Blazor UI",
          description:
            "Rich client-side experience with server-side rendering and real-time updates",
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Event Management",
          description:
            "Complete event lifecycle management from creation to post-event analytics",
        },
      ],
      gradient: "from-purple-700 to-violet-700",
      image: "/images/net3.png",
      contentBgImage: "/images/net3.png",
      modalImages: [
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c8602c5ac90/Screenshot-2025-09-15-212859.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c8602b8b460/Screenshot-2025-09-15-213947.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c8602c1a20f/screenshot-1757961035117.png",
      ],
      projectType: "Event Management Platform",
      duration: "2 months",
      role: "Full-Stack Developer",
      challenges:
        "Implementing Clean Architecture patterns, complex event scheduling logic, and ensuring smooth Blazor-API integration.",
      achievements:
        "Created a highly maintainable codebase with 95% test coverage and seamless user experience.",
      mascotTheme: "net",
      githubUrl: "https://github.com/aboellil0/EventBookingSystem",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Created a real-time messaging app for group/private chats using SignalR, featuring JWT security, photo messaging, and emoji support.",
      detailedDescription:
        "A feature-rich real-time messaging application supporting both group and private conversations. Built with ASP.NET Core MVC and SignalR, the application includes advanced features like photo sharing, emoji reactions, message encryption, and user presence indicators.",
      technologies: ["ASP.NET Core MVC", "SignalR", "ASP.NET Identity"],
      icon: <MessageCircle className="h-6 w-6" />,
      features: [
        "Group/private chats",
        "JWT security",
        "Photo messaging",
        "Emoji support",
      ],
      detailedFeatures: [
        {
          icon: <MessageCircle className="h-5 w-5" />,
          title: "Group & Private Chats",
          description:
            "Support for both one-on-one conversations and group discussions with unlimited participants",
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "JWT Security",
          description:
            "End-to-end encryption with secure JWT authentication and message protection",
        },
        {
          icon: <Package className="h-5 w-5" />,
          title: "Media Sharing",
          description:
            "Photo and file sharing capabilities with automatic compression and preview generation",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Real-time Features",
          description:
            "Live typing indicators, message delivery status, and emoji reactions",
        },
      ],
      gradient: "from-purple-700 to-pink-600",
      image: "/images/netnode.png",
      contentBgImage: "/images/netnode.png",
      modalImages: [
        "https://mostaql.hsoubcdn.com/uploads/thumbnails/1304485/68c86351ae955/Screenshot-2025-09-15-215529.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c863521283a/Screenshot-2025-09-15-215812.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c863524cd12/Screenshot-2025-09-15-215615.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c863527f5f6/Screenshot-2025-09-15-215546.png",
      ],
      projectType: "Real-time Communication App",
      duration: "2.5 months",
      role: "Full-Stack Developer",
      challenges:
        "Managing real-time connections at scale, implementing message encryption, and optimizing performance for large group chats.",
      achievements:
        "Successfully handles 1000+ concurrent users with sub-100ms message delivery and 99.9% uptime.",
      mascotTheme: "net",
      githubUrl: "https://github.com/aboellil0/SignalR",
    },
    {
      title: "Entertainment Hub",
      description:
        "Developed a responsive media hub using JavaScript and Bootstrap, integrating multiple third-party REST APIs for dynamic content.",
      detailedDescription:
        "A comprehensive entertainment platform that aggregates content from multiple sources including movies, games, and music. Built with vanilla JavaScript and Bootstrap, the application features dynamic content loading, personalized recommendations, and responsive design for optimal user experience across all devices.",
      technologies: ["JavaScript", "jQuery", "Bootstrap"],
      icon: <Play className="h-6 w-6" />,
      features: [
        "Movies, Games & Music",
        "Third-party API integration",
        "Responsive design",
        "Dynamic content",
      ],
      detailedFeatures: [
        {
          icon: <Play className="h-5 w-5" />,
          title: "Multi-Media Content",
          description:
            "Comprehensive entertainment hub featuring movies, games, and music from various sources",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "API Integration",
          description:
            "Seamless integration with multiple third-party APIs for real-time content updates",
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "Responsive Design",
          description:
            "Mobile-first approach ensuring optimal experience across all device sizes",
        },
        {
          icon: <Package className="h-5 w-5" />,
          title: "Dynamic Loading",
          description:
            "Optimized content loading with lazy loading and infinite scroll capabilities",
        },
      ],
      gradient: "from-green-600 to-teal-600",
      image: "/images/node2.png",
      contentBgImage: "/images/node2.png",
      modalImages: [
        "https://mostaql.hsoubcdn.com/uploads/thumbnails/1304485/68c70f8b48773/screenshot-1757875754010.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c70f8bdd4de/screenshot-1757875783379.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c70f8c66a2e/Screenshot-2025-09-14-215315.png",
      ],
      projectType: "Entertainment Web Application",
      duration: "1.5 months",
      role: "Frontend Developer",
      challenges:
        "Managing multiple API integrations, optimizing performance with large datasets, and ensuring cross-browser compatibility.",
      achievements:
        "Integrated 5+ APIs with 99% uptime, achieving 90+ Google PageSpeed score and supporting 10,000+ daily users.",
      mascotTheme: "node",
      githubUrl: "https://github.com/aboellil0/IEEE-Super-App",
    },
    {
      title: "Inventory Management System",
      description:
        "Designed a WinForms desktop app for inventory control, using Entity Framework Core and LINQ for data access and query optimization.",
      detailedDescription:
        "A robust desktop inventory management system designed for small to medium businesses. Built with WinForms and Entity Framework Core, the application provides comprehensive inventory tracking, automated reorder alerts, detailed reporting, and multi-location support with optimized database queries.",
      technologies: ["C#", ".NET", "EF Core", "SQL Server", "WinForms"],
      icon: <Package className="h-6 w-6" />,
      features: [
        "Inventory control",
        "LINQ optimization",
        "Desktop application",
        "Data access layer",
      ],
      detailedFeatures: [
        {
          icon: <Package className="h-5 w-5" />,
          title: "Inventory Control",
          description:
            "Complete inventory lifecycle management with barcode scanning and automated tracking",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "LINQ Optimization",
          description:
            "Highly optimized database queries using LINQ with performance monitoring and caching",
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "Multi-user Support",
          description:
            "Role-based access control with concurrent user management and conflict resolution",
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Data Security",
          description:
            "Encrypted data storage with automated backups and audit trails",
        },
      ],
      gradient: "from-purple-800 to-violet-800",
      image: "/images/net4.png",
      contentBgImage: "/images/net4.png",
      modalImages: [
        "/images/invotory(1).png",
        "/images/invotory(2).png",
        "/images/invotory(3).png",
      ],
      projectType: "Desktop Business Application",
      duration: "3 months",
      role: "Desktop Application Developer",
      challenges:
        "Complex inventory algorithms, database performance optimization, and creating intuitive desktop UI/UX.",
      achievements:
        "Reduced inventory processing time by 75% and eliminated stock discrepancies through automated tracking.",
      mascotTheme: "net",
      githubUrl: "https://github.com/aboellil0/ProductManagement",
    },
    {
      title: "LadyAPI - Secure REST API with JWT",
      description:
        "A practical REST API demonstrating professional JWT authentication with refresh tokens for secure user management and token-based authorization.",
      detailedDescription:
        "A secure REST API built with .NET Core focusing on implementing industry-standard JWT authentication patterns. The project demonstrates best practices for API security including access tokens, refresh tokens, and secure user authentication flows. Features comprehensive CRUD operations to test token validation and authorization mechanisms.",
      technologies: [
        ".NET Core",
        "JWT",
        "ASP.NET Identity",
        "Entity Framework",
      ],
      icon: <Shield className="h-6 w-6" />,
      features: [
        "JWT Authentication",
        "Refresh Tokens",
        "Secure API Endpoints",
        "CRUD Operations",
      ],
      detailedFeatures: [
        {
          icon: <Shield className="h-5 w-5" />,
          title: "JWT Authentication",
          description:
            "Industry-standard token-based authentication with secure token generation and validation",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Refresh Token Flow",
          description:
            "Automatic token refresh mechanism ensuring seamless user experience and enhanced security",
        },
        {
          icon: <Package className="h-5 w-5" />,
          title: "Secure Endpoints",
          description:
            "Protected API routes with role-based authorization and middleware validation",
        },
        {
          icon: <Database className="h-5 w-5" />,
          title: "CRUD Operations",
          description:
            "Complete set of Create, Read, Update, Delete operations for testing authentication flows",
        },
      ],
      gradient: "from-purple-600 to-indigo-700",
      image: "/images/net5.png",
      contentBgImage: "/images/net5.png",
      modalImages: [
        "https://mostaql.hsoubcdn.com/uploads/thumbnails/1304485/68c80bff5669a/Screenshot-2025-09-15-154844.png",
        "https://mostaql.hsoubcdn.com/uploads/thumbnails/1304485/68c80bff5669a/Screenshot-2025-09-15-154844.png",
        "https://mostaql.hsoubcdn.com/uploads/thumbnails/1304485/68c80bff5669a/Screenshot-2025-09-15-154844.png",
      ],
      projectType: "REST API Security Project",
      duration: "1 month",
      role: "Backend Developer",
      challenges:
        "Implementing secure token storage, handling token expiration gracefully, and ensuring proper validation of refresh tokens.",
      achievements:
        "Created a production-ready authentication system following security best practices and OWASP guidelines.",
      mascotTheme: "net",
      githubUrl: "https://github.com/aboellil0/API-App",
    },
    {
      title: "SEO Services Website",
      description:
        "Professional website for SEO and digital marketing services with modern animated design, focusing on showcasing services and features with an organized, user-friendly layout.",
      detailedDescription:
        "A professional website designed for a company offering SEO and digital marketing services. The project features modern design with animations and transitions to create a lively and interactive user experience. The main focus was on highlighting services, features, and website sections in an organized and easy-to-use manner.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "UI/UX Design",
      ],
      icon: <Search className="h-6 w-6" />,
      features: [
        "Modern animations & transitions",
        "Responsive design",
        "Service showcase",
        "Interactive UI",
      ],
      detailedFeatures: [
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Modern Animations",
          description:
            "Smooth CSS animations and transitions that bring the website to life and enhance user engagement",
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "Responsive Design",
          description:
            "Mobile-first responsive design ensuring optimal viewing experience across all devices",
        },
        {
          icon: <Package className="h-5 w-5" />,
          title: "Service Showcase",
          description:
            "Well-organized sections highlighting SEO services, features, and company offerings",
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "UI/UX Excellence",
          description:
            "Professional UI/UX design with intuitive navigation and clear call-to-action elements",
        },
      ],
      gradient: "from-green-500 to-emerald-600",
      image: "/images/node3.png",
      contentBgImage: "/images/node3.png",
      modalImages: [
        "https://mostaql.hsoubcdn.com/uploads/thumbnails/1304485/68c70ae3bbfaa/screenshot-1757873559349.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c70ae4260d6/screenshot-1757873613545.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1304485/68c70ae45a90d/screenshot-1757873686575.png",
      ],
      projectType: "SEO Services Website",
      duration: "1 month",
      role: "Frontend Developer & UI/UX Designer",
      challenges:
        "Creating engaging animations without compromising performance, ensuring consistent design across different sections, and implementing responsive layouts for various screen sizes.",
      achievements:
        "Delivered a modern, professional website with smooth animations, achieving excellent user engagement and conversion rates. The design effectively showcases all services in an organized manner.",
      mascotTheme: "node",
      githubUrl: "https://github.com/aboellil0/SEO",
    },
  ];

  // Create animation hooks for each project card (9 projects)
  const projectCard1Animation = useScrollAnimation<HTMLDivElement>({
    delay: 200,
  });
  const projectCard2Animation = useScrollAnimation<HTMLDivElement>({
    delay: 350,
  });
  const projectCard3Animation = useScrollAnimation<HTMLDivElement>({
    delay: 500,
  });
  const projectCard4Animation = useScrollAnimation<HTMLDivElement>({
    delay: 650,
  });
  const projectCard5Animation = useScrollAnimation<HTMLDivElement>({
    delay: 800,
  });
  const projectCard6Animation = useScrollAnimation<HTMLDivElement>({
    delay: 950,
  });
  const projectCard7Animation = useScrollAnimation<HTMLDivElement>({
    delay: 1100,
  });
  const projectCard8Animation = useScrollAnimation<HTMLDivElement>({
    delay: 1250,
  });
  const projectCard9Animation = useScrollAnimation<HTMLDivElement>({
    delay: 1400,
  });

  const projectCardAnimations = [
    projectCard1Animation,
    projectCard2Animation,
    projectCard3Animation,
    projectCard4Animation,
    projectCard5Animation,
    projectCard6Animation,
    projectCard7Animation,
    projectCard8Animation,
    projectCard9Animation,
  ];

  const openModal = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const currentProject =
    selectedProject !== null ? projects[selectedProject] : null;

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 ${titleAnimation.animationClasses}`}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-4">
            Professional Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={projectCardAnimations[index].ref}
              className={`bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-2xl dark:hover:shadow-primary-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-dark-700 group touch-manipulation ${projectCardAnimations[index].animationClasses}`}
            >
              {/* Content */}
              <div className="relative z-10 p-4 xs:p-6 sm:p-8">
                {/* Content background image with overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${project.contentBgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
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

                  <div className="flex items-start mb-4 sm:mb-6">
                    <div
                      className={`p-2.5 xs:p-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl mr-3 xs:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shrink-0`}
                    >
                      {project.icon}
                    </div>
                    <h3 className="text-lg xs:text-xl font-bold text-dark-800 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300 drop-shadow-md leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-dark-700 dark:text-dark-200 mb-4 sm:mb-6 leading-relaxed text-sm xs:text-base drop-shadow-md font-semibold">
                    {project.description}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs xs:text-sm font-bold text-dark-800 dark:text-dark-200 mb-2 sm:mb-3 drop-shadow-md">
                      Key Features:
                    </h4>
                    <ul className="text-xs xs:text-sm text-dark-700 dark:text-dark-300 space-y-1.5 xs:space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start drop-shadow-md"
                        >
                          <div
                            className={`w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-2 xs:mr-3 shadow-sm shrink-0 mt-1.5 xs:mt-2`}
                          ></div>
                          <span className="font-semibold leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/90 dark:bg-dark-700/90 backdrop-blur-sm text-dark-800 dark:text-dark-100 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full text-xs font-bold border border-primary-200/50 dark:border-dark-500/50 hover:border-primary-400 dark:hover:border-primary-400 transition-all duration-300 shadow-md whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={() => openModal(index)}
                      className={`flex items-center justify-center space-x-2 bg-gradient-to-r ${project.gradient} hover:shadow-xl text-white px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg touch-manipulation min-h-[44px] w-full sm:w-auto`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">View Details</span>
                    </button>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg touch-manipulation min-h-[44px] w-full sm:w-auto"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    ) : (
                      <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-4 xs:px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg touch-manipulation min-h-[44px]">
                        <Github className="h-4 w-4" />
                        <span className="text-sm">Code</span>
                      </button>
                    )}
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
