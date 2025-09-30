import { Briefcase, Users, Code, Heart } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const professionalTitleAnimation = useScrollAnimation<HTMLHeadingElement>({ delay: 200 });
  const volunteerTitleAnimation = useScrollAnimation<HTMLHeadingElement>({ delay: 300 });

  const professionalExperience = [
    {
      title: "Web Head",
      company: "IEEE SCU Student Branch",
      period: "2024 – 2025",
      description: "Led a web development team, managed projects for student applications, and conducted backend workshops for over 50 students.",
      icon: <Users className="h-6 w-6" />,
      type: "leadership"
    },
    {
      title: "Freelance Backend Developer",
      company: "Freelance",
      period: "2 years",
      description: "Delivered custom backend solutions for clients using .NET Core, Node.js focusing on CRUD systems, database design, and secure authentication.",
      icon: <Code className="h-6 w-6" />,
      type: "development"
    }
  ];

  const volunteeringExperience = [
    {
      title: "Committee Leader",
      organization: "Suez Canal University",
      period: "Jan 2021 - Present",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Technical Specialist",
      organization: "IEEE",
      period: "Jan 2023 - Present",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Member",
      organization: "ICPC - International Collegiate Programming Contest",
      period: "Jan 2023 - Jan 2024",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Human Resources Specialist",
      organization: "Life Makers Foundation",
      period: "May 2021 - Mar 2023",
      icon: <Heart className="h-6 w-6" />
    }
  ];

  // Create animation hooks for each experience item
  const professionalAnimations = professionalExperience.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ delay: 250 + (index * 150) })
  );

  const volunteerAnimations = volunteeringExperience.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ delay: 350 + (index * 100) })
  );

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800 transition-colors duration-300 relative overflow-hidden">
      {/* Battle arena background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-20 h-20">
          <img src="../images/node4.png" alt="" className="w-full h-full object-contain filter grayscale animate-float" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute bottom-1/4 right-10 w-20 h-20">
          <img src="../images/net3.png" alt="" className="w-full h-full object-contain filter grayscale animate-float" style={{animationDelay: '4s'}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleAnimation.ref} className={`text-center mb-16 ${titleAnimation.animationClasses}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-4">⚔️ Battle Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-dark-300">
            💪 Proven victories in the development battlefield!
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 ref={professionalTitleAnimation.ref} className={`text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center ${professionalTitleAnimation.animationClasses}`}>
            <Briefcase className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {professionalExperience.map((exp, index) => (
              <div 
                key={index}
                ref={professionalAnimations[index].ref}
                className={`bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all duration-300 border border-gray-100 dark:border-dark-700 ${professionalAnimations[index].animationClasses}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${exp.type === 'leadership' ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400' : 'bg-accent-100 dark:bg-accent-900/50 text-accent-600 dark:text-accent-400'}`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-dark-300 mb-3">{exp.company}</p>
                    <p className="text-gray-600 dark:text-dark-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering Experience */}
        <div>
          <h3 ref={volunteerTitleAnimation.ref} className={`text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center ${volunteerTitleAnimation.animationClasses}`}>
            <Heart className="h-6 w-6 text-red-500 mr-3" />
            Volunteering Experience
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {volunteeringExperience.map((exp, index) => (
              <div 
                key={index}
                ref={volunteerAnimations[index].ref}
                className={`bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-dark-700 ${volunteerAnimations[index].animationClasses}`}
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-dark-300 mr-3">
                    {exp.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-dark-300 mb-2">{exp.organization}</p>
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{exp.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;