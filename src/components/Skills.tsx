import { Server, Database, Cloud, Layout } from 'lucide-react';

const SkillBadge = ({ name }: { name: string }) => (
  <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">
    {name}
  </span>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <Server className="text-sky-500" size={24} />,
      items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / MyBatis', 'WebSocket (STOMP)', 'JWT']
    },
    {
      title: 'Frontend',
      icon: <Layout className="text-sky-500" size={24} />,
      items: ['React', 'Vue', 'TypeScript', 'Tailwind CSS', 'HTML5']
    },
    {
      title: 'Database & Cache',
      icon: <Database className="text-sky-500" size={24} />,
      items: ['MySQL', 'Redis']
    },
    {
      title: 'Infrastructure',
      icon: <Cloud className="text-sky-500" size={24} />,
      items: ['Docker', 'GitHub Actions', 'Git']
    }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-12 flex items-center">
        <span className="text-sky-500 font-normal mr-4 text-2xl">02.</span> Tech Stack
        <div className="hidden md:block h-px bg-sky-200 w-32 ml-6"></div>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-800 mb-6 font-heading">
              {category.icon} {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <SkillBadge key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
