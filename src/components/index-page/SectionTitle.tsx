interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 relative">
      {title}
    </h2>
  );
}