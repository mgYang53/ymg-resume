import { PageHeader, ResumeSection } from "./components";

export default function IndexPage() {
  const portfolioItems = [
    {
      href: "/portfolio",
      title: "포트폴리오",
      description: "메인 포트폴리오 이력서",
    },
  ];

  const careerItems = [
    {
      href: "/newbie",
      title: "신입 개발자용",
      description: "신입 개발자 포지션 지원용",
    },
    {
      href: "/superrookie",
      title: "슈퍼루키용",
      description: "경력 1-2년 개발자용",
    },
  ];

  const personalItems = [
    {
      href: "/resume-star",
      title: "이력서 STAR 적용 버전",
      description: "기술적 도전과 성과 중심 버전",
    },
    {
      href: "/resume-ymg-1",
      title: "YMG 버전 1",
      description: "첫 번째 개인 맞춤 버전",
    },
    {
      href: "/resume-ymg-2",
      title: "YMG 버전 2",
      description: "두 번째 개인 맞춤 버전",
    },
    {
      href: "/resume-ymg-formatted",
      title: "YMG 포맷버전",
      description: "포맷팅 강화 버전",
    },
  ];

  const detailedItems = [
    {
      href: "/career",
      title: "경력기술서",
      description: "경력기술서만 따로",
    },
    {
      href: "/resume-career",
      title: "이력서 + 경력기술서",
      description: "기본 이력서 + 경력기술서",
    },
    {
      href: "/resume-career2",
      title: "이력서 + 경력기술서2",
      description: "기본 이력서 + 경력기술서2",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-8 space-y-12">
      <PageHeader
        title="양명규 이력서 모음"
        subtitle="다양한 포지션과 상황에 맞춘 여러 버전의 이력서를 확인해보세요."
      />

      <ResumeSection title="포트폴리오 & 기본 이력서" items={portfolioItems} />

      <ResumeSection title="경력별 맞춤 이력서" items={careerItems} />

      <ResumeSection title="개인 맞춤형 이력서" items={personalItems} />

      <ResumeSection
        title="이력서 + 경력기술서"
        items={detailedItems}
        variant="highlighted"
      />
    </div>
  );
}
