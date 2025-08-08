import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

// 컴포넌트 파일들 import
import IndexPage from "./IndexPage";
import ResumeExample from "./resume_example.mdx";
import SuperrookieExample from "./superrookie_example.mdx";
import { Career, ResumeWithCareer, ResumeWithCareer2 } from "./career";
import { Portfolio } from "./portfolio";
import {
  ResumeStar,
  ResumeYmg1,
  ResumeYmg2,
  ResumeYmgFormatted,
} from "./resume";

const router = createBrowserRouter([
  { path: "/", element: <IndexPage /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/resume", element: <ResumeExample /> },
  { path: "/newbie", element: <ResumeExample /> },
  { path: "/superrookie", element: <SuperrookieExample /> },
  { path: "/resume-ymg-1", element: <ResumeYmg1 /> },
  { path: "/resume-ymg-2", element: <ResumeYmg2 /> },
  { path: "/resume-ymg-formatted", element: <ResumeYmgFormatted /> },
  { path: "/career", element: <Career /> },
  { path: "/resume-career", element: <ResumeWithCareer /> },
  { path: "/resume-career2", element: <ResumeWithCareer2 /> },
  { path: "/resume-star", element: <ResumeStar /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
