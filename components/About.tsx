import { personalInfo, achievements, skills } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Hello! I'm {personalInfo.name.split(' ')[0]}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              I'm a passionate {personalInfo.title.toLowerCase()} based in {personalInfo.location}. 
              I love creating digital experiences that make a difference in people's lives. 
              My journey in tech started with curiosity about how websites work, and it has evolved 
              into a deep passion for building scalable, user-friendly applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge with the developer community. 
              I believe in continuous learning and staying up-to-date with the latest trends 
              in web development.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="text-gray-900 dark:text-white font-medium">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="flex items-start justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;