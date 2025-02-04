import { NavLink } from "react-router-dom";
import { useAppState } from "../../../../context/AppContext";
import useNavbar from "../../../../hooks/useNavbar";

import { Navigation } from "../navigationItems";
const ResponsiveNavbar = () => {
  const { navbar } = Navigation[0];
  const { isNavOpen } = useAppState();
  const handleNavbar = useNavbar();
  return (
    <div
      className={`p-8 w-[70%] fixed bg-white h-screen left-0 z-30 transform transition-transform duration-400 ${
        isNavOpen ? "translate-x-0" : "translate-x-[-900px]"
      }`}
    >
      <NavLink to="/" onClick={()=>handleNavbar("HIDE_NAV")}>
        <img src="./logo.svg" alt="logo" className="mb-8" />
      </NavLink>
      <div className="flex items-center gap-4 flex-col">
        {navbar.map((item, idx) => (
          <p
            key={idx}
            className="hover:text-[#FE0000] cursor-pointer"
            onClick={() => handleNavbar("HIDE_NAV")}
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
