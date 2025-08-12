import SectionTitle from "./SectionTitle";
import ResumeLink from "./ResumeLink";

interface ResumeItem {
  href: string;
  title: string;
  description: string;
}

interface ResumeSectionProps {
  title: string;
  items: ResumeItem[];
  variant?: "default" | "highlighted";
}

export default function ResumeSection({
  title,
  items,
  variant = "default",
}: ResumeSectionProps) {
  const containerClasses =
    variant === "highlighted"
      ? "bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500 space-y-3"
      : "space-y-3 ml-4";

  return (
    <section className="space-y-6">
      <SectionTitle title={title} />
      <div className={containerClasses}>
        {items.map((item, index) => (
          <ResumeLink
            key={index}
            href={item.href}
            title={item.title}
            description={item.description}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
}
