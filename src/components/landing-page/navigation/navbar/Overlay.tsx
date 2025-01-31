import { useAppState } from "../../../../context/AppContext";
import useNavbar from "../../../../hooks/useNavbar";

const Overlay = () => {
  const { isNavOpen } = useAppState();
  const handleNavbar = useNavbar();
  return (
    <>
      {isNavOpen && (
        <p
          className="fixed top-0 left-0  bottom-0 bg-black opacity-70 w-full z-20 md:hidden"
          onClick={() => handleNavbar("HIDE_NAV")}
        ></p>
      )}
    </>
  );
};

export default Overlay;
