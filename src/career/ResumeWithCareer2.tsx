import {
  AchievementBox,
  BulletList,
  ContactInfo,
  Divider,
  Heading1,
  Heading2,
  Heading3,
  JobTitle,
  Period,
} from "../components";

const ResumeWithCareer2 = () => {
  return (
    <div className="max-w-[210mm] min-h-[297mm] mx-auto my-8 px-[20mm] py-[25mm] bg-white shadow-lg leading-relaxed print:max-w-none print:m-0 print:shadow-none print:page-break-inside-avoid">
      <Heading1>양명규</Heading1>

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

      <Heading2 variant="section">경력</Heading2>

      <section>
        <Heading3>주식회사위븐</Heading3>

        <JobTitle>개발팀 | 대리</JobTitle>
        <Period>2022. 09. ~ 2024. 03.</Period>

        <AchievementBox>
          <div className="achievement-content">
            주요 업무: 웹사이트 에디터 개발 및 쇼핑몰 AI 제작 서비스 개발 주요
            성과:
            <BulletList
              items={[
                "레거시 PPT 스타일 에디터를 Figma 스타일 WYSIWYG 에디터로 개선하여 사용자 편집 시간 단축 및 고객 만족도 향상",
                "AI 기반 쇼핑몰 자동 생성 시스템 구축으로 디자인 요소 추출 정확도 85% 달성, 베타 오픈 3개월 내 사용자 2,000명 확보",
              ]}
            />
          </div>
        </AchievementBox>
      </section>

      <section>
        <Heading3>주식회사더스토리뱅크</Heading3>

        <JobTitle>R&D사업본부 개발팀 | 주임</JobTitle>
        <Period>2021. 02. ~ 2022. 07.</Period>

        <AchievementBox>
          <div className="achievement-content">
            주요 업무: 그룹웨어 플러그인 개발, 웹사이트 빌더 서비스 개발, 행사
            사이트 개발 주요 성과:
            <BulletList
              items={[
                "모듈식 그룹웨어 시스템 설계로 버그 대응 시간 단축 및 새로운 기능 개발 주기 단축",
                "50여 종 테마 템플릿과 300여 개 블록 템플릿 효율적 관리 시스템 구축으로 개발 생산성 향상",
                "3천명 규모 행사 사이트 성공적 운영으로 클라이언트 만족도 달성",
              ]}
            />
          </div>
        </AchievementBox>
      </section>

      <section>
        <Heading3>블루스트림</Heading3>

        <JobTitle>개발팀 | 인턴, 계약직</JobTitle>
        <Period>2020. 09. ~ 2021. 01.</Period>

        <AchievementBox>
          <div className="achievement-content">
            주요 업무: 공공기관 LMS 구축 프로젝트 주요 성과:
            <BulletList
              items={[
                "웹 표준 준수 및 접근성 가이드라인을 통한 공공기관 시스템 요구사항 충족, 다양한 브라우저 호환성 확보",
              ]}
            />
          </div>
        </AchievementBox>
      </section>

      <Heading2 variant="section">기술 스택</Heading2>

      <div className="mt-8">
        <Heading3>언어/프레임워크</Heading3>

        <p className="text-gray-700 text-sm mt-2">
          JavaScript, TypeScript, React, Next.js
        </p>

        <Heading3>상태관리</Heading3>

        <p className="text-gray-700 text-sm mt-2">
          Zustand, Redux Toolkit, Tanstack Query
        </p>

        <Heading3>스타일링</Heading3>

        <p className="text-gray-700 text-sm mt-2">
          Tailwind CSS, CSS Modules, SCSS
        </p>

        <Heading3>빌드 도구</Heading3>

        <p className="text-gray-700 text-sm mt-2">Vite, Webpack</p>

        <Heading3>패키지 매니저</Heading3>

        <p className="text-gray-700 text-sm mt-2">Yarn, Npm, Pnpm</p>

        <Heading3>CI/CD</Heading3>

        <p className="text-gray-700 text-sm mt-2">Github Actions</p>
      </div>

      <Heading2 variant="section">학력</Heading2>

      <section>
        <Heading3>숭실대학교 컴퓨터학부 학사</Heading3>

        <Period>2015. 03. ~ 2021. 02.</Period>
      </section>

      <Heading2 variant="section">교육</Heading2>

      <section>
        <Heading3>패스트캠퍼스 데브캠프 프론트엔드 2기</Heading3>

        <Period>2024. 09. ~ 2025. 04. (7개월)</Period>

        <BulletList
          items={[
            "JavaScript, TypeScript, React, Next.js 등 프론트엔드 기술 관련 강의 수강",
            "인트라넷 인사관리 시스템, 영상 공유 SNS 등 미니 프로젝트 개발",
            "실제 기업 연계 이커머스 플랫폼 프로젝트 진행",
          ]}
          className="text-gray-700 text-base mt-4"
        />
      </section>

      <Heading2 variant="section">수상 및 기타</Heading2>

      <section>
        <Heading3>AI-JAM KOREA 2020 동상 수상</Heading3>

        <Period>2020. 08.</Period>

        <p className="text-gray-700 text-sm mt-2">
          NLP 기반 감정 분석 개발 및 마인드 케어 어플리케이션 기획
        </p>

        <BulletList
          items={[
            "Twitter Sentiment Analysis 데이터셋을 활용한 감정 분석 모델 구현",
            "Word2Vec, RandomForest 알고리즘 적용으로 텍스트 기반 감정 분석 정확도 80% 달성",
          ]}
          className="text-gray-700 text-base mt-2"
        />
      </section>

      <section>
        <Heading3>자격증</Heading3>

        <BulletList
          items={["정보처리기사 (2020.08)", "SQLD (2019.12)", "ADsP (2019.10)"]}
          className="text-gray-700 text-base mt-2"
        />
      </section>

      <section>
        <Heading3>교육 이력</Heading3>

        <p className="text-gray-700 text-sm mt-2">
          코알라 유니브 데이터 사이언스 교육 수료 (2020.04)
        </p>

        <BulletList
          items={[
            "데이터 가공 및 시각화, 예측 모델 실습 등 그룹 스터디 진행",
            "AI 창업 아이디어 해커톤 참가",
          ]}
          className="text-gray-700 text-base mt-2"
        />
      </section>

      <Heading2 variant="section">프로젝트</Heading2>

      <section>
        <h4 className="text-xl font-bold">이커머스 플랫폼</h4>

        <Period>2025. 02. ~ 2025. 04.</Period>
        <p className="text-gray-700 text-sm mt-2">
          기술 스택: TypeScript, React, Next.js, 상태관리 라이브러리
        </p>
        <p className="text-gray-700 text-sm mt-1">
          설명: 실제 기업과 연계하여 진행한 이커머스 플랫폼 개발 프로젝트
        </p>
      </section>

      <section>
        <h4 className="text-xl font-bold">인트라넷 인사관리 시스템</h4>

        <Period>2024. 12. ~ 2025. 01.</Period>
        <p className="text-gray-700 text-sm mt-2">
          기술 스택: React, TypeScript
        </p>
        <p className="text-gray-700 text-sm mt-1">
          설명: 조직 관리 및 인사 정보 관리를 위한 웹 애플리케이션
        </p>
      </section>

      <section>
        <h4 className="text-xl font-bold">영상 공유 SNS</h4>

        <Period>2025. 01. ~ 2025. 02.</Period>
        <p className="text-gray-700 text-sm mt-2">기술 스택: React, Next.js</p>
        <p className="text-gray-700 text-sm mt-1">
          설명: 영상 업로드, 공유, 소셜 기능을 포함한 SNS 플랫폼
        </p>
      </section>

      <Divider className="mt-20 border-gray-400" />

      <Heading2 variant="section">경력 기술서</Heading2>

      <section>
        <Heading3>주식회사위븐 (2022.09 - 2024.03)</Heading3>

        <div className="mt-6">
          <h4 className="text-xl font-bold">웹사이트 에디터 개발 프로젝트</h4>

          <Period>2022. 09. ~ 2024. 03.</Period>
          <p className="text-gray-600 text-sm italic mt-2">
            사용성이 떨어지는 레거시 PPT 스타일 에디터를 현대적인 인터페이스로
            개선
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">담당 업무:</p>
            <BulletList
              items={[
                "JavaScript와 모듈 패턴을 활용하여 Figma 스타일의 직관적인 WYSIWYG 에디터 설계",
                "이벤트 위임 및 DOM 최적화로 대규모 에디터 성능 개선",
                "커스텀 드래그 앤 드롭 구현으로 편집 경험 향상",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <p className="font-semibold text-gray-800 mt-4">사용 기술:</p>
            <p className="text-gray-700 text-sm mt-1">
              Vanilla JavaScript, HTML5, CSS3, DOM API, 모듈 패턴
            </p>

            <p className="font-semibold text-gray-800 mt-4">성과:</p>
            <BulletList
              items={[
                "메모리 사용량 절감으로 브라우저 안정성 확보",
                "사용자 편집 시간 단축 및 고객 만족도 향상",
              ]}
              className="text-gray-700 text-sm mt-2"
            />
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-bold">쇼핑몰 AI 제작 서비스 개발 프로젝트</h4>

          <Period>2023. 06. ~ 2024. 03.</Period>
          <p className="text-gray-600 text-sm italic mt-2">
            사용자 벤치마킹 사이트 분석 기반 맞춤형 쇼핑몰 자동 생성 시스템 구축
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">담당 업무:</p>
            <BulletList
              items={[
                "추출된 디자인 요소를 AI 분석 엔진에 전달하고 결과를 시각화하는 프론트엔드 인터페이스 구현",
                "사용자 선호도와 벤치마킹 사이트 간의 상관관계를 분석하여 맞춤 추천을 제공하는 로직 개발 지원",
                "iframe 기반 실시간 쇼핑몰 미리보기 시스템 구현으로 사용자 경험 향상",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <p className="font-semibold text-gray-800 mt-4">사용 기술:</p>
            <p className="text-gray-700 text-sm mt-1">
              JavaScript, HTML5, CSS3, iframe API, Chart.js
            </p>

            <p className="font-semibold text-gray-800 mt-4">성과:</p>
            <BulletList
              items={[
                "디자인 요소 추출 정확도 85% 달성으로 AI 추천 품질 향상",
                "서비스 베타 오픈 후 3개월 내 사용자 2,000명 확보",
                "쇼핑몰 제작 시간 단축으로 고객 비즈니스 가치 창출",
              ]}
              className="text-gray-700 text-sm mt-2"
            />
          </div>
        </div>
      </section>

      <section>
        <Heading3>주식회사더스토리뱅크 (2021.02 - 2022.07)</Heading3>

        <div className="mt-6">
          <h4 className="text-xl font-bold">
            WIZWARE 그룹웨어 플러그인 개발 프로젝트
          </h4>

          <Period>2022. 03. ~ 2022. 07.</Period>
          <p className="text-gray-600 text-sm italic mt-2">
            확장 가능한 모듈식 그룹웨어 시스템 설계 및 구현
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">담당 업무:</p>
            <BulletList
              items={[
                "서비스 내 그룹웨어 기능을 플러그인 형태로 설계 및 개발하여 시스템 유연성 확보",
                "조직도, 인사정보, 근태관리 등 핵심 그룹웨어 기능 개발",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <p className="font-semibold text-gray-800 mt-4">사용 기술:</p>
            <p className="text-gray-700 text-sm mt-1">
              JavaScript, HTML5, CSS3, 모듈 패턴, MVC 아키텍처
            </p>

            <p className="font-semibold text-gray-800 mt-4">성과:</p>
            <BulletList
              items={[
                "모듈화된 아키텍처로 버그 대응 시간 단축",
                "플러그인 방식 도입으로 새로운 기능 개발 주기 단축",
                "그룹웨어 플러그인의 성공적인 개발 및 사내 인트라넷 시스템 적용",
              ]}
              className="text-gray-700 text-sm mt-2"
            />
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-bold">
            WEVEN 웹사이트 빌더 서비스 개발 프로젝트
          </h4>

          <Period>2021. 02. ~ 2021. 09.</Period>
          <p className="text-gray-600 text-sm italic mt-2">
            확장 가능하고 유지보수가 용이한 템플릿 관리 시스템 개발
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">담당 업무:</p>
            <BulletList
              items={[
                "JavaScript 템플릿 엔진 유지보수 및 버전 관리 기능 구현",
                "이미지 지연 로딩, 브라우저 캐싱 전략 적용으로 렌더링 최적화",
                "모듈형 게시판 템플릿 시스템으로 다양한 형태와 사용자 정의 필드 지원",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <p className="font-semibold text-gray-800 mt-4">사용 기술:</p>
            <p className="text-gray-700 text-sm mt-1">
              JavaScript, HTML5, CSS3, 템플릿 엔진, 브라우저 캐싱 API
            </p>

            <p className="font-semibold text-gray-800 mt-4">성과:</p>
            <BulletList
              items={[
                "50여 종의 테마 템플릿과 300여 개 블록 템플릿 효율적 관리 시스템 구축",
                "디자이너-개발자 간 협업 프로세스 간소화로 템플릿 개발 시간 단축",
              ]}
              className="text-gray-700 text-sm mt-2"
            />
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-bold">
            2021 하인슈타인 올림피아드 행사 사이트 개발 프로젝트
          </h4>

          <Period>2021. 08. ~ 2021. 09.</Period>
          <p className="text-gray-600 text-sm italic mt-2">
            짧은 개발 기간 내 3천명 규모 행사를 위한 안정적인 사이트 구축
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">담당 업무:</p>
            <BulletList
              items={[
                "SVG와 GSAP 라이브러리를 활용한 고성능 인터랙티브 애니메이션 구현",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <p className="font-semibold text-gray-800 mt-4">사용 기술:</p>
            <p className="text-gray-700 text-sm mt-1">
              JavaScript, HTML5, CSS3, SVG, GSAP
            </p>

            <p className="font-semibold text-gray-800 mt-4">성과:</p>
            <BulletList
              items={["성공적인 행사 운영으로 클라이언트 만족도 달성"]}
              className="text-gray-700 text-sm mt-2"
            />
          </div>
        </div>
      </section>

      <section>
        <Heading3>블루스트림 (2020.09 - 2021.01)</Heading3>

        <div className="mt-6">
          <h4 className="text-xl font-bold">공공기관 LMS 구축 프로젝트</h4>

          <Period>2020. 10. ~ 2020. 11.</Period>
          <p className="text-gray-600 text-sm italic mt-2">
            웹 표준을 준수하며 다양한 브라우저와 장치에서 접근 가능한 LMS 구축
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">담당 업무:</p>
            <BulletList
              items={[
                "재사용 가능한 핵심 UI 컴포넌트를 Vanilla JavaScript로 설계 및 구현",
                "시맨틱 HTML 마크업과 접근성 가이드라인 준수로 웹 접근성 확보",
                "IE11 포함 크로스 브라우징 이슈 해결 및 반응형 디자인 적용",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <p className="font-semibold text-gray-800 mt-4">사용 기술:</p>
            <p className="text-gray-700 text-sm mt-1">
              JavaScript, HTML5, CSS3, ARIA, 웹 접근성
            </p>

            <p className="font-semibold text-gray-800 mt-4">성과:</p>
            <BulletList
              items={[
                "장애인 사용자 접근성 개선으로 공공기관 시스템 요구사항 충족",
                "다양한 브라우저 호환성 확보로 사용자 환경 제약 해소",
              ]}
              className="text-gray-700 text-sm mt-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeWithCareer2;
