interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

export default function Heading1({ children, className = "" }: Heading1Props) {
  return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
}