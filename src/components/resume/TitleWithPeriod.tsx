import { Heading3, Period } from "../common";

interface TitleWithPeriodProps {
  title: string;
  period?: string;
  startDate?: string;
  endDate?: string;
  showDuration?: boolean;
}

export default function TitleWithPeriod({ 
  title, 
  period, 
  startDate, 
  endDate, 
  showDuration = false 
}: TitleWithPeriodProps) {
  return (
    <div>
      <Heading3>{title}</Heading3>
      {(period || startDate) && (
        <Period 
          className="italic"
          startDate={startDate}
          endDate={endDate}
          showDuration={showDuration}
        >
          {period}
        </Period>
      )}
    </div>
  );
}
