import React from "react";
import { createBrowserRouter } from "react-router-dom";

// 컴포넌트 파일들 import
import IndexPage from "./IndexPage";
import ResumeExample from "./resume_example.mdx";
import SuperrookieExample from "./superrookie_example.mdx";
import { Career, ResumeWithCareer, ResumeWithCareer2 } from "./career";
import { Portfolio } from "./portfolio";
import { ResumeStar, ResumeClassic } from "./resume";

type Category = "portfolio" | "career" | "personal" | "detailed";
interface MetaData {
  title?: string;
  description?: string;
  category?: Category;
}

export interface RouteDefinition extends MetaData {
  path: string;
  component: React.ReactElement;
}

export type LinkItem = Omit<RouteDefinition, "category" | "component">;

const ROUTE_DEFINITIONS: Record<string, RouteDefinition> = {
  HOME: { path: "/", component: <IndexPage /> },
  RESUME_INDEX: { path: "/resume", component: <ResumeExample /> },
  PORTFOLIO: {
    path: "/portfolio",
    component: <Portfolio />,
    title: "포트폴리오",
    description: "메인 포트폴리오 이력서",
    category: "portfolio",
  },
  NEWBIE: {
    path: "/newbie",
    component: <ResumeExample />,
    title: "신입 개발자용",
    description: "신입 개발자 포지션 지원용",
    category: "career",
  },
  SUPERROOKIE: {
    path: "/superrookie",
    component: <SuperrookieExample />,
    title: "슈퍼루키용",
    description: "경력 1-2년 개발자용",
    category: "career",
  },
  RESUME_STAR: {
    path: "/resume-star",
    component: <ResumeStar />,
    title: "이력서 STAR 적용 버전",
    description: "기술적 도전과 성과 중심 버전",
    category: "personal",
  },
  RESUME_CLASSIC: {
    path: "/resume-classic",
    component: <ResumeClassic />,
    title: "이력서 250821 버전",
    description: "모든 내용 포함한 이력서 예시",
    category: "personal",
  },
  CAREER: {
    path: "/career",
    component: <Career />,
    title: "경력기술서",
    description: "경력기술서만 따로",
    category: "detailed",
  },
  RESUME_CAREER: {
    path: "/resume-career",
    component: <ResumeWithCareer />,
    title: "이력서 + 경력기술서",
    description: "기본 이력서 + 경력기술서",
    category: "detailed",
  },
  RESUME_CAREER2: {
    path: "/resume-career2",
    component: <ResumeWithCareer2 />,
    title: "이력서 + 경력기술서2",
    description: "기본 이력서 + 경력기술서2",
    category: "detailed",
  },
} as const;

// 카테고리별로 라우트를 그룹화하는 함수
const getLinkItemByCategory = (category: Category): LinkItem[] =>
  Object.values(ROUTE_DEFINITIONS)
    .filter(
      (route) => route.category === category && route.title && route.description
    )
    .map((route) => ({
      path: route.path,
      title: route.title!,
      description: route.description!,
    }));

export const LINK_ITEMS: Record<Category, LinkItem[]> = {
  portfolio: getLinkItemByCategory("portfolio"),
  career: getLinkItemByCategory("career"),
  personal: getLinkItemByCategory("personal"),
  detailed: getLinkItemByCategory("detailed"),
} as const;

export const router = createBrowserRouter(
  Object.values(ROUTE_DEFINITIONS).map(({ path, component }) => ({
    path,
    element: component,
  }))
);
