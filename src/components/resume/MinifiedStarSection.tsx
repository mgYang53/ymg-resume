import { Heading4, Period, LabelText } from "../common";

interface MinifiedStarSectionProps {
  title: string;
  period?: string;
  startDate?: string;
  endDate?: string;
  showDuration?: boolean;
  situationAndTask: string | string[];
  actionAndResult: string | string[];
}

export default function MinifiedStarSection({
  title,
  period,
  startDate,
  endDate,
  showDuration = false,
  situationAndTask,
  actionAndResult,
}: MinifiedStarSectionProps) {
  return (
    <div className="pl-3">
      <Heading4>{title}</Heading4>
      {(period || startDate) && (
        <Period
          className="italic mt-1"
          startDate={startDate}
          endDate={endDate}
          showDuration={showDuration}
        >
          {period}
        </Period>
      )}

      <div className="space-y-2 mt-2">
        <LabelText label="과제">{situationAndTask}</LabelText>

        <LabelText label="결과">{actionAndResult}</LabelText>
      </div>
    </div>
  );
}
