interface AchievementBoxProps {
  children: React.ReactNode;
  type?: 'default' | 'highlight';
}

export default function AchievementBox({ children, type = 'default' }: AchievementBoxProps) {
  if (type === 'highlight') {
    return (
      <div className="border border-gray-400 rounded-lg p-4 relative">
        {children}
      </div>
    );
  }
  
  return (
    <div className="pl-10">
      {children}
    </div>
  );
}