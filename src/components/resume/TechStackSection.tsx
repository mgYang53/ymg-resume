import { Heading3, Text } from "../common";

interface TechStackSectionProps {
  category: string;
  technologies: string[] | string;
  className?: string;
}

export default function TechStackSection({
  category,
  technologies,
  className = "",
}: TechStackSectionProps) {
  const techText = Array.isArray(technologies)
    ? technologies.join(", ")
    : technologies;

  return (
    <div className={className}>
      <Heading3>{category}</Heading3>
      <Text className="mt-0.5">{techText}</Text>
    </div>
  );
}
