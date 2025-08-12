interface JobTitleProps {
  children: React.ReactNode;
  classNames?: string;
}

export default function JobTitle({ children, classNames = "" }: JobTitleProps) {
  return <p className={`text-gray-800 text-md ${classNames}`}>{children}</p>;
}
