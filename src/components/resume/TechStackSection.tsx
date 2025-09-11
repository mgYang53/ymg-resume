import { Heading4, Text } from "../common";

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
    <div className={`flex gap-2 ${className}`}>
      <Heading4>{category}:</Heading4>
      <Text className="mt-0.5">{techText}</Text>
    </div>
  );
}
