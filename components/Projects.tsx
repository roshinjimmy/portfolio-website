import { projects } from '@/lib/data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#fafafa] dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/30 dark:hover:border-[#e5e5e5]/30 transition-all duration-300"
            >
              {/* Project Image/Icon Section */}
              <div className="h-56 bg-gradient-to-br from-[#1a1a1a]/10 to-[#1a1a1a]/5 dark:from-[#e5e5e5]/10 dark:to-[#e5e5e5]/5 relative overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-[#1a1a1a]/10 dark:bg-[#e5e5e5]/10 flex items-center justify-center group-hover:bg-[#1a1a1a]/20 dark:group-hover:bg-[#e5e5e5]/20 transition-colors">
                        <svg className="w-10 h-10 text-[#1a1a1a]/60 dark:text-[#e5e5e5]/60" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm1 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] mb-3 group-hover:text-[#1a1a1a] dark:group-hover:text-[#e5e5e5] transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-[#1a1a1a]/70 dark:text-[#e5e5e5]/70 mb-5 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#1a1a1a]/5 dark:bg-[#e5e5e5]/10 text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 px-3 py-1.5 rounded-md text-sm font-medium border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#1a1a1a] dark:text-[#e5e5e5] hover:text-[#1a1a1a]/70 dark:hover:text-[#e5e5e5]/70 font-medium text-base transition-colors group/link"
                    >
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#1a1a1a] dark:text-[#e5e5e5] hover:text-[#1a1a1a]/70 dark:hover:text-[#e5e5e5]/70 font-medium text-base transition-colors group/link"
                    >
                      <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;