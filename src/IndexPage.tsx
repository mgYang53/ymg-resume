import { PageHeader, ResumeSection } from "./components";
import { LINK_ITEMS } from "./routes";

export default function IndexPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-8 space-y-12">
      <PageHeader
        title="양명규 이력서 모음"
        subtitle="다양한 포지션과 상황에 맞춘 여러 버전의 이력서를 확인해보세요."
      />

      <ResumeSection title="개인 맞춤형 이력서" items={LINK_ITEMS.personal} />

      <ResumeSection
        title="이력서 + 경력기술서"
        items={LINK_ITEMS.detailed}
        variant="highlighted"
      />

      <ResumeSection
        title="포트폴리오 & 기본 이력서"
        items={LINK_ITEMS.portfolio}
      />

      <ResumeSection title="경력별 맞춤 이력서" items={LINK_ITEMS.career} />
    </div>
  );
}
