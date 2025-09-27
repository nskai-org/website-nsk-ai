import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing-page/LandingPage";
import NavigationLayout from "../components/landing-page/navigation";
import ProjectsPage from "../components/projects-page/ProjectsPage";
import BootcampPage from "../pages/bootcamp-page/BootcampPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "bootcamp",
        element: <BootcampPage />,
      },
    ],
  },
]);
