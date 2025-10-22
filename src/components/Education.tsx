import { GraduationCap, Award } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Education = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ delay: 100 });
  const cardAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const leftCardAnimation = useScrollAnimation<HTMLDivElement>({ delay: 300 });
  const rightCardAnimation = useScrollAnimation<HTMLDivElement>({ delay: 400 });
  const bottomCardAnimation = useScrollAnimation<HTMLDivElement>({
    delay: 500,
  });

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 ${titleAnimation.animationClasses}`}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-800 dark:from-white to-primary-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={cardAnimation.ref}
            className={`bg-gradient-to-r from-primary-50 to-accent-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-4 xs:p-6 sm:p-8 shadow-lg dark:shadow-2xl dark:shadow-primary-500/10 border border-gray-100 dark:border-dark-700 ${cardAnimation.animationClasses}`}
          >
            <div className="flex flex-col xs:flex-row items-start xs:items-center mb-4 sm:mb-6 gap-4">
              <div className="p-3 xs:p-4 bg-primary-100 dark:bg-primary-900/50 rounded-full shrink-0">
                <GraduationCap className="h-6 w-6 xs:h-8 xs:w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                  B.Sc. in Electronics & Communications Engineering
                </h3>
                <p className="text-base xs:text-lg text-gray-600 dark:text-dark-300">
                  Suez Canal University
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div
                ref={leftCardAnimation.ref}
                className={leftCardAnimation.animationClasses}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <Award className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-500 mr-2" />
                  <span className="text-base xs:text-lg font-semibold text-gray-900 dark:text-white">
                    Academic Achievement
                  </span>
                </div>
                <div className="bg-white dark:bg-dark-800 rounded-lg p-3 xs:p-4 border border-gray-100 dark:border-dark-600">
                  <div className="text-2xl xs:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    3.53
                  </div>
                  <div className="text-sm xs:text-base text-gray-600 dark:text-dark-400">
                    GPA (B+)
                  </div>
                </div>
              </div>

              <div
                ref={rightCardAnimation.ref}
                className={rightCardAnimation.animationClasses}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <GraduationCap className="h-4 w-4 xs:h-5 xs:w-5 text-green-500 mr-2" />
                  <span className="text-base xs:text-lg font-semibold text-gray-900 dark:text-white">
                    Expected Graduation
                  </span>
                </div>
                <div className="bg-white dark:bg-dark-800 rounded-lg p-3 xs:p-4 border border-gray-100 dark:border-dark-600">
                  <div className="text-2xl xs:text-3xl font-bold text-accent-600 dark:text-accent-400 mb-1">
                    2026
                  </div>
                  <div className="text-sm xs:text-base text-gray-600 dark:text-dark-400">
                    Final Year
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={bottomCardAnimation.ref}
              className={`mt-6 sm:mt-8 p-3 xs:p-4 bg-white dark:bg-dark-800 rounded-lg border-l-4 border-primary-500 dark:border-primary-400 ${bottomCardAnimation.animationClasses}`}
            >
              <p className="text-sm xs:text-base text-gray-700 dark:text-dark-300 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Field of Study:
                </strong>{" "}
                Electronics & Communications Engineering combines my passion for
                technology with practical engineering principles, providing a
                strong foundation for my software development career. The
                program has enhanced my problem-solving skills and technical
                thinking, which I apply daily in my full-stack development work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
