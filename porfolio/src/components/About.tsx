import { MapPin, Phone, Mail, Linkedin, Github, Code, Database } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const leftContentAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const rightContentAnimation = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
      {/* Battle arena background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24">
          <img src="../images/node2.png" alt="" className="w-full h-full object-contain filter grayscale animate-float" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24">
          <img src="../images/net4.png" alt="" className="w-full h-full object-contain filter grayscale animate-float" style={{animationDelay: '3s'}} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleAnimation.ref} className={`text-center mb-16 ${titleAnimation.animationClasses}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={leftContentAnimation.ref} className={leftContentAnimation.animationClasses}>
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50 dark:from-dark-800 dark:via-dark-800 dark:to-dark-700 rounded-3xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Battle-themed decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <img src="../images/node3.png" alt="" className="w-full h-full object-contain animate-float" />
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <img src="../images/net5.png" alt="" className="w-full h-full object-contain animate-float" style={{animationDelay: '1s'}} />
              </div>
              <div className="absolute bottom-4 left-4 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <img src="../images/node5.png" alt="" className="w-full h-full object-contain animate-float" style={{animationDelay: '2s'}} />
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <img src="../images/net2.png" alt="" className="w-full h-full object-contain animate-float" style={{animationDelay: '0.5s'}} />
              </div>
              
              <img 
                src="/images/personal-image.jpg" 
                alt="Mohamed Aboellil - Full Stack Developer" 
                className="w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating tech icons with enhanced effects */}
              <div className="absolute top-4 right-4 p-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="absolute bottom-4 left-4 p-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                <Database className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              
              {/* Power level overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl flex items-end justify-center pb-4">
                <div className="text-white font-bold text-lg animate-pulse">
                  🥇 Full Stack Champion
                </div>
              </div>
            </div>
          </div>

          <div ref={rightContentAnimation.ref} className={rightContentAnimation.animationClasses}>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-6">
              💪 Developer Summary
            </h3>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6 text-lg">
              <strong>⚔️ Battle-Tested Full Stack Warrior:</strong> Versatile developer and Electronics & Communications Engineering Student with proven experience building robust web applications using the .NET ecosystem and Node.js. As the Web Head for the IEEE SCU Student Branch, I combine hands-on development skills with leadership and project management.
            </p>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8 text-lg">
              <strong>🏋️ Technical Strength:</strong> Proficient in both backend (C#, Express, SQL Server, MongoDB) and frontend (JavaScript, Blazor, Bootstrap) technologies, with a strong ability to deliver end-to-end solutions. Eager to leverage a unique blend of technical expertise and leadership experience in challenging software development roles.
            </p>

            {/* Enhanced contact info with battle theme */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-dark-800 dark:to-dark-700 rounded-xl hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300 border border-green-100 dark:border-dark-600">
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-full">
                  <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <span className="text-dark-700 dark:text-dark-200 font-medium">🏛️ Battle Arena: </span>
                  <span className="text-green-600 dark:text-green-400 font-bold">Egypt</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-dark-800 dark:to-dark-700 rounded-xl hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300 border border-purple-100 dark:border-dark-600">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-full">
                  <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <span className="text-dark-700 dark:text-dark-200 font-medium">📞 Battle Hotline: </span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">+20 102 584 7029</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-dark-800 dark:to-dark-700 rounded-xl hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300 border border-blue-100 dark:border-dark-600">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-dark-700 dark:text-dark-200 font-medium">✉️ Battle Command: </span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">mohamed.aboellil@email.com</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 pt-6">
                <a href="#" className="p-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group">
                  <Linkedin className="h-6 w-6 group-hover:animate-bounce" />
                </a>
                <a href="#" className="p-4 bg-gradient-to-r from-dark-700 to-dark-800 text-white rounded-full hover:from-dark-800 hover:to-dark-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group">
                  <Github className="h-6 w-6 group-hover:animate-bounce" />
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