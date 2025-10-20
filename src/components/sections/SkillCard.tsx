import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
  hoverEffect: string;
  mascotImage: string;
  mascotTheme: string;
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  category,
  index,
  delay = 200
}) => {
  const cardAnimation = useScrollAnimation<HTMLDivElement>({ delay });

  return (
    <div
      ref={cardAnimation.ref}
      className={`bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-2xl dark:hover:shadow-primary-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-dark-700 group relative overflow-hidden ${category.hoverEffect} ${cardAnimation.animationClasses}`}
    >
      {/* Background mascot image */}
      <div className="absolute top-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <img
          src={category.mascotImage}
          alt=""
          className="w-full h-full object-contain animate-float"
          style={{ animationDelay: `${index * 0.5}s` }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div
            className={`p-4 bg-gradient-to-r ${category.color} text-white rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
          >
            {category.icon}
          </div>
          <h3 className="text-xl font-bold text-dark-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
            {category.title}
          </h3>
        </div>

        <div className="space-y-3">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className="flex items-center p-3 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20"
            >
              <div
                className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}
              ></div>
              <span className="text-dark-700 dark:text-dark-200 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;