interface Heading2Props {
  children: React.ReactNode;
  className?: string;
}

export default function Heading2({ children, className = "" }: Heading2Props) {
  return (
    <h2
      className={`text-2xl font-bold pb-2 border-b border-black relative ${className}`}
    >
      {children}
    </h2>
  );
}
