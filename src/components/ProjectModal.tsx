import React from "react";
import { X, ExternalLink, Github } from "lucide-react";

interface DetailedFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Project {
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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 bg-black/80 backdrop-blur-sm animate-fade-in touch-manipulation"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-dark-800 rounded-xl xs:rounded-2xl max-w-4xl w-full max-h-[95vh] xs:max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-dark-600 animate-scale-in">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-600 p-4 xs:p-6 flex items-center justify-between rounded-t-xl xs:rounded-t-2xl z-10">
          <div className="flex items-center space-x-2 xs:space-x-4 flex-1 min-w-0">
            <div
              className={`p-2 xs:p-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg xs:rounded-xl shadow-lg flex-shrink-0`}
            >
              {project.icon}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-dark-800 dark:text-white truncate">
                {project.title}
              </h2>
              <p className="text-xs xs:text-sm text-gray-600 dark:text-dark-300 truncate">
                {project.projectType}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-full transition-colors duration-200 flex-shrink-0 ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 xs:h-6 xs:w-6 text-gray-600 dark:text-dark-300" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 xs:p-6 space-y-6 xs:space-y-8">
          {/* Project Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4">
            {project.modalImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg xs:rounded-xl group touch-manipulation"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-40 xs:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            <div className="bg-gray-50 dark:bg-dark-700 p-3 xs:p-4 rounded-lg xs:rounded-xl">
              <h4 className="font-semibold text-dark-800 dark:text-white mb-2 text-sm xs:text-base">
                Duration
              </h4>
              <p className="text-gray-600 dark:text-dark-300 text-sm xs:text-base break-words">
                {project.duration}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-700 p-3 xs:p-4 rounded-lg xs:rounded-xl">
              <h4 className="font-semibold text-dark-800 dark:text-white mb-2 text-sm xs:text-base">
                Role
              </h4>
              <p className="text-gray-600 dark:text-dark-300 text-sm xs:text-base break-words">
                {project.role}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-700 p-3 xs:p-4 rounded-lg xs:rounded-xl sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-dark-800 dark:text-white mb-2 text-sm xs:text-base">
                Type
              </h4>
              <p className="text-gray-600 dark:text-dark-300 text-sm xs:text-base break-words">
                {project.projectType}
              </p>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-lg xs:text-xl font-bold text-dark-800 dark:text-white mb-3 xs:mb-4">
              Project Overview
            </h3>
            <p className="text-gray-700 dark:text-dark-200 leading-relaxed text-sm xs:text-base lg:text-lg">
              {project.detailedDescription}
            </p>
          </div>

          {/* Detailed Features */}
          <div>
            <h3 className="text-lg xs:text-xl font-bold text-dark-800 dark:text-white mb-4 xs:mb-6">
              Key Features & Implementation
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6">
              {project.detailedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-dark-700 p-4 xs:p-6 rounded-lg xs:rounded-xl hover:shadow-md transition-shadow duration-300 touch-manipulation"
                >
                  <div className="flex items-start space-x-3 xs:space-x-4">
                    <div
                      className={`p-2 xs:p-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg flex-shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-dark-800 dark:text-white mb-2 text-sm xs:text-base break-words">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-dark-300 leading-relaxed text-sm xs:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg xs:text-xl font-bold text-dark-800 dark:text-white mb-3 xs:mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2 xs:gap-3">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`bg-gradient-to-r ${project.gradient} text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 touch-manipulation`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 xs:p-6 rounded-lg xs:rounded-xl border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3 text-sm xs:text-base">
                Challenges Overcome
              </h4>
              <p className="text-red-700 dark:text-red-200 leading-relaxed text-sm xs:text-base">
                {project.challenges}
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 xs:p-6 rounded-lg xs:rounded-xl border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-sm xs:text-base">
                Key Achievements
              </h4>
              <p className="text-green-700 dark:text-green-200 leading-relaxed text-sm xs:text-base">
                {project.achievements}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 pt-4 xs:pt-6 border-t border-gray-200 dark:border-dark-600">
            <button
              className={`flex items-center justify-center space-x-2 bg-gradient-to-r ${project.gradient} hover:shadow-xl text-white px-6 xs:px-8 py-3 rounded-lg xs:rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg flex-1 min-h-[44px] touch-manipulation`}
            >
              <ExternalLink className="h-4 w-4 xs:h-5 xs:w-5" />
              <span className="text-sm xs:text-base">Live Demo</span>
            </button>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-6 xs:px-8 py-3 rounded-lg xs:rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg flex-1 min-h-[44px] touch-manipulation"
              >
                <Github className="h-4 w-4 xs:h-5 xs:w-5" />
                <span className="text-sm xs:text-base">View Code</span>
              </a>
            ) : (
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-6 xs:px-8 py-3 rounded-lg xs:rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg flex-1 min-h-[44px] touch-manipulation">
                <Github className="h-4 w-4 xs:h-5 xs:w-5" />
                <span className="text-sm xs:text-base">View Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
