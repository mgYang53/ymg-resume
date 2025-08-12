interface Heading4Props {
  children: React.ReactNode;
  className?: string;
}

export default function Heading4({ children, className = "" }: Heading4Props) {
  return <h4 className={`text-lg font-semibold ${className}`}>{children}</h4>;
}
