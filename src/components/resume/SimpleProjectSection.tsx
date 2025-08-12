import { Text, LabelText } from "../common";
import TitleWithPeriod from "./TitleWithPeriod";

interface SimpleProjectSectionProps {
  title: string;
  period: string;
  techStack?: string;
  challenge?: string;
  solution?: string;
  description?: string;
}

export default function SimpleProjectSection({
  title,
  period,
  techStack,
  challenge,
  solution,
  description,
}: SimpleProjectSectionProps) {
  return (
    <div className="space-y-2">
      <TitleWithPeriod title={title} period={period} />

      {techStack && <Text className="text-gray-700">기술 스택: {techStack}</Text>}

      {challenge && <LabelText label="기술적 도전">{challenge}</LabelText>}

      {solution && <LabelText label="해결 방안">{solution}</LabelText>}

      {description && <Text className="text-gray-700">{description}</Text>}
    </div>
  );
}
