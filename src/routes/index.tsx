import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing-page/LandingPage";
import NavigationLayout from "../components/landing-page/navigation";
import BootcampPage from "../pages/bootcamp-page/BootcampPage";
import ProjectsPage from "../pages/projects-page/ProjectsPage";

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
