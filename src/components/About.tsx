
const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-12 flex items-center">
        <span className="text-sky-500 font-normal mr-4 text-2xl">01.</span> About Me
        <div className="hidden md:block h-px bg-sky-200 w-32 ml-6"></div>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-slate-600 space-y-6 leading-relaxed text-lg">
          <p>
            <strong className="font-semibold text-slate-800">"문제의 징후를 추적하여 구조를 재설계하는" 과정을 통해 성장했습니다.</strong><br/>
            에러 로그의 근본 원인을 아키텍처 레이어까지 추적하는 습관이 있습니다. 서비스 간 순환 참조 발생 시 의존성 그래프를 그려 공통 조회 계층을 도출하고, 스레드 덤프 분석을 통해 시스템 병목을 진단합니다.
          </p>
          <p>
            <strong className="font-semibold text-slate-800">"안 되는 이유를 정확히 진단하고, 대안을 제시하는 팀 플레이어"</strong><br/>
            작동만 하는 코드가 아닌, 장애 상황에서도 데이터가 안전한 구조를 선호합니다. 초기 설계에 깊게 고민하지만, [핵심 흐름도 → MVP 구현 → 리팩토링] 타임라인을 구분하여 속도와 품질의 균형을 유지합니다. 맹목적인 구현보다 원인을 분석하고 논리적으로 팀과 소통하며 협업합니다.
          </p>
        </div>
        <div className="mt-8 md:mt-0 relative group w-full max-w-sm mx-auto">
          <div className="relative rounded-2xl border-2 border-sky-400 bg-sky-50 aspect-square flex items-center justify-center p-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
            <div className="absolute inset-0 border-2 border-sky-600 rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <span className="text-sky-600 text-lg font-medium text-center">이미지<br/>삽입 예정</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
