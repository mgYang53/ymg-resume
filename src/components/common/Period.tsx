interface PeriodProps {
  children: React.ReactNode;
}

export default function Period({ children }: PeriodProps) {
  return <p className="text-gray-500 text-sm">{children}</p>;
}
