import { Heading4, LabelText } from "../common";

interface MinifiedStarSectionProps {
  title: string;
  situationAndTask: string | string[];
  actionAndResult: string | string[];
}

export default function MinifiedStarSection({
  title,
  situationAndTask,
  actionAndResult,
}: MinifiedStarSectionProps) {
  return (
    <div>
      <Heading4>{title}</Heading4>

      <div className="space-y-2 mt-2">
        <LabelText label="과제">{situationAndTask}</LabelText>

        <LabelText label="결과">{actionAndResult}</LabelText>
      </div>
    </div>
  );
}
