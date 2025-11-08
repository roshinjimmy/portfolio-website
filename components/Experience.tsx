import { experiences } from '@/lib/data';

const Experience = () => {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-20 bg-[#fafafa] dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] mb-4">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#1a1a1a]/30 dark:bg-[#e5e5e5]/30"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-[#1a1a1a] dark:bg-[#e5e5e5] rounded-full border-2 border-[#fafafa] dark:border-[#0f0f0f] z-10 shadow-sm"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-6 border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/30 dark:hover:border-[#e5e5e5]/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5]">
                        {experience.title}
                      </h3>
                      <span className="text-base text-[#1a1a1a]/70 dark:text-[#e5e5e5]/70 font-medium">
                        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                      </span>
                    </div>
                    
                    <div className="mb-5">
                      <p className="text-lg font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-1">
                        {experience.company}
                      </p>
                      <p className="text-base text-[#1a1a1a]/60 dark:text-[#e5e5e5]/60">
                        {experience.location}
                      </p>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 mt-1 mr-3 text-[#1a1a1a]/60 dark:text-[#e5e5e5]/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[#1a1a1a]/70 dark:text-[#e5e5e5]/70 text-base leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#1a1a1a]/5 dark:bg-[#e5e5e5]/10 text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 px-3 py-1.5 rounded-md text-base font-medium border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;