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
    const colors = {
      'Frontend': 'border-blue-200 dark:border-blue-800',
      'Backend': 'border-green-200 dark:border-green-800',
      'Database': 'border-purple-200 dark:border-purple-800',
      'Programming': 'border-orange-200 dark:border-orange-800',
      'Machine Learning': 'border-pink-200 dark:border-pink-800',
      'Cloud': 'border-indigo-200 dark:border-indigo-800',
      'Tools': 'border-gray-200 dark:border-gray-800',
      'Other': 'border-yellow-200 dark:border-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'border-gray-200 dark:border-gray-800';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's my technical toolkit for building innovative solutions
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div 
              key={category} 
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 border-2 ${getCategoryBorderColor(category)} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{getCategoryIcon(category)}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {getSkillsByCategory(category).map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
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