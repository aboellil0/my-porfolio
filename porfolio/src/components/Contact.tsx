import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const leftContentAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const formAnimation = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`text-center mb-16 ${titleAnimation.animationClasses}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 dark:text-dark-300 max-w-2xl mx-auto">
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={leftContentAnimation.ref} className={leftContentAnimation.animationClasses}>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/20 dark:group-hover:bg-white/30 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-blue-200 dark:text-dark-400 text-sm">Email</div>
                  <div className="text-white font-medium">mohamed.aboellil@email.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/20 dark:group-hover:bg-white/30 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-blue-200 dark:text-dark-400 text-sm">Phone</div>
                  <div className="text-white font-medium">+20 102 584 7029</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/20 dark:group-hover:bg-white/30 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-blue-200 dark:text-dark-400 text-sm">Location</div>
                  <div className="text-white font-medium">Egypt</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 dark:hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 dark:hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formAnimation.ref} className={`bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-white/30 ${formAnimation.animationClasses}`}>
            <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-blue-100 dark:text-dark-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/20 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-blue-200 dark:placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-blue-100 dark:text-dark-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/20 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-blue-200 dark:placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 dark:text-dark-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/20 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-blue-200 dark:placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-100 dark:text-dark-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/20 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-blue-200 dark:placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  placeholder="Project collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 dark:text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/20 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-blue-200 dark:placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-800 dark:text-dark-900 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;