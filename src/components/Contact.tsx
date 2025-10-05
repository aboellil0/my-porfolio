import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const leftContentAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const formAnimation = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials from dashboard
      const serviceId = 'service_m5fgky3';  // Get from EmailJS dashboard
      const templateId = 'template_5yysedi'; // Get from EmailJS dashboard
      const publicKey = 'gACVvVTsSw0v0IlZG';   // Get from EmailJS dashboard

      // Prepare template parameters
      // This will send FROM: mohamed.aboellil130@gmail.com TO: mohamed.aboellil0@gmail.com
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Mohamed Aboellil',
        to_email: 'mohamed.aboellil0@gmail.com', // Your receiving email
        reply_to: formData.email, // So you can reply directly to the sender
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <div className="text-white font-medium">mohamed.aboellil0@gmail.com</div>
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
                  href="https://www.linkedin.com/in/mohammed-aboellil-628360296/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 dark:hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="https://github.com/aboellil0" 
                  target="_blank" 
                  rel="noopener noreferrer"
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
            
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/30 text-green-100' 
                  : 'bg-red-500/20 border border-red-500/30 text-red-100'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-blue-100 dark:text-dark-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
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
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
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
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/20 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-blue-200 dark:placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-blue-800 dark:text-dark-900 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;