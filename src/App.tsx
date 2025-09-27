import { RouterProvider } from "react-router-dom";
import Loader, { LoaderFunc } from "./utils/Loader";
import { router } from "./routes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "./components/BackToTop"; // added import

function App() {
  const { loader } = LoaderFunc();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="mx-auto max-w-[1024px] max-[1024px]:px-10 max-[768px]:px-4 px-4">
          <RouterProvider router={router} />
          <BackToTop /> {/* rendered on all pages */}
        </div>
      )}
    </>
  );
}

export default App;
