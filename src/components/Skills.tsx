import { Server, Database, Cloud } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-12 flex items-center">
        <span className="text-sky-500 font-normal mr-4 text-2xl">02.</span> Tech Stack
        <div className="hidden md:block h-px bg-sky-200 w-32 ml-6"></div>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="flex items-center gap-3 text-xl font-bold text-slate-800 mb-6 font-heading"><Server className="text-sky-500" size={24} /> Backend</h3>
          <div className="flex flex-wrap gap-2.5">
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">Java</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">Spring Boot</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">Spring Security</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">JPA / MyBatis</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">WebSocket (STOMP)</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">JWT</span>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="flex items-center gap-3 text-xl font-bold text-slate-800 mb-6 font-heading"><Database className="text-sky-500" size={24} /> Database & Cache</h3>
          <div className="flex flex-wrap gap-2.5">
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">MySQL</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">Redis</span>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="flex items-center gap-3 text-xl font-bold text-slate-800 mb-6 font-heading"><Cloud className="text-sky-500" size={24} /> Infrastructure</h3>
          <div className="flex flex-wrap gap-2.5">
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">Docker</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">GitHub Actions</span>
            <span className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 cursor-default">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
