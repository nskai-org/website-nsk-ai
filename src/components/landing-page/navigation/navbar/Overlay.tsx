import { useAppState } from "../../../../context/AppContext";
import useNavbar from "../../../../hooks/useNavbar";
import {createPortal} from "react-dom";

const Overlay = () => {
  const { isNavOpen } = useAppState();
  const handleNavbar = useNavbar();

  const portalRoot = document.getElementById("portal-root");
  if(!portalRoot) return null;
  return createPortal(
    isNavOpen && (
      <p
        className="fixed top-0 left-0  bottom-0 bg-black opacity-70 w-full z-20 md:hidden"
        onClick={() => handleNavbar("HIDE_NAV")}
      ></p>
    ),
    portalRoot
  );
};

export default Overlay;
