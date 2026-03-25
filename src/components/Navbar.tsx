import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setNavActive(!navActive);
  const closeNav = () => setNavActive(false);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-heading text-sky-600 tracking-tighter" onClick={closeNav}>S2eok<span className="text-sky-400">.</span></a>
        
        <ul className={`md:flex md:items-center md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ${navActive ? 'block' : 'hidden'}`}>
          <li className="text-center md:text-left py-4 md:py-0 border-b border-sky-100 md:border-none"><a href="#about" className="font-heading font-medium text-slate-800 hover:text-sky-600 transition-colors block" onClick={closeNav}>About</a></li>
          <li className="text-center md:text-left py-4 md:py-0 border-b border-sky-100 md:border-none"><a href="#skills" className="font-heading font-medium text-slate-800 hover:text-sky-600 transition-colors block" onClick={closeNav}>Skills</a></li>
          <li className="text-center md:text-left py-4 md:py-0 border-b border-sky-100 md:border-none"><a href="#projects" className="font-heading font-medium text-slate-800 hover:text-sky-600 transition-colors block" onClick={closeNav}>Projects</a></li>
          <li className="text-center md:text-left py-4 md:py-0"><a href="#contact" className="font-heading font-medium text-slate-800 hover:text-sky-600 transition-colors block" onClick={closeNav}>Contact</a></li>
        </ul>
        
        <div className="md:hidden cursor-pointer flex flex-col gap-1.5 z-50" onClick={toggleNav}>
          <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 origin-left ${navActive ? 'rotate-45' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${navActive ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 origin-left ${navActive ? '-rotate-45' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
