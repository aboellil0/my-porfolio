import { MapPin, Phone, Mail, Linkedin, Github, Code, Database } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const leftContentAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const rightContentAnimation = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`text-center mb-16 ${titleAnimation.animationClasses}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={leftContentAnimation.ref} className={leftContentAnimation.animationClasses}>
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50 dark:from-dark-800 dark:via-dark-800 dark:to-dark-700 rounded-3xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/images/personal-image.jpg" 
                alt="Mohamed Aboellil" 
                className="w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 p-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full">
                <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="absolute bottom-4 left-4 p-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full">
                <Database className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
            </div>
          </div>

          <div ref={rightContentAnimation.ref} className={rightContentAnimation.animationClasses}>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-6">Summary</h3>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8 text-lg">
              Versatile Full Stack Developer and Electronics & Communications Engineering Student with proven experience building robust web applications using the .NET ecosystem and Node.js. As the Web Head for the IEEE SCU Student Branch, I combine hands-on development skills with leadership and project management.
            </p>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8 text-lg">
              Proficient in both backend (C#, Express, SQL Server, MongoDB) and frontend (JavaScript, Blazor, Bootstrap) technologies, with a strong ability to deliver end-to-end solutions. Eager to leverage a unique blend of technical expertise and leadership experience in challenging software development roles.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-dark-800 dark:to-dark-700 rounded-xl hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-full">
                  <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-dark-700 dark:text-dark-200 font-medium">Egypt</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-dark-800 dark:to-dark-700 rounded-xl hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300">
                <div className="p-2 bg-accent-100 dark:bg-accent-900/50 rounded-full">
                  <Phone className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                </div>
                <span className="text-dark-700 dark:text-dark-200 font-medium">+20 102 584 7029</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-dark-800 dark:to-dark-700 rounded-xl hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-full">
                  <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-dark-700 dark:text-dark-200 font-medium">mohamed.aboellil@email.com</span>
              </div>
              <div className="flex items-center space-x-6 pt-6">
                <a href="#" className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gradient-to-r from-dark-700 to-dark-800 text-white rounded-full hover:from-dark-800 hover:to-dark-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;