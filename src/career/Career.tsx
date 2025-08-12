import { Period, BulletList, Heading1, Heading2, Heading3, Heading4, Text } from "../components";

const Career = () => {
  return (
    <div className="max-w-[210mm] min-h-[297mm] mx-auto my-8 px-[20mm] py-[25mm] bg-white shadow-lg leading-relaxed print:max-w-none print:m-0 print:shadow-none print:page-break-inside-avoid">
      <Heading1>양명규</Heading1>

      <Heading2 variant="section">경력 기술서</Heading2>

      <section>
        <Heading3>주식회사위븐 (2022.09 - 2024.03)</Heading3>

        <div className="mt-6">
          <Heading4>웹사이트 에디터 개발 프로젝트</Heading4>

          <Period>2022. 09. ~ 2024. 03.</Period>
          <Text variant="caption" className="mt-2">
            사용성이 떨어지는 레거시 PPT 스타일 에디터를 현대적인 인터페이스로
            개선
          </Text>

          <div className="mt-4">
            <Text variant="label">담당 업무:</Text>
            <BulletList
              items={[
                "JavaScript와 모듈 패턴을 활용하여 Figma 스타일의 직관적인 WYSIWYG 에디터 설계",
                "이벤트 위임 및 DOM 최적화로 대규모 에디터 성능 개선",
                "커스텀 드래그 앤 드롭 구현으로 편집 경험 향상",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <Text variant="label" className="mt-4">사용 기술:</Text>
            <Text className="mt-1">
              Vanilla JavaScript, HTML5, CSS3, DOM API, 모듈 패턴
            </Text>

            <Text variant="label" className="mt-4">성과:</Text>
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
          <Heading4>쇼핑몰 AI 제작 서비스 개발 프로젝트</Heading4>

          <Period>2023. 06. ~ 2024. 03.</Period>
          <Text variant="caption" className="mt-2">
            사용자 벤치마킹 사이트 분석 기반 맞춤형 쇼핑몰 자동 생성 시스템 구축
          </Text>

          <div className="mt-4">
            <Text variant="label">담당 업무:</Text>
            <BulletList
              items={[
                "추출된 디자인 요소를 AI 분석 엔진에 전달하고 결과를 시각화하는 프론트엔드 인터페이스 구현",
                "사용자 선호도와 벤치마킹 사이트 간의 상관관계를 분석하여 맞춤 추천을 제공하는 로직 개발 지원",
                "iframe 기반 실시간 쇼핑몰 미리보기 시스템 구현으로 사용자 경험 향상",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <Text variant="label" className="mt-4">사용 기술:</Text>
            <Text className="mt-1">
              JavaScript, HTML5, CSS3, iframe API, Chart.js
            </Text>

            <Text variant="label" className="mt-4">성과:</Text>
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
        <Heading3>
          주식회사더스토리뱅크 (2021.02 - 2022.07)
        </Heading3>

        <div className="mt-6">
          <Heading4>
            WIZWARE 그룹웨어 플러그인 개발 프로젝트
          </Heading4>

          <Period>2022. 03. ~ 2022. 07.</Period>
          <Text variant="caption" className="mt-2">
            확장 가능한 모듈식 그룹웨어 시스템 설계 및 구현
          </Text>

          <div className="mt-4">
            <Text variant="label">담당 업무:</Text>
            <BulletList
              items={[
                "서비스 내 그룹웨어 기능을 플러그인 형태로 설계 및 개발하여 시스템 유연성 확보",
                "조직도, 인사정보, 근태관리 등 핵심 그룹웨어 기능 개발",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <Text variant="label" className="mt-4">사용 기술:</Text>
            <Text className="mt-1">
              JavaScript, HTML5, CSS3, 모듈 패턴, MVC 아키텍처
            </Text>

            <Text variant="label" className="mt-4">성과:</Text>
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
            <Text variant="label">담당 업무:</Text>
            <BulletList
              items={[
                "JavaScript 템플릿 엔진 유지보수 및 버전 관리 기능 구현",
                "이미지 지연 로딩, 브라우저 캐싱 전략 적용으로 렌더링 최적화",
                "모듈형 게시판 템플릿 시스템으로 다양한 형태와 사용자 정의 필드 지원",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <Text variant="label" className="mt-4">사용 기술:</Text>
            <p className="text-gray-700 text-sm mt-1">
              JavaScript, HTML5, CSS3, 템플릿 엔진, 브라우저 캐싱 API
            </p>

            <Text variant="label" className="mt-4">성과:</Text>
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
            <Text variant="label">담당 업무:</Text>
            <BulletList
              items={[
                "SVG와 GSAP 라이브러리를 활용한 고성능 인터랙티브 애니메이션 구현",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <Text variant="label" className="mt-4">사용 기술:</Text>
            <p className="text-gray-700 text-sm mt-1">
              JavaScript, HTML5, CSS3, SVG, GSAP
            </p>

            <Text variant="label" className="mt-4">성과:</Text>
            <BulletList
              items={["성공적인 행사 운영으로 클라이언트 만족도 달성"]}
              className="text-gray-700 text-sm mt-2"
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="">블루스트림 (2020.09 - 2021.01)</h3>

        <div className="mt-6">
          <h4 className="text-xl font-bold">공공기관 LMS 구축 프로젝트</h4>

          <Period>2020. 10. ~ 2020. 11.</Period>
          <p className="text-gray-600 text-sm italic mt-2">
            웹 표준을 준수하며 다양한 브라우저와 장치에서 접근 가능한 LMS 구축
          </p>

          <div className="mt-4">
            <Text variant="label">담당 업무:</Text>
            <BulletList
              items={[
                "재사용 가능한 핵심 UI 컴포넌트를 Vanilla JavaScript로 설계 및 구현",
                "시맨틱 HTML 마크업과 접근성 가이드라인 준수로 웹 접근성 확보",
                "IE11 포함 크로스 브라우징 이슈 해결 및 반응형 디자인 적용",
              ]}
              className="text-gray-700 text-sm mt-2"
            />

            <Text variant="label" className="mt-4">사용 기술:</Text>
            <p className="text-gray-700 text-sm mt-1">
              JavaScript, HTML5, CSS3, ARIA, 웹 접근성
            </p>

            <Text variant="label" className="mt-4">성과:</Text>
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

export default Career;
