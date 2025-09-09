import { getHistoryItems } from "@/utils";
import React, { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

interface HistoryComponentType {
  (props?: any): React.ReactElement | null;
  title?: string;
  description?: string;
  path?: string;
}

const HistoryLazyLoader = () => {
  const location = useLocation();
  const [HistoryComponent, setHistoryComponent] =
    useState<HistoryComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [isValidPath, setIsValidPath] = useState(false);

  useEffect(() => {
    const loadHistoryComponent = async () => {
      try {
        setLoading(true);

        // getHistoryItems를 사용해서 유효한 경로인지 먼저 확인
        const historyItems = await getHistoryItems();
        const isValid = historyItems.some(
          (item) => item.path === location.pathname
        );

        if (!isValid) {
          setIsValidPath(false);
          setLoading(false);
          return;
        }

        setIsValidPath(true);

        // history 모듈 동적 import
        const historyModule = await import("../../history");

        // 현재 경로와 매칭되는 컴포넌트 찾기
        const matchedComponent = Object.values(historyModule).find(
          (component: any) => {
            return (
              typeof component === "function" &&
              component.path === location.pathname
            );
          }
        ) as HistoryComponentType | undefined;
        setHistoryComponent(matchedComponent || null);
      } catch (err) {
        console.error("History component loading failed:", err);
        setIsValidPath(false);
      } finally {
        setLoading(false);
      }
    };

    loadHistoryComponent();
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">로딩 중...</div>
      </div>
    );
  }

  // 유효하지 않은 경로면 홈으로 리다이렉트
  if (!isValidPath) {
    return <Navigate to="/" replace />;
  }

  if (!HistoryComponent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">
          컴포넌트를 로드할 수 없습니다.
        </div>
      </div>
    );
  }

  // 컴포넌트 타입에 따라 다르게 처리
  try {
    // JSX 요소인 경우 직접 반환
    if (React.isValidElement(HistoryComponent)) {
      return HistoryComponent;
    }

    // 함수 컴포넌트인 경우 호출
    if (typeof HistoryComponent === "function") {
      const ComponentToRender = HistoryComponent;
      return <ComponentToRender />;
    }

    // 그 외의 경우
    console.error("Invalid component type:", typeof HistoryComponent);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">
          유효하지 않은 컴포넌트 타입입니다.
        </div>
      </div>
    );
  } catch (error) {
    console.error("Component rendering failed:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">
          컴포넌트 렌더링 중 오류가 발생했습니다: {error?.toString()}
        </div>
      </div>
    );
  }
};

export default HistoryLazyLoader;
