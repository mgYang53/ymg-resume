import {
  BulletList,
  CompanySection,
  ContactInfo,
  Heading1,
  Heading2,
  MinifiedStarSection,
  ResumeContainer,
  SimpleProjectSection,
  Spacer,
  TechStackSection,
  TitleWithPeriod,
} from "@components";

const ResumeClassic = () => {
  return (
    <ResumeContainer>
      <Heading1>양명규</Heading1>

      <Spacer />

      <ContactInfo
        email="mg960503@gmail.com"
        phone="010-8510-5739"
        github="https://github.com/mgYang53"
      />

      {/* <BulletList
        items={[
          "Vanilla JavaScript 기반 웹 애플리케이션 설계 및 개발",
          "모듈 패턴 및 DOM 조작 최적화를 통한 애플리케이션 성능 개선",
          "메모리 누수 방지 및 렌더링 최적화로 웹 퍼포먼스 향상 경험",
          "드래그 앤 드롭 인터페이스 구현 및 WYSIWYG 에디터 개발 전문성",
        ]}
        className="text-gray-700 text-base mt-5"
      /> */}

      <Spacer size="xl" />

      <Heading2 className="mb-6">경력</Heading2>

      <section className="space-y-12">
        <CompanySection
          company="주식회사위븐"
          position="개발팀/대리"
          startDate="2022-09"
          endDate="2024-02"
          showDuration={true}
        >
          <div className="space-y-6">
            <MinifiedStarSection
              title="통합 에디터 시스템 개발 (프로 & 블록 에디터)"
              startDate="2022-09"
              endDate="2024-03"
              situationAndTask={[
                "기존 PPT 스타일 UI가 뷰포트 상 많은 높이를 차지하여 편집 경험 저하",
                "기존 에디터의 편집 자유도 제한으로 다양한 디자인 웹사이트 제작에 한계",
                "전문가용 고급 편집과 일반 사용자용 간편 편집의 이원화된 니즈 존재",
              ]}
              actionAndResult={[
                "Figma 스타일의 좌우 패널 UI/UX로 전면 개선",
                "커스텀 드래그 앤 드롭 기능 개선으로 모드에 따른 자유도 제어",
                "에디터 프로: DOM/Text Shadow, 애니메이션, 스크롤 효과 및 배경동영상 시스템 구현",
                "전문가/일반 사용자 모두 지원하는 이원화 시스템으로 사용자 지원 요청 대폭 감소",
              ]}
            />

            <MinifiedStarSection
              title="AI 기반 쇼핑몰 자동생성 시스템 개발"
              startDate="2023-06"
              endDate="2024-03"
              situationAndTask={[
                "기존 템플릿 방식으로는 사용자 맞춤형 디자인 제작에 한계",
                "사용자들이 디자인 선택과 콘텐츠 배치에 어려움 겪음",
                "벤치마킹 쇼핑몰을 AI로 분석하여 비슷한 디자인의 쇼핑몰 생성 시스템 구축",
              ]}
              actionAndResult={[
                "추출된 디자인 요소를 AI 분석 엔진에 전달하고 결과를 시각화하는 프론트엔드 인터페이스 구현",
                "텍스트, 레이아웃, 색상 등을 추출하여 적절한 디자인으로 매칭하는 알고리즘 개발 지원",
                "iframe 기반 실시간 쇼핑몰 미리보기 시스템 구현으로 사용자 경험 향상",
                "쇼핑몰 제작 시간 단축으로 고객 비즈니스 가치 창출",
              ]}
            />
          </div>
        </CompanySection>

        <CompanySection
          company="주식회사더스토리뱅크"
          position="R&D사업본부 개발팀/주임"
          startDate="2021-02"
          endDate="2022-06"
          showDuration={true}
        >
          <div className="space-y-8">
            <MinifiedStarSection
              title="모듈식 그룹웨어 아키텍처 설계 및 성능 최적화"
              startDate="2021-12"
              endDate="2022-05"
              situationAndTask={[
                "기존 그룹웨어가 모놀리식 구조로 인해 기능 추가 시마다 전체 시스템에 영향",
                "버그 수정에 평균 3일 소요, 새로운 기능 개발 주기가 길어짐",
                "확장 가능하고 유지보수가 용이한 플러그인 아키텍처 설계 및 개발 효율성 향상 필요",
              ]}
              actionAndResult={[
                "서비스 내 그룹웨어 기능을 플러그인 형태로 설계 및 개발하여 시스템 유연성 확보",
                "조직도, 인사정보, 근태관리 등 핵심 그룹웨어 기능을 독립적인 모듈로 분리 개발",
                "플러그인 간 통신 인터페이스 표준화로 시스템 안정성 확보",
                "결과적으로 모듈화된 아키텍처로 버그 대응 시간 70% 단축, 새로운 기능 개발 주기 50% 단축, 그룹웨어 플러그인의 성공적인 개발 및 사내 인트라넷 시스템 적용을 달성했습니다.",
              ]}
            />

            <MinifiedStarSection
              title="내부 템플릿 관리 시스템 구축"
              startDate="2021-06"
              endDate="2021-09"
              situationAndTask={[
                "50+ 테마, 300+ 블록 템플릿 수정 시마다 디자이너가 개발자에게 의존",
                "메뉴, 블록, 페이지 템플릿 디자인 변경에 평균 3일 소요 (요청→개발→배포)",
                "디자이너의 즉시 반영 요구와 개발 일정 간 지속적 충돌",
              ]}
              actionAndResult={[
                "내부 템플릿 관리 사이트 구축 (별도 관리자 페이지)",
                "WYSIWYG 기반 템플릿 에디터 개발로 코딩 없이 디자인 수정 가능",
                "원클릭 배포 시스템 개발 (승인 프로세스 + 자동 배포)",
                "템플릿 버전 관리 및 롤백 기능 구현 (안전한 실험 환경 제공)",
                "템플릿 수정 프로세스 단축, 디자이너 자율성 확보로 개발팀 업무 부담 감소",
              ]}
            />

            <MinifiedStarSection
              title="대규모 행사를 위한 고성능 인터랙티브 웹사이트 구축"
              startDate="2021-10"
              endDate="2021-11"
              situationAndTask={[
                "3천명 규모의 온라인 올림피아드 행사를 위한 웹사이트 개발 필요",
                "짧은 개발 기간 내 안정적이고 시각적으로 임팩트 있는 사이트 구축 요구",
              ]}
              actionAndResult={[
                "SVG와 GSAP 라이브러리를 활용한 인터랙티브 애니메이션 구현",
                "반응형 디자인으로 다양한 디바이스 환경 지원",
                "성공적인 행사 운영으로 클라이언트 만족도 달성",
              ]}
            />
          </div>
        </CompanySection>

        <CompanySection
          company="블루스트림"
          position="개발팀/인턴, 계약직"
          startDate="2020-09"
          endDate="2021-01"
          showDuration={true}
        >
          <MinifiedStarSection
            title="공공기관 웹 접근성 및 크로스 브라우징 지원 LMS 구축"
            startDate="2020-10"
            endDate="2020-11"
            situationAndTask={[
              "공공기관 LMS가 IE11 지원 필수, 웹 접근성 준수 요구사항",
              "다양한 브라우저 환경과 보조 기술에서 완벽하게 작동하는 시스템 구축 필요",
              "스크린 리더 호환성 및 키보드 네비게이션 완전 지원으로 모든 사용자 접근 보장",
            ]}
            actionAndResult={[
              "시맨틱 HTML 마크업과 ARIA 속성 활용으로 스크린 리더 최적화",
              "IE11 포함 크로스 브라우징 이슈 해결 및 반응형 디자인 적용",
              "장애인 사용자 접근성 개선으로 공공기관 시스템 요구사항 충족, 다양한 브라우저 호환성 확보",
            ]}
          />
        </CompanySection>
      </section>

      <Spacer size="xl" />

      <Heading2 className="mb-6">학력</Heading2>

      <section>
        <TitleWithPeriod
          title="숭실대학교 컴퓨터학부 학사"
          startDate="2015-03"
          endDate="2021-02"
        />
      </section>

      <Spacer size="xl" />

      <Heading2 className="mb-6">교육</Heading2>

      <section className="space-y-12">
        <div>
          <TitleWithPeriod
            title="패스트캠퍼스 데브캠프 프론트엔드 2기"
            startDate="2024-10"
            endDate="2025-04"
            showDuration={true}
          />

          <BulletList
            items={[
              "React, Next.js, TypeScript, Redux Toolkit 등 프론트엔드 개발 학습",
              "기업 연계 및 토이 프로젝트 경험 (3명~10명 규모, 총 3개 프로젝트)",
            ]}
            className="text-gray-700 text-base mt-4"
          />
        </div>
        <div>
          <TitleWithPeriod
            title="패스트캠퍼스 Kernel360 프론트엔드 3기"
            startDate="2025-06"
            endDate="2025-08"
            showDuration={true}
          />

          <BulletList
            items={[
              "컴포넌트 라이브러리 설계 및 모노레포 구조 학습",
              "MVP 개발 프로세스 경험: 서비스 기획 분석 → 핵심 기능 선택 → 구현",
              "실무 중심 서비스 확장 및 유지보수 경험 (3주 MVP + 5주 고도화)",
            ]}
            className="text-gray-700 text-base mt-4"
          />
        </div>
        <div>
          <TitleWithPeriod
            title="코알라 유니브 데이터 사이언스 교육"
            startDate="2020-04"
            endDate="2020-08"
          />

          <BulletList
            items={[
              "데이터 가공 및 시각화, 예측 모델 실습 등 그룹 스터디 진행",
              "AI 창업 아이디어 해커톤 참가",
            ]}
            className="text-gray-700 text-base mt-4"
          />
        </div>
      </section>

      <Spacer size="xl" />

      <Heading2 className="mb-6">기술 스택</Heading2>

      <section className="space-y-3">
        <TechStackSection
          category="언어/프레임워크"
          technologies="JavaScript, TypeScript, React, Next.js"
        />
        <TechStackSection
          category="상태관리"
          technologies="TanStack Query, Redux Toolkit, Zustand"
        />
        <TechStackSection
          category="스타일링"
          technologies="CSS Modules, Tailwind CSS, SCSS"
        />
        <TechStackSection
          category="빌드도구"
          technologies="Vite, Webpack, Turborepo"
        />
        <TechStackSection
          category="패키지 매니저"
          technologies="Yarn, npm, pnpm"
        />
        <TechStackSection category="CI/CD" technologies="Github Actions" />
      </section>

      <Spacer size="xl" />

      <Heading2 className="mb-6">기타</Heading2>

      <section className="space-y-6">
        <div>
          <TitleWithPeriod
            title="AI-JAM KOREA 2020 동상 수상"
            startDate="2020-08"
          />

          <BulletList
            items={[
              "NLP 기반 감정 분석 및 마인드 케어 어플리케이션 개발",
              "Twitter Sentiment Analysis 데이터셋을 활용한 감정 분석 모델 구현",
              "Word2Vec, RandomForest 알고리즘 적용으로 텍스트 기반 감정 분석 정확도 80% 달성",
            ]}
            className="text-gray-700 text-base mt-4"
          />
        </div>

        <div>
          <TitleWithPeriod title="자격증" />

          <BulletList
            items={["정보처리기사, SQLD"]}
            className="text-gray-700 text-base mt-2"
          />
        </div>
      </section>
      <Spacer size="xl" />

      <Heading2 className="mb-6">주요 프로젝트</Heading2>

      <section className="space-y-8">
        <SimpleProjectSection
          title="DDIP(띱!) - 지역 기반 중고거래 하향식 경매 플랫폼"
          startDate="2025-06"
          endDate="2025-08"
          techStack="Next.js, TypeScript, TanStack Query, Supabase, Turborepo"
          description={[
            "30분 주기 하향식 가격 조정으로 기존 중고거래 가격 협상 비효율성 해결",
            "실시간 지역화 서비스: Supabase Realtime 채팅 + Kakao Map API 연동 + PWA 최적화",
            "Turborepo 기반 디자인 시스템 구축으로 UI 개발 효율성 극대화",
            "GitHub Actions 기반 3단계 CI/CD 파이프라인 구축 (자동 릴리즈·Storybook 배포·Vercel 연동)",
          ]}
        />

        <SimpleProjectSection
          title="Ora(오라) - 개인화 전자상거래 플랫폼"
          startDate="2025-03"
          endDate="2025-04"
          techStack="Next.js, TypeScript, TanStack Query, Zustand, Tailwind CSS"
          description={[
            "기업 연계 프로젝트 - Frontend 3명, Backend 5명, UX/UI 2명",
            "TanStack Query 기반 서버 상태 캐싱 및 클라이언트 Hydration 최적화",
            "상품 검색/필터링, 리뷰 시스템, 사용자 행동 분석 기능 구현",
            "Atomic Design & shadcn/ui 기반 재사용 컴포넌트 구축",
          ]}
        />

        <SimpleProjectSection
          title="PetMoment(펫모먼트) - 펫 영상 공유 SNS"
          startDate="2024-12"
          endDate="2025-02"
          techStack="React, TypeScript, Firebase, TanStack Query, Zustand"
          description={[
            "플레이리스트 중심의 영상 관리 시스템 및 소셜 기능 (좋아요/북마크/댓글/팔로우) 개발",
            "React Player 활용 YouTube 영상 통합 및 자동재생 시스템 개발",
            "Google OAuth & Firebase Firestore 기반 사용자 인증 및 데이터 관리 구현",
            "TanStack Query와 Zustand를 활용한 서버/클라이언트 상태 분리 및 성능 최적화",
          ]}
        />
      </section>
    </ResumeContainer>
  );
};

export default ResumeClassic;
