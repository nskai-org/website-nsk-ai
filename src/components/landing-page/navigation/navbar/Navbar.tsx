import { Navigation } from "../navigationItems";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { navbar } = Navigation[0];
  return (
    <div className="flex items-center gap-12 justify-center p-10 cursor-pointer">
      {navbar.slice(0, 2).map((item, idx) => (
        <p key={idx}>{item.text}</p>
      ))}
      <Link to="/">
        <img className="mx-14" src="./logo.svg" alt="nsk.ai_logo" />
      </Link>
      {navbar.slice(2, 4).map((item, idx) => (
        <p key={idx}>{item.text}</p>
      ))}
    </div>
  );
};

export default Navbar;
