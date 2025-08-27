import { formatPeriod } from "@utils";

interface PeriodProps {
  children?: React.ReactNode;
  startDate?: string;
  endDate?: string;
  showDuration?: boolean;
  className?: string;
}

export default function Period({
  children,
  startDate,
  endDate,
  showDuration = false,
  className = "",
}: PeriodProps) {
  let content: string;

  if (children) {
    content = children.toString();
  } else if (startDate) {
    content = formatPeriod(startDate, endDate, showDuration);
  } else {
    content = "";
  }

  return (
    <p className={`text-gray-500 text-sm ${className}`.trim()}>{content}</p>
  );
}
