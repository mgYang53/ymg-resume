interface StarSectionProps {
  title: string;
  situation: string;
  task: string;
  action: string[];
  result: string;
}

export default function StarSection({
  title,
  situation,
  task,
  action,
  result,
}: StarSectionProps) {
  return (
    <div>
      <h5 className="text-base font-semibold text-black">{title}</h5>

      <div className="space-y-4 mt-3">
        <div>
          <strong className="text-black">상황:</strong>
          <p className="text-gray-700 mt-1">{situation}</p>
        </div>

        <div>
          <strong className="text-black">과제:</strong>
          <p className="text-gray-700 mt-1">{task}</p>
        </div>

        <div>
          <strong className="text-black">행동:</strong>
          <ul className="text-gray-700 mt-1 list-disc list-inside space-y-1">
            {action.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <strong className="text-black">결과:</strong>
          <p className="text-gray-700 mt-1">{result}</p>
        </div>
      </div>
    </div>
  );
}
