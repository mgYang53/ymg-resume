import { createBrowserRouter } from "react-router-dom";

// 컴포넌트 파일들 import
import IndexPage from "./IndexPage";
import ResumeExample from "./resume_example.mdx";
import SuperrookieExample from "./superrookie_example.mdx";
import { Career, ResumeWithCareer, ResumeWithCareer2 } from "./career";
import { Portfolio } from "./portfolio";
import { ResumeStar, ResumeClassic } from "./resume";

// 경로 상수
const PATHS = {
  HOME: "/",
  PORTFOLIO: "/portfolio",
  RESUME: "/resume",
  NEWBIE: "/newbie",
  SUPERROOKIE: "/superrookie",
  RESUME_STAR: "/resume-star",
  RESUME_CLASSIC: "/resume-classic",
  CAREER: "/career",
  RESUME_CAREER: "/resume-career",
  RESUME_CAREER2: "/resume-career2",
} as const;

export const routeConfig = {
  portfolio: [
    {
      href: PATHS.PORTFOLIO,
      title: "포트폴리오",
      description: "메인 포트폴리오 이력서",
    },
  ],
  career: [
    {
      href: PATHS.NEWBIE,
      title: "신입 개발자용",
      description: "신입 개발자 포지션 지원용",
    },
    {
      href: PATHS.SUPERROOKIE,
      title: "슈퍼루키용",
      description: "경력 1-2년 개발자용",
    },
  ],
  personal: [
    {
      href: PATHS.RESUME_STAR,
      title: "이력서 STAR 적용 버전",
      description: "기술적 도전과 성과 중심 버전",
    },
    {
      href: PATHS.RESUME_CLASSIC,
      title: "이력서 250821 버전",
      description: "모든 내용 포함한 이력서 예시",
    },
  ],
  detailed: [
    {
      href: PATHS.CAREER,
      title: "경력기술서",
      description: "경력기술서만 따로",
    },
    {
      href: PATHS.RESUME_CAREER,
      title: "이력서 + 경력기술서",
      description: "기본 이력서 + 경력기술서",
    },
    {
      href: PATHS.RESUME_CAREER2,
      title: "이력서 + 경력기술서2",
      description: "기본 이력서 + 경력기술서2",
    },
  ],
};

const routeComponentMap = {
  [PATHS.PORTFOLIO]: <Portfolio />,
  [PATHS.NEWBIE]: <ResumeExample />,
  [PATHS.SUPERROOKIE]: <SuperrookieExample />,
  [PATHS.RESUME_STAR]: <ResumeStar />,
  [PATHS.RESUME_CLASSIC]: <ResumeClassic />,
  [PATHS.CAREER]: <Career />,
  [PATHS.RESUME_CAREER]: <ResumeWithCareer />,
  [PATHS.RESUME_CAREER2]: <ResumeWithCareer2 />,
};

const getAllPaths = () =>
  Object.values(routeConfig)
    .flat()
    .map((item) => item.href);

export const router = createBrowserRouter([
  { path: PATHS.HOME, element: <IndexPage /> },
  { path: PATHS.RESUME, element: <ResumeExample /> },
  ...getAllPaths().map((path) => ({
    path,
    element: routeComponentMap[path as keyof typeof routeComponentMap],
  })),
]);
