interface BulletListProps {
  items: string[];
  className?: string;
}

export default function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <ul className={`list-disc list-outside space-y-1 ml-6 pl-1 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-gray-800">
          {item}
        </li>
      ))}
    </ul>
  );
}
