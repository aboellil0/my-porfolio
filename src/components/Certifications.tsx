import { Award, Calendar, Building, User } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Certifications = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const languagesAnimation = useScrollAnimation<HTMLDivElement>({ delay: 600 });

  const certifications = [
    {
      title: "Software Development - .NET Developer",
      issuer: "Digital Egypt Pioneers Initiative - DEPI",
      date: "Apr 2024",
      icon: <Award className="h-6 w-6" />,
      category: "development"
    },
    {
      title: "Business English Track",
      issuer: "SYE English Community",
      date: "Apr 2024",
      icon: <User className="h-6 w-6" />,
      category: "language"
    },
    {
      title: "Event Organizer",
      issuer: "Suez Canal University",
      date: "Jan 2024",
      icon: <Building className="h-6 w-6" />,
      category: "management"
    },
    {
      title: ".NET Web Development",
      issuer: "Information Technology Institute (ITI)",
      date: "Aug 2023",
      icon: <Award className="h-6 w-6" />,
      category: "development"
    },
    {
      title: "Robotics Electronics and PCP Design",
      issuer: "E.camp",
      date: "Jul 2023",
      icon: <Building className="h-6 w-6" />,
      category: "engineering"
    },
    {
      title: "Web Development",
      issuer: "IEEE",
      date: "Jan 2023",
      icon: <Award className="h-6 w-6" />,
      category: "development"
    },
    {
      title: "Front-End Web Developer Nanodegree",
      issuer: "Udacity",
      date: "",
      icon: <Award className="h-6 w-6" />,
      category: "development"
    }
  ];

  // Create animation hooks for each certification card
  const certificationAnimations = certifications.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ delay: 200 + (index * 100) })
  );

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'development':
        return 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border-primary-200 dark:border-primary-700';
      case 'language':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700';
      case 'management':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-700';
      case 'engineering':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-700';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'development':
        return 'bg-primary-500 text-white';
      case 'language':
        return 'bg-green-500 text-white';
      case 'management':
        return 'bg-purple-500 text-white';
      case 'engineering':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`text-center mb-16 ${titleAnimation.animationClasses}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-4">Licenses & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-dark-300 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              ref={certificationAnimations[index].ref}
              className={`bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg dark:shadow-2xl dark:shadow-primary-500/10 hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-700 ${certificationAnimations[index].animationClasses}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-full ${getCategoryIcon(cert.category)}`}>
                  {cert.icon}
                </div>
                {cert.date && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-dark-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-gray-600 dark:text-dark-300 mb-4 flex items-center">
                <Building className="h-4 w-4 mr-2 text-gray-400 dark:text-dark-400" />
                {cert.issuer}
              </p>

              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(cert.category)}`}>
                {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
              </div>
            </div>
          ))}
        </div>

        <div ref={languagesAnimation.ref} className={`mt-12 text-center ${languagesAnimation.animationClasses}`}>
          <div className="bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg dark:shadow-2xl dark:shadow-primary-500/10 max-w-2xl mx-auto border border-gray-100 dark:border-dark-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Languages</h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">Arabic</div>
                <div className="text-gray-600 dark:text-dark-400">Native</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400 mb-1">English</div>
                <div className="text-gray-600 dark:text-dark-400">Intermediate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;