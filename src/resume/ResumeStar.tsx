import {
  BulletList,
  CompanySection,
  ContactInfo,
  Heading1,
  Heading2,
  LabelText,
  SimpleProjectSection,
  Spacer,
  StarSection,
  TechStackSection,
  Text,
  TitleWithPeriod,
} from "../components";

const ResumeStar = () => {
  return (
    <div className="max-w-[210mm] min-h-[297mm] mx-auto my-8 px-[20mm] py-[25mm] bg-white shadow-lg leading-relaxed print:max-w-none print:m-0 print:shadow-none print:page-break-inside-avoid">
      <Heading1>양명규</Heading1>

      <Spacer />

      <ContactInfo
        email="mg960503@gmail.com"
        phone="010-8510-5739"
        github="https://github.com/mgYang53"
      />

      <BulletList
        items={[
          "TypeScript, React/Next.js 기반의 프론트엔드 개발자 (총 경력 3년)",
          "대규모 성능 최적화 및 복잡한 인터랙티브 UI 구현 경험",
          "레거시 시스템 현대화 및 아키텍처 설계 전문성",
          "크로스 브라우징 및 웹 접근성 확보를 통한 사용자 경험 개선",
          "부트캠프를 통해 React부터 TypeScript, Next.js 등 심화 내용까지 현대 프론트엔드 기술 스택 전문성 확보",
        ]}
        className="text-gray-700 text-base mt-5"
      />

      <Spacer size="xl" />

      <Heading2>경력</Heading2>

      <CompanySection
        company="주식회사위븐"
        position="개발팀 | 대리"
        period="2022. 09. ~ 2024. 03."
      >
        <div className="projects">
          <StarSection
            title="레거시 에디터 성능 문제 해결 및 현대화 프로젝트"
            situation="기존 PPT 스타일 에디터가 메모리 누수로 인한 브라우저 크래시(3분 사용 시 500MB+ 메모리 점유), 복잡한 UI 조작 시 3초 이상 지연 발생으로 고객 이탈률 증가"
            task="사용성을 유지하면서 성능을 대폭 개선하고, Figma 스타일의 직관적인 인터페이스로 전면 리팩토링"
            action={[
              "메모리 프로파일링을 통해 DOM 이벤트 리스너 누수 및 비효율적 렌더링 지점 식별",
              "이벤트 위임 패턴 도입으로 이벤트 리스너 수를 90% 감소(3000개 → 300개)",
              "Virtual DOM 기반 렌더링 시스템을 Vanilla JavaScript로 직접 구현",
              "드래그 앤 드롭 시 requestAnimationFrame과 transform3d를 활용한 하드웨어 가속 적용",
              "Web Workers를 활용한 무거운 계산 작업 분리로 메인 스레드 블로킹 해결",
            ]}
            result="메모리 사용량 70% 감소(500MB → 150MB), UI 응답 속도 80% 개선(3초 → 0.6초), 고객 만족도 조사 점수 3.2점 → 4.5점 향상, 월간 활성 사용자 수 35% 증가"
          />

          <StarSection
            title="AI 기반 쇼핑몰 생성 시스템의 복잡한 데이터 처리 최적화"
            situation="사용자 벤치마킹 사이트 분석 시 수십 개의 이미지와 텍스트 데이터를 동시 처리하며 브라우저 프리징 현상 발생, AI 응답 대기 시간 중 사용자 이탈률 60%"
            task="대용량 데이터 처리 최적화 및 실시간 피드백 시스템 구축으로 사용자 경험 개선"
            action={[
              "Promise.all을 활용한 병렬 처리에서 Promise.allSettled + 배치 처리로 변경",
              "Canvas API와 OffscreenCanvas를 활용한 이미지 전처리 최적화",
              "WebSocket 기반 실시간 진행률 표시 시스템 구현",
              "IndexedDB를 활용한 클라이언트 사이드 캐싱 시스템 도입",
              "Chart.js 커스터마이징으로 AI 분석 결과 실시간 시각화",
            ]}
            result="데이터 처리 속도 50% 향상, 브라우저 프리징 현상 완전 해결, 디자인 요소 추출 정확도 85% 달성, 베타 오픈 3개월 내 사용자 2,000명 확보, 사용자 이탈률 60% → 15% 감소"
          />
        </div>
      </CompanySection>

      <CompanySection
        company="주식회사더스토리뱅크"
        position="R&D사업본부 개발팀 | 주임"
        period="2021. 02. ~ 2022. 07."
      >
        <div className="projects">
          <StarSection
            title="모듈식 그룹웨어 아키텍처 설계 및 성능 최적화"
            situation="기존 그룹웨어가 모놀리식 구조로 인해 기능 추가 시마다 전체 시스템에 영향, 버그 수정에 평균 3일 소요"
            task="확장 가능하고 유지보수가 용이한 플러그인 아키텍처 설계 및 개발 효율성 향상"
            action={[
              "MVC 패턴 기반 모듈식 아키텍처 설계로 각 기능을 독립적 플러그인화",
              "의존성 주입 패턴을 Vanilla JavaScript로 구현하여 모듈 간 결합도 최소화",
              "Custom Event 시스템으로 모듈 간 통신 표준화",
              "지연 로딩(Lazy Loading) 구현으로 초기 로딩 시간 단축",
              "코드 분할을 통한 번들 사이즈 최적화",
            ]}
            result="새로운 기능 개발 주기 70% 단축(2주 → 3일), 버그 대응 시간 80% 단축(3일 → 4시간), 코드 재사용률 60% 향상, 유지보수 비용 40% 절감"
          />

          <StarSection
            title="50+ 템플릿 관리 시스템의 렌더링 성능 최적화"
            situation="300개 이상의 블록 템플릿 동시 로딩 시 첫 화면 렌더링에 8초 소요, 이미지 로딩으로 인한 레이아웃 시프트 빈발"
            task="대량의 템플릿을 효율적으로 관리하고 빠른 렌더링을 위한 최적화 전략 구현"
            action={[
              "Intersection Observer API를 활용한 가상 스크롤링 구현",
              "이미지 지연 로딩 및 WebP 포맷 지원으로 네트워크 최적화",
              "Service Worker 기반 캐싱 전략으로 재방문 시 로딩 시간 단축",
              "CSS Container Queries를 활용한 반응형 템플릿 시스템 구축",
              "템플릿 프리뷰를 위한 가상 DOM 렌더러 개발",
            ]}
            result="초기 로딩 시간 85% 단축(8초 → 1.2초), 메모리 사용량 60% 감소, 레이아웃 시프트 완전 해결, 디자이너-개발자 협업 시간 50% 단축"
          />
        </div>
      </CompanySection>

      <CompanySection
        company="블루스트림"
        position="개발팀 | 인턴, 계약직"
        period="2020. 09. ~ 2021. 01."
      >
        <div className="projects">
          <StarSection
            title="공공기관 웹 접근성 및 크로스 브라우징 해결"
            situation="공공기관 LMS가 IE11 지원 필수, WCAG 2.1 AA 등급 준수 요구사항과 함께 스크린 리더 호환성 문제 발생"
            task="다양한 브라우저 환경과 보조 기술에서 완벽하게 작동하는 접근 가능한 시스템 구축"
            action={[
              "Polyfill 라이브러리 도입 및 크로스 브라우징 호환성 매트릭스 작성",
              "ARIA 속성과 시맨틱 HTML을 활용한 스크린 리더 최적화",
              "키보드 네비게이션 완전 지원 및 포커스 관리 시스템 구현",
              "색상 대비비 4.5:1 이상 확보 및 색각 이상자를 위한 패턴 대체재 제공",
              "axe-core를 활용한 자동화된 접근성 테스트 환경 구축",
            ]}
            result="WCAG 2.1 AA 등급 100% 준수 달성, 스크린 리더 호환성 테스트 통과, 시각 장애인 사용자 만족도 4.8점, IE11 포함 모든 주요 브라우저에서 동일한 사용자 경험 제공"
          />
        </div>
      </CompanySection>

      <Heading2>학력</Heading2>

      <section>
        <TitleWithPeriod
          title="숭실대학교 컴퓨터학부 학사"
          period="2015. 03. ~ 2021. 02."
        />
      </section>

      <Heading2>교육</Heading2>

      <section>
        <TitleWithPeriod
          title="패스트캠퍼스 데브캠프 프론트엔드 2기"
          period="2024. 09. ~ 2025. 04. (7개월)"
        />

        <BulletList
          items={[
            "JavaScript, TypeScript, React, Next.js 등 프론트엔드 기술 관련 강의 수강",
            "실제 기업 연계 이커머스 플랫폼 팀 프로젝트 진행",
            "인트라넷 인사관리 시스템, 영상 공유 SNS 등 3개 프로젝트 개발",
          ]}
          className="text-gray-700 text-base mt-4"
        />
      </section>

      <Heading2>기술 스택</Heading2>

      <div className="mt-8">
        <TechStackSection
          category="언어/프레임워크"
          technologies="JavaScript, TypeScript, React, Next.js"
        />

        <TechStackSection
          category="상태관리"
          technologies="Context API, Zustand, Redux Toolkit, Tanstack Query"
        />

        <TechStackSection
          category="스타일링"
          technologies="CSS3, Tailwind CSS, CSS Modules, SCSS"
        />

        <TechStackSection category="빌드도구" technologies="Vite, Webpack" />

        <TechStackSection
          category="성능 최적화"
          technologies="Web Workers, Service Worker, Virtual DOM, Canvas API"
        />

        <TechStackSection
          category="웹 접근성"
          technologies="WCAG 2.1, ARIA, axe-core, 스크린 리더 최적화"
        />

        <TechStackSection
          category="패키지 매니저"
          technologies="Yarn, npm, pnpm"
        />

        <TechStackSection category="CI/CD" technologies="Github Actions" />
      </div>

      <Heading2>수상 및 기타</Heading2>

      <section>
        <TitleWithPeriod
          title="AI-JAM KOREA 2020 동상 수상"
          period="2020. 08."
        />

        <StarSection
          title="NLP 기반 감정 분석 시스템의 정확도 최적화"
          situation="한국어 텍스트의 미묘한 감정 표현과 문맥 의존적 특성을 효과적으로 분석하는 모델 개발 필요"
          task="Twitter Sentiment Analysis 데이터셋을 활용한 고정확도 감정 분석 시스템 구축"
          action={[
            "Word2Vec 임베딩과 RandomForest 앙상블 기법 조합",
            "한국어 불용어 사전 커스터마이징 및 형태소 분석 최적화",
            "교차 검증을 통한 하이퍼파라미터 튜닝으로 오버피팅 방지",
          ]}
          result="텍스트 기반 감정 분석 정확도 80% 달성"
        />

        <TitleWithPeriod title="자격증" period="" />

        <BulletList
          items={["정보처리기사 (2020.08)", "SQLD (2019.12)"]}
          className="text-gray-700 text-base mt-2"
        />

        <TitleWithPeriod title="교육 이력" period="" />

        <Text className="mt-2">
          코알라 유니브 데이터 사이언스 교육 수료 (2020.04)
        </Text>

        <BulletList
          items={[
            "데이터 가공 및 시각화, 예측 모델 실습 등 그룹 스터디 진행",
            "AI 창업 아이디어 해커톤 참가",
          ]}
          className="text-gray-700 text-base mt-2"
        />
      </section>

      <Heading2>프로젝트</Heading2>

      <SimpleProjectSection
        title="React 기반 이커머스 플랫폼 (팀 프로젝트)"
        period="2025. 02. ~ 2025. 04."
        techStack="TypeScript, React, Next.js, 상태관리 라이브러리"
        challenge="대용량 상품 데이터 처리 및 실시간 재고 관리 시스템 구현"
        solution="Virtual Scrolling, Debounce 검색, WebSocket 기반 실시간 업데이트"
        description="설명: 실제 기업과 연계하여 진행한 이커머스 플랫폼 개발 프로젝트"
      />

      <SimpleProjectSection
        title="인트라넷 인사관리 시스템"
        period="2024. 12. ~ 2025. 01."
        techStack="React, TypeScript"
        challenge="복잡한 조직도 구조의 효율적 렌더링 및 권한 관리 시스템"
        solution="트리 구조 최적화, Role-Based Access Control 구현"
        description="설명: 조직 관리 및 인사 정보 관리를 위한 웹 애플리케이션"
      />

      <SimpleProjectSection
        title="영상 공유 SNS"
        period="2025. 01. ~ 2025. 02."
        techStack="React, Next.js"
        challenge="영상 스트리밍 최적화 및 사용자 인터랙션 실시간 처리"
        solution="HLS 스트리밍, 무한 스크롤 최적화, WebSocket 기반 실시간 댓글"
        description="설명: 영상 업로드, 공유, 소셜 기능을 포함한 SNS 플랫폼"
      />
    </div>
  );
};

export default ResumeStar;
