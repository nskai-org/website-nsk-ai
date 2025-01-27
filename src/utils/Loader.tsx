import { useEffect, useState } from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src="./logo.svg" className="animate-bounce w-[20%]" alt="NSK.AI_LOGO" />
    </div>
  );
};

export default Loader;

export const LoaderFunc=()=>{
    const [loader,setLoader] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=> setLoader(false), 2000);
        return ()=> clearTimeout(timer);
    },[]);
    return {loader,setLoader};
}