interface Heading3Props {
  children: React.ReactNode;
  className?: string;
}

export default function Heading3({ children, className = "" }: Heading3Props) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}
