import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  achievements?: string[];
  color: string;
  bgColor: string;
}

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  isLast: boolean;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isLast,
  delay = 200
}) => {
  const itemAnimation = useScrollAnimation<HTMLDivElement>({ delay });

  return (
    <div
      ref={itemAnimation.ref}
      className={`relative flex items-start mb-12 ${itemAnimation.animationClasses}`}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-600"></div>
      )}

      {/* Icon */}
      <div className={`relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} text-white rounded-full shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300`}>
        {item.icon}
      </div>

      {/* Content */}
      <div className={`flex-1 bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-dark-700 group ${item.bgColor}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold">
              {item.subtitle}
            </p>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-dark-400 bg-gray-100 dark:bg-dark-800 px-3 py-1 rounded-full mt-2 sm:mt-0">
            {item.period}
          </span>
        </div>

        <p className="text-dark-700 dark:text-dark-200 mb-4 leading-relaxed">
          {item.description}
        </p>

        {item.achievements && item.achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-dark-800 dark:text-dark-200 mb-2">
              Key Achievements:
            </h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement, achievementIndex) => (
                <li
                  key={achievementIndex}
                  className="flex items-start text-sm text-dark-700 dark:text-dark-300"
                >
                  <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;