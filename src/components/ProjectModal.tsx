import React from 'react';
import { X, ExternalLink, Github, Users, Zap, Shield, Package, Calendar, MessageCircle, Database, Play } from 'lucide-react';

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

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-dark-600 animate-scale-in">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-600 p-6 flex items-center justify-between rounded-t-2xl z-10">
          <div className="flex items-center space-x-4">
            <div className={`p-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl shadow-lg`}>
              {project.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-800 dark:text-white">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-dark-300">{project.projectType}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-dark-300" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8">
          {/* Project Images */}
          <div className="grid md:grid-cols-3 gap-4">
            {project.modalImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group">
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-xl">
              <h4 className="font-semibold text-dark-800 dark:text-white mb-2">Duration</h4>
              <p className="text-gray-600 dark:text-dark-300">{project.duration}</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-xl">
              <h4 className="font-semibold text-dark-800 dark:text-white mb-2">Role</h4>
              <p className="text-gray-600 dark:text-dark-300">{project.role}</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-xl">
              <h4 className="font-semibold text-dark-800 dark:text-white mb-2">Type</h4>
              <p className="text-gray-600 dark:text-dark-300">{project.projectType}</p>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-4">Project Overview</h3>
            <p className="text-gray-700 dark:text-dark-200 leading-relaxed text-lg">
              {project.detailedDescription}
            </p>
          </div>

          {/* Detailed Features */}
          <div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-6">Key Features & Implementation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.detailedFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 dark:bg-dark-700 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-800 dark:text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-dark-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Achievements */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Challenges Overcome</h4>
              <p className="text-red-700 dark:text-red-200 leading-relaxed">{project.challenges}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Key Achievements</h4>
              <p className="text-green-700 dark:text-green-200 leading-relaxed">{project.achievements}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-6 border-t border-gray-200 dark:border-dark-600">
            <button className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} hover:shadow-xl text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg flex-1 justify-center`}>
              <ExternalLink className="h-5 w-5" />
              <span>Live Demo</span>
            </button>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg flex-1 justify-center"
              >
                <Github className="h-5 w-5" />
                <span>View Code</span>
              </a>
            ) : (
              <button className="flex items-center space-x-2 bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 hover:shadow-xl text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg flex-1 justify-center">
                <Github className="h-5 w-5" />
                <span>View Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;