import { Text, LabelText, BulletList } from "../common";
import TitleWithPeriod from "./TitleWithPeriod";

interface SimpleProjectSectionProps {
  title: string;
  period?: string;
  startDate?: string;
  endDate?: string;
  showDuration?: boolean;
  techStack?: string;
  challenge?: string;
  solution?: string;
  description?: string | string[];
}

export default function SimpleProjectSection({
  title,
  period,
  startDate,
  endDate,
  showDuration = false,
  techStack,
  challenge,
  solution,
  description,
}: SimpleProjectSectionProps) {
  return (
    <div className="space-y-2">
      <TitleWithPeriod 
        title={title} 
        period={period}
        startDate={startDate}
        endDate={endDate}
        showDuration={showDuration}
      />

      {techStack && (
        <Text className="text-gray-700">기술 스택: {techStack}</Text>
      )}

      {challenge && <LabelText label="기술적 도전">{challenge}</LabelText>}

      {solution && <LabelText label="해결 방안">{solution}</LabelText>}

      {description && (
        Array.isArray(description) ? (
          <BulletList
            items={description}
            className="text-gray-700 text-base mt-2"
          />
        ) : (
          <Text className="text-gray-700">{description}</Text>
        )
      )}
    </div>
  );
}
