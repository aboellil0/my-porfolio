import React from 'react';
import { ExternalLink, Github, LucideIcon } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  icon: React.ReactNode;
  features: string[];
  detailedFeatures: DetailedFeature[];
  gradient: string;
  image: string;
  contentBgImage: string;
  modalImages: string[];
  projectType: string;
  duration: string;
  role: string;
  challenges: string;
  achievements: string;
  mascotTheme?: string;
  githubUrl?: string;
}

export interface DetailedFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (index: number) => void;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onViewDetails,
  delay = 200
}) => {
  const cardAnimation = useScrollAnimation<HTMLDivElement>({ delay });

  return (
    <div
      ref={cardAnimation.ref}
      className={`bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-2xl dark:hover:shadow-primary-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-dark-700 group ${cardAnimation.animationClasses}`}
    >
      {/* Content */}
      <div className="relative z-10 p-8">
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
          {/* Freelance badge for first project */}
          {index === 0 && (
            <div className="absolute -top-4 -right-4 z-20">
              <span className="bg-white/20 dark:bg-white/10 backdrop-blur-lg text-dark-800 dark:text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl border border-white/40 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 hover:border-white/60 dark:hover:border-white/30 transition-all duration-300">
                Freelance
              </span>
            </div>
          )}

          <div className="flex items-center mb-6">
            <div
              className={`p-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
            >
              {project.icon}
            </div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300 drop-shadow-md">
              {project.title}
            </h3>
          </div>

          <p className="text-dark-700 dark:text-dark-200 mb-6 leading-relaxed text-base drop-shadow-md font-semibold">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-bold text-dark-800 dark:text-dark-200 mb-3 drop-shadow-md">
              Key Features:
            </h4>
            <ul className="text-sm text-dark-700 dark:text-dark-300 space-y-2">
              {project.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center drop-shadow-md"
                >
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3 shadow-sm`}
                  ></div>
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
              onClick={() => onViewDetails(index)}
              className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} hover:shadow-xl text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg`}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">View Details</span>
            </button>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">Code</span>
              </a>
            ) : (
              <button className="flex items-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">
                <Github className="h-4 w-4" />
                <span className="text-sm">Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;