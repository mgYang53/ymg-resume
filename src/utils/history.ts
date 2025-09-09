// History 폴더의 컴포넌트들에서 메타데이터 추출
export const getHistoryItems = async (): Promise<
  Array<{
    path: string;
    title: string;
    description: string;
  }>
> => {
  try {
    // 동적 import 사용 (브라우저 환경에서 작동)
    const historyModule = await import("../history");
    const items: Array<{ path: string; title: string; description: string }> =
      [];

    // export된 모든 컴포넌트 확인
    Object.values(historyModule).forEach((component: any) => {
      // 컴포넌트에 메타데이터가 있는지 확인
      if (
        typeof component === "function" &&
        component.title &&
        component.description &&
        component.path
      ) {
        items.push({
          path: component.path,
          title: component.title,
          description: component.description,
        });
      }
    });

    return items;
  } catch (error) {
    // history 폴더가 없는 경우
    console.log("History module not available:", error);
    return [];
  }
};
