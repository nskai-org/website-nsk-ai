import "./App.css";
import { RouterProvider } from "react-router-dom";
import Loader,{LoaderFunc} from "./utils/Loader";
import { router } from "./routes";

function App() {
  const {loader} = LoaderFunc();

  return (
    <>
    {loader? (
      <Loader />
    ): (
      <div className="mx-auto max-w-[1024px] max-[1024px]:px-10">
        <RouterProvider router={router}/>
      </div>
    )}
    </>
  )
}

export default App;
