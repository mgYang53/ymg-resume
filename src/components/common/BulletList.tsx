interface BulletListProps {
  items: string[];
  className?: string;
}

export default function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <ul className={`${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className="my-1 ml-2 relative before:content-[''] before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-gray-600 before:absolute before:top-2.5"
        >
          <p className="pl-3">{item}</p>
        </li>
      ))}
    </ul>
  );
}
