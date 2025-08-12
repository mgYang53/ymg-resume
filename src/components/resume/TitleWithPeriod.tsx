import { Heading3 } from "../common";

interface TitleWithPeriod {
  title: string;
  period?: string;
}

export default function TitleWithPeriod({ title, period }: TitleWithPeriod) {
  return (
    <div>
      <Heading3>{title}</Heading3>
      {period && <p className="text-gray-600 text-sm italic">{period}</p>}
    </div>
  );
}
