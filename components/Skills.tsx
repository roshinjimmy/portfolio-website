import { skills } from '@/lib/data';

const Skills = () => {
  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));
  
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryIcon = (category: string): string => {
    const icons = {
      'Frontend': '🎨',
      'Backend': '⚙️',
      'Database': '🗄️',
      'Programming': '💻',
      'Machine Learning': '🤖',
      'Cloud': '☁️',
      'Tools': '🔧',
      'Other': '🚀'
    };
    return icons[category as keyof typeof icons] || '🚀';
  };

  const getCategoryBorderColor = (category: string): string => {
    // Using softer borders for better accessibility
    return 'border-[#1a1a1a]/20 dark:border-[#e5e5e5]/20';
  };

  return (
    <section id="skills" className="py-20 bg-[#fafafa] dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 max-w-2xl mx-auto">
            Here's my technical toolkit for building innovative solutions
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div 
              key={category} 
              className={`group bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-6 border ${getCategoryBorderColor(category)} hover:border-[#1a1a1a]/30 dark:hover:border-[#e5e5e5]/30 transition-all duration-300`}
            >
              <div className="text-center mb-5">
                <div className="text-3xl mb-3">{getCategoryIcon(category)}</div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-[#e5e5e5]">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {getSkillsByCategory(category).map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-[#1a1a1a]/5 dark:bg-[#e5e5e5]/10 text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 px-3 py-1.5 rounded-md text-sm font-medium border border-[#1a1a1a]/10 dark:border-[#e5e5e5]/10 hover:border-[#1a1a1a]/20 dark:hover:border-[#e5e5e5]/20 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;