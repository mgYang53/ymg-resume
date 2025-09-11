import { ReactNode } from "react";
import PageBreakIndicator from "./PageBreakIndicator";

interface ResumeContainerProps {
  children: ReactNode;
  showPageBreaks?: boolean;
  maxPages?: number;
}

export default function ResumeContainer({
  children,
  showPageBreaks = true,
  maxPages = 5,
}: ResumeContainerProps) {
  return (
    <div className="my-8 print:my-0">
      <div
        className="max-w-[210mm] min-h-[297mm] px-[20mm] py-[25mm] bg-white shadow-lg leading-relaxed relative mx-auto
      print:max-w-none print:min-h-0 print:m-0 print:p-0 print:shadow-none"
      >
        {children}

        {/* 페이지 구분선들 - 고정된 개수로 안정적으로 표시 */}
        {showPageBreaks &&
          Array.from({ length: maxPages }, (_, index) =>
            index > 0 ? (
              <PageBreakIndicator key={index} pageNumber={index} />
            ) : null
          )}
      </div>
    </div>
  );
}
