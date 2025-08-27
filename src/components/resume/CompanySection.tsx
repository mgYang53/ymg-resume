import { Heading3, JobTitle, Period, Spacer } from "../common";

interface CompanySectionProps {
  company: string;
  position: string;
  period?: string;
  startDate?: string;
  endDate?: string;
  showDuration?: boolean;
  children?: React.ReactNode;
}

export default function CompanySection({
  company,
  position,
  period,
  startDate,
  endDate,
  showDuration = false,
  children,
}: CompanySectionProps) {
  return (
    <article>
      <Heading3>{company}</Heading3>
      <div className="flex items-baseline gap-2">
        <JobTitle>{position},</JobTitle>
        <Period
          startDate={startDate}
          endDate={endDate}
          showDuration={showDuration}
        >
          {period}
        </Period>
      </div>
      <Spacer />
      {children}
    </article>
  );
}
