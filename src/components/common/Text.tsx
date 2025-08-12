interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'subtitle' | 'caption' | 'label';
  className?: string;
}

export default function Text({ children, variant = 'body', className = "" }: TextProps) {
  const baseClasses = {
    body: 'text-gray-700',
    subtitle: 'font-bold text-gray-800 text-lg mt-2 mb-1',
    caption: 'text-gray-500 text-sm leading-7 mb-4', 
    label: 'font-semibold text-gray-800'
  };
  
  return <p className={`${baseClasses[variant]} ${className}`}>{children}</p>;
}