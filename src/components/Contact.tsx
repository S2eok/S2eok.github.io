
const Contact = () => {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-8 flex items-center justify-center">
        <span className="text-sky-500 font-normal mr-4 text-2xl">04.</span> Get In Touch
      </h2>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed">
        새로운 프로젝트 제안이나 채용 관련 문의는 언제든 환영입니다.<br />
        메일을 남겨주시면 빠르게 답장드리겠습니다.
      </p>
      {/* 본인의 실제 이메일을 placeholder 부분에 넣어주세요 */}
      <a href="mailto:이메일주소@도메인.com" className="inline-block bg-sky-600 text-white font-heading font-medium py-3 px-8 rounded-full border border-sky-600 hover:bg-transparent hover:text-sky-600 transition-all duration-300 shadow-lg hover:shadow-sky-600/30">이메일 보내기</a>
    </section>
  );
};

export default Contact;
