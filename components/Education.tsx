import { education, certifications } from '@/lib/data';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
          {/* Education */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Education
            </h3>
            
            <div className="space-y-6 flex-1">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {edu.graduationDate}
                      </span>
                      {edu.gpa && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>

                  {edu.honors && edu.honors.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Honors & Awards:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, index) => (
                          <span
                            key={index}
                            className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-xs"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Relevant Courses:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.slice(0, 5).map((course, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs"
                          >
                            {course}
                          </span>
                        ))}
                        {edu.relevantCourses.length > 5 && (
                          <span className="text-gray-500 dark:text-gray-400 text-xs px-3 py-1">
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
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
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
                        className="block bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              {cert.name}
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                              {cert.issuer}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Issued: {cert.date}
                            </p>
                          </div>
                          
                          <div className="ml-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              {cert.name}
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                              {cert.issuer}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Issued: {cert.date}
                            </p>
                          </div>
                          
                          <div className="ml-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
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

              {/* Add more certifications prompt */}
              <div className="p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center mt-auto">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Continuously learning and earning new certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;