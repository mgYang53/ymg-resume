/**
 * Formats a date string to the standard "YYYY. MM." format
 */
export function formatDate(date: string): string {
  // Handle different date formats and normalize to "YYYY. MM." format
  const cleanDate = date.replace(/[\s\-\/]/g, "");

  if (cleanDate.length === 6) {
    // YYYYMM
    const year = cleanDate.slice(0, 4);
    const month = cleanDate.slice(4, 6);
    return `${year}. ${month}.`;
  }

  if (cleanDate.length === 4) {
    // YYYY
    return `${cleanDate}.`;
  }

  // If already formatted properly, return as is
  if (date.includes(".")) {
    return date;
  }

  return date;
}

/**
 * Calculates the duration between two dates and returns a formatted string
 */
export function calculateDuration(start: string, end: string): string {
  try {
    const startDate = new Date(start.replace(/\./g, "-").replace(/\s/g, ""));
    const endDate = new Date(end.replace(/\./g, "-").replace(/\s/g, ""));

    const diffMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) +
      1;

    if (diffMonths < 1) return "";

    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;

    let duration = "";
    if (years > 0) duration += `${years}년 `;
    if (months > 0) duration += `${months}개월`;

    return duration ? ` (${duration.trim()})` : "";
  } catch {
    return "";
  }
}

/**
 * Formats a period string with start date, end date, and optional duration
 */
export function formatPeriod(
  startDate: string,
  endDate?: string,
  showDuration: boolean = false
): string {
  const formattedStart = formatDate(startDate);

  if (!endDate) {
    return formattedStart;
  }

  const formattedEnd = formatDate(endDate);
  let result = `${formattedStart} ~ ${formattedEnd}`;

  if (showDuration) {
    result += calculateDuration(startDate, endDate);
  }

  return result;
}
