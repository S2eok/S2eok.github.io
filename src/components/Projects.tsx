import { useState, useEffect } from 'react';
import { Users, User, X, Trophy } from 'lucide-react';

const projectData = [
  {
    id: 'refit',
    title: 'RE:FIT (가상 피팅 & 중고 의류 거래)',
    tag: '팀 프로젝트',
    tagIcon: <Users size={14} />,
    tagColor: 'var(--primary)',
    shortDesc: (
      <>
        <p><strong>비동기 큐 (AI 연동):</strong> 가상 피팅 요청 시 AI 지연으로 인한 서버 쓰레드 고갈 현상을 진단하고, <strong>Redis 기반 큐 구조를 도입하여 응답 지연을 단축</strong>했습니다.</p>
        <br />
        <p><strong>실시간 소통 (WebSocket):</strong> STOMP의 보안 공백을 포착하고, <strong>JWT를 수동 주입</strong>해 채팅 연결 성공률 100% 보안을 확보했습니다.</p>
      </>
    ),
    fullDesc: (
      <>
        <h4>기획 배경</h4>
        <p>직접 입어볼 수 없는 중고 의류 특성상 사이즈 실패가 잦은 문제를 해결하기 위해 생성형 AI 실시간 피팅과 실시간 경매를 결합한 플랫폼입니다.</p>

        <h4>핵심 역할 및 트러블슈팅</h4>
        <ul>
          <li><strong>생성형 AI 지연으로 인한 서버 고갈 해결:</strong> AI 연동 시 30초 이상의 응답 대기로 Tomcat 워커 스레드가 고갈되어 전체 시스템이 마비되었습니다. 이를 Redis Queue 기반 비동기 아키텍처로 분리해 메인 쓰레드 점유를 없애고 <strong>응답 지연을 0.5초로 98% 단축</strong>하는 체감 성능 개선을 이뤄냈습니다.</li>
          <li><strong>트랜잭션 연동 비동기 처리:</strong> <code>TransactionSynchronization</code>을 사용해 DB 커밋이 완료된 후에만 비동기 큐 메시지를 발행하여, AI 처리만 성공하고 DB 반영은 실패하는 데이터 불일치 이슈를 사전에 차단했습니다.</li>
          <li><strong>웹소켓 보안 아키텍처:</strong> Spring Security 범위를 우회하는 STOMP 연결의 특성을 고려해 <code>ChannelInterceptor</code>를 통한 커스텀 JWT 검증을 도입, 실시간 경매 및 채팅에서의 무단 접속을 방지했습니다.</li>
        </ul>
      </>
    ),
    techs: ['Spring Boot', 'Redis Queue', 'WebSocket/STOMP', 'JWT'],
    award: 'SSAFY 공통 프로젝트 우수상 (3등)',
    github: '#',
    link: '#'
  },
  {
    id: 'studyfleet',
    title: 'StudyFleet (스터디 매칭 관리)',
    tag: '개인 프로젝트',
    tagIcon: <User size={14} />,
    tagColor: 'var(--text-muted)',
    shortDesc: (
      <>
        <p>복잡한 도메인 로직에서 예외 상황 시 발생할 수 있는 <strong>분산 트랜잭션 데이터 유실 가능성을 '0'으로</strong> 만드는 설계에 집중했습니다.</p>
        <br />
        <p>서비스 간 순환 참조 발생 시 의존성 그래프를 분석해 <strong>공통 조회 계층을 분리하는 리팩토링</strong>을 적용하여 기동 실패를 100% 제거했습니다.</p>
      </>
    ),
    fullDesc: (
      <>
        <h4>기획 배경</h4>
        <p>스터디 협업과 인원 매칭의 복잡한 라이프사이클을 안전하게 관리하기 위한 트랜잭션 기반 플랫폼입니다.</p>

        <h4>핵심 역할 및 트러블슈팅</h4>
        <ul>
          <li><strong>분산 트랜잭션 정합성 수립:</strong> 스터디, 멤버, 신청, 모집 4개 도메인이 동시에 변경되는 이벤트에서 에러가 발생하면 일부만 데이터베이스에 롤백되는 문제를 1개의 단위 트랜잭션으로 묶는 체이닝 기법을 적용해 <strong>데이터 유실 100% 방지</strong>에 성공했습니다.</li>
          <li><strong>의존성 순환 참조 해결:</strong> Service 레이어 간 읽기-쓰기 의존성이 복잡하게 얽혀 Spring Container가 구동에 실패하는 상황을 진단하고, <code>AccessService</code>라는 공통 Read-only 계층으로 로직을 추출해 완벽한 단방향 의존성 구성으로 해결했습니다.</li>
          <li><strong>MyBatis를 활용한 최적화:</strong> 복잡한 동적 검색 필터와 조인을 다루기 위해 JPA 대신 MyBatis를 타겟 채택하여 쿼리 생성을 제어했습니다.</li>
        </ul>
      </>
    ),
    techs: ['Spring Boot', 'MySQL', 'JPA', 'MyBatis'],
    github: '#',
    link: '#'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // 모달 오픈 시 배경 스크롤 방지 및 렉(Layout Shift) 방지
  useEffect(() => {
    if (selectedProject) {
      // 스크롤바 숨김으로 인한 화면 밀림 방지 패딩 계산
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    
    // 컴포넌트 언마운트 시 초기화
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-12 flex items-center">
        <span className="text-sky-500 font-normal mr-4 text-2xl">03.</span> Projects & Experiences
        <div className="hidden md:block h-px bg-sky-200 w-32 ml-6"></div>
      </h2>

      <div className="flex flex-col gap-8">
        {projectData.map((project) => (
          <div className="flex flex-col md:flex-row bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 cursor-pointer group" key={project.id} onClick={() => openModal(project)}>
            {/* Thumbnail Placeholder */}
            <div className="w-full md:w-[30%] aspect-video md:aspect-auto md:h-64 shrink-0 bg-sky-50 rounded-xl mb-6 md:mb-0 md:mr-8 flex items-center justify-center border-2 border-dashed border-sky-200 overflow-hidden relative">
              <span className="text-sky-400 font-medium z-10">이미지 삽입 예정</span>
              <div className="absolute inset-0 bg-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="flex-1 flex flex-col justify-center min-w-0">
              <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                <h3 className="text-2xl font-bold text-slate-800 m-0 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 items-center justify-start lg:justify-end">
                  {project.award && (
                    <span className="text-amber-600 border border-amber-500 bg-amber-50 px-2 py-1 flex items-center gap-1 text-xs rounded-md">
                      <Trophy size={14} /> {project.award}
                    </span>
                  )}
                  <span className="px-2 py-1 flex items-center gap-1 text-xs rounded-md border" style={{ color: project.tagColor, borderColor: project.tagColor }}>
                    {project.tagIcon} {project.tag}
                  </span>
                </div>
              </div>

              <div className="text-slate-600 leading-relaxed mb-6">
                {project.shortDesc}
              </div>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.techs.map(tech => (
                  <li key={tech} className="bg-sky-50 text-sky-600 px-3 py-1 rounded-md text-xs font-medium border border-sky-100">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 transition-opacity duration-200 ${selectedProject ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`} onClick={closeModal}>
        <div className={`bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl transition-[transform,opacity] duration-200 ${selectedProject ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 transition-colors z-10 bg-slate-100 hover:bg-slate-200 rounded-full p-2" onClick={closeModal}>
            <X size={24} />
          </button>

          {selectedProject && (
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-800 font-heading mb-6 pr-12">{selectedProject.title}</h2>
              <div className="w-full aspect-[21/9] bg-sky-50 rounded-xl mb-8 flex items-center justify-center border-2 border-dashed border-sky-200 overflow-hidden">
                <span className="text-sky-400 font-medium">상세 이미지 삽입 예정</span>
              </div>
              <ul className="flex flex-wrap gap-2 mb-8">
                {selectedProject.award && (
                  <span className="text-amber-600 border border-amber-500 bg-amber-50 px-3 py-1.5 flex items-center gap-1.5 text-sm rounded-md font-medium">
                    <Trophy size={16} /> {selectedProject.award}
                  </span>
                )}
                {selectedProject.techs.map((tech: string) => (
                  <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-200" key={tech}>
                    {tech}
                  </span>
                ))}
              </ul>
              <hr className="border-t border-slate-100 my-8" />
              <div className="[&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-slate-800 [&_h4]:mt-8 [&_h4]:mb-4 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:mb-2 [&_code]:bg-sky-50 [&_code]:text-sky-600 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded text-slate-600 leading-relaxed text-lg">
                {selectedProject.fullDesc}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
