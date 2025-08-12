import { Heading3, JobTitle, Period, Spacer } from "../common";

interface CompanySectionProps {
  company: string;
  position: string;
  period: string;
  children?: React.ReactNode;
}

export default function CompanySection({
  company,
  position,
  period,
  children,
}: CompanySectionProps) {
  return (
    <article>
      <Heading3>{company}</Heading3>
      <div className="flex items-baseline gap-2">
        <JobTitle>{position},</JobTitle>
        <Period>{period}</Period>
      </div>
      <Spacer />
      {children}
    </article>
  );
}
