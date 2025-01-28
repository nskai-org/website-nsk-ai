import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing-page/LandingPage";
import NavigationLayout from "../components/landing-page/navigation";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }
    ]
  },
]);
