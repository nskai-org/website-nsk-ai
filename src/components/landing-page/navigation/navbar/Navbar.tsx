import { Hamburger } from "../../../../assets/svg";
import { Navigation } from "../navigationItems";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "./ResponsiveNavbar";
import useNavbar from "../../../../hooks/useNavbar";
const Navbar = () => {
  const { navbar } = Navigation[0];
  const handleNavbar = useNavbar();
  return (
    <>
      <ResponsiveNavbar />
      <div className="flex items-center gap-12 justify-between md:justify-center py-10 lg:px-10 cursor-pointer">
        {navbar.slice(0, 2).map((item, idx) => (
          <p key={idx} className="hover:text-[#FE0000] md:block hidden">
            {item.text}
          </p>
        ))}
        <Link to="/">
          <img className="md:mx-14" src="./logo.svg" alt="nsk.ai_logo" />
        </Link>
        {navbar.slice(2, 4).map((item, idx) => (
          <p key={idx} className="hover:text-[#FE0000] md:block hidden">
            {item.text}
          </p>
        ))}
        <Hamburger
          className="md:hidden text-3xl text-[#FE0000]"
          onClick={() => handleNavbar("SHOW_NAV")}
        />
      </div>
    </>
  );
};

export default Navbar;
