interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export default function Spacer({ size = 'md' }: SpacerProps) {
  const sizeClasses = {
    xs: 'h-2',
    sm: 'h-4', 
    md: 'h-6',
    lg: 'h-8',
    xl: 'h-12',
    '2xl': 'h-16'
  };
  
  return <div className={sizeClasses[size]} />;
}