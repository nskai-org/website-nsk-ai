import { createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "../components/landing-page";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
  },
]);
