
const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 z-10 pt-10 pb-20 text-left">
        <p className="font-heading text-sky-600 font-medium text-lg md:text-xl mb-3 tracking-wide">안녕하세요, 저는</p>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-slate-900 tracking-tight">
          백엔드 개발자 OOO
        </h1>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight mt-6">
          <span className="text-sky-600">"정합성과 성능을 숫자로 증명하는"</span><br />
          개발자가 되겠습니다.
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-slate-500 mb-12 max-w-3xl leading-relaxed mt-6">
          로그 기반의 병목 진단부터 아키텍처 재설계까지, 보이지 않는 곳에서 견고한 시스템을 구축합니다.<br className="hidden md:block"/>
          데이터 유실 방지와 API 응답 속도 최적화(30초 → 0.5초) 등 수치로 증명할 수 있는 개선을 이끌어갑니다.
        </p>
        
        <a 
          href="#projects" 
          className="inline-block bg-transparent text-sky-600 font-bold text-lg py-3 px-8 rounded border border-sky-600 hover:bg-sky-50 transition-colors duration-300"
        >
          프로젝트 보기
        </a>
      </div>

      {/* Decorative Background */}
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Soft blue transparent curves inspired by the image background */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[60%] rounded-[100%] bg-sky-100/50 blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-[40%] right-[20%] w-[80%] h-[70%] rounded-[100%] bg-sky-200/40 blur-3xl transform -rotate-12"></div>
      </div>
    </section>
  );
};

export default Hero;
