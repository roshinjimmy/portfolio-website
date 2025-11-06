import { personalInfo, achievements, skills } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#fafafa] dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] mb-4">
            About Me
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] dark:text-[#e5e5e5]">
              Hello! I'm {personalInfo.name.split(' ')[0]}
            </h3>
            
            <p className="text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 leading-relaxed text-xl">
              I'm a passionate {personalInfo.title.toLowerCase()} based in {personalInfo.location}. 
              I love creating digital experiences that make a difference in people's lives. 
              My journey in tech started with curiosity about how websites work, and it has evolved 
              into a deep passion for building scalable, user-friendly applications.
            </p>
            
            <p className="text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 leading-relaxed text-xl">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge with the developer community. 
              I believe in continuous learning and staying up-to-date with the latest trends 
              in web development.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-[#fafafa] dark:bg-[#1a1a1a] border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/20 dark:hover:border-[#e5e5e5]/20 transition-colors">
                <div className="bg-[#1a1a1a]/10 dark:bg-[#e5e5e5]/10 p-2.5 rounded-lg">
                  <svg className="w-5 h-5 text-[#1a1a1a] dark:text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#1a1a1a]/60 dark:text-[#e5e5e5]/60 mb-1">Location</h4>
                  <p className="text-base text-[#1a1a1a] dark:text-[#e5e5e5] font-medium">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-[#fafafa] dark:bg-[#1a1a1a] border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/20 dark:hover:border-[#e5e5e5]/20 transition-colors">
                <div className="bg-[#1a1a1a]/10 dark:bg-[#e5e5e5]/10 p-2.5 rounded-lg">
                  <svg className="w-5 h-5 text-[#1a1a1a] dark:text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#1a1a1a]/60 dark:text-[#e5e5e5]/60 mb-1">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-base text-[#1a1a1a] dark:text-[#e5e5e5] hover:text-[#1a1a1a]/70 dark:hover:text-[#e5e5e5]/70 hover:underline font-medium transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="flex items-start justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-8 border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/30 dark:hover:border-[#e5e5e5]/30 transition-all duration-300">
              <h4 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-[#1a1a1a]/5 dark:bg-[#e5e5e5]/10 text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 px-3 py-1.5 rounded-md text-sm font-medium border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/20 dark:hover:border-[#e5e5e5]/20 transition-colors"
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