import { LinkItem } from "@/routes";

interface ResumeLinkProps extends LinkItem {
  variant?: "default" | "highlighted";
}

export default function ResumeLink({
  path,
  title,
  description,
  variant = "default",
}: ResumeLinkProps) {
  const baseClasses = "p-2 rounded";
  const hoverClasses =
    variant === "highlighted" ? "hover:bg-white/50" : "hover:bg-gray-50";

  const linkClasses =
    variant === "highlighted"
      ? "text-blue-700 hover:text-blue-900 font-semibold"
      : "text-blue-600 hover:text-blue-800 font-semibold";

  const descriptionClasses =
    variant === "highlighted" ? "text-gray-700 ml-2" : "text-gray-600 ml-2";

  return (
    <div className={`${baseClasses} ${hoverClasses}`}>
      <a href={path} className={linkClasses}>
        {title}
      </a>
      <span className={descriptionClasses}>- {description}</span>
    </div>
  );
}
