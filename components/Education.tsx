import { education, certifications } from '@/lib/data';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#fafafa] dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
          {/* Education */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-8 text-center lg:text-left">
              Education
            </h3>
            
            <div className="space-y-6 flex-1">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="group bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-6 border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/30 dark:hover:border-[#e5e5e5]/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-[#1a1a1a] dark:text-[#e5e5e5] font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-base text-[#1a1a1a]/70 dark:text-[#e5e5e5]/70">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-medium text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80">
                        {edu.graduationDate}
                      </span>
                      {edu.gpa && (
                        <p className="text-base text-[#1a1a1a]/70 dark:text-[#e5e5e5]/70 mt-1">
                          {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>

                  {edu.honors && edu.honors.length > 0 && (
                    <div className="mb-4">
                      <p className="text-base font-medium text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 mb-2">
                        Honors & Awards:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, index) => (
                          <span
                            key={index}
                            className="bg-[#1a1a1a]/5 dark:bg-[#e5e5e5]/10 text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 px-3 py-1.5 rounded-md text-sm font-medium border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                    <div>
                      <p className="text-base font-medium text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 mb-2">
                        Relevant Courses:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.slice(0, 5).map((course, index) => (
                          <span
                            key={index}
                            className="bg-[#1a1a1a]/5 dark:bg-[#e5e5e5]/10 text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 px-3 py-1.5 rounded-md text-sm font-medium border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10"
                          >
                            {course}
                          </span>
                        ))}
                        {edu.relevantCourses.length > 5 && (
                          <span className="text-[#1a1a1a]/70 dark:text-[#e5e5e5]/70 text-sm px-3 py-1">
                            +{edu.relevantCourses.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-8 text-center lg:text-left">
              Certifications
            </h3>
            
            <div className="flex flex-col flex-1">
              <div className="space-y-6 flex-1">
                {certifications.map((cert, index) => (
                  <div key={cert.id} className={index === certifications.length - 1 ? "mb-8" : ""}>
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-6 border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/30 dark:hover:border-[#e5e5e5]/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-3">
                              {cert.name}
                            </h4>
                            <p className="text-[#1a1a1a] dark:text-[#e5e5e5] font-medium mb-3">
                              {cert.issuer}
                            </p>
                            <p className="text-base text-[#1a1a1a]/70 dark:text-[#e5e5e5]/70">
                              Issued: {cert.date}
                            </p>
                          </div>
                          
                          <div className="ml-4">
                            <div className="w-16 h-16 bg-[#1a1a1a]/10 dark:bg-[#e5e5e5]/10 rounded-lg flex items-center justify-center text-[#1a1a1a] dark:text-[#e5e5e5] group-hover:bg-[#1a1a1a]/20 dark:group-hover:bg-[#e5e5e5]/20 transition-colors">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-6 border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-3">
                              {cert.name}
                            </h4>
                            <p className="text-[#1a1a1a] dark:text-[#e5e5e5] font-medium mb-3">
                              {cert.issuer}
                            </p>
                            <p className="text-base text-[#1a1a1a]/70 dark:text-[#e5e5e5]/70">
                              Issued: {cert.date}
                            </p>
                          </div>
                          
                          <div className="ml-4">
                            <div className="w-16 h-16 bg-[#1a1a1a]/10 dark:bg-[#e5e5e5]/10 rounded-lg flex items-center justify-center text-[#1a1a1a] dark:text-[#e5e5e5]">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;