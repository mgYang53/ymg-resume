interface PageBreakIndicatorProps {
  pageNumber: number;
}

export default function PageBreakIndicator({
  pageNumber,
}: PageBreakIndicatorProps) {
  // CSS mm 단위를 직접 사용하여 브라우저가 정확히 계산하도록 함
  const topOffsetMm = pageNumber * 297 - 10;

  return (
    <div
      className="absolute left-0 w-full h-0 border-t-2 border-dashed border-red-400 opacity-60 print:hidden"
      style={{ top: `${topOffsetMm}mm` }}
    >
      <span className="absolute right-4 -top-4 bg-red-400 text-white px-2 py-1 text-xs rounded">
        Page {pageNumber + 1}
      </span>
    </div>
  );
}
