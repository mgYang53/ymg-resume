import BulletList from "./BulletList";

interface LabelTextProps {
  label: string;
  children: React.ReactNode | string | string[];
}

export default function LabelText({ label, children }: LabelTextProps) {
  return (
    <div>
      <p className="font-semibold text-gray-800">{label}:</p>
      <div>
        {Array.isArray(children) ? <BulletList items={children} /> : children}
      </div>
    </div>
  );
}
