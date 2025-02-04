import { NavLink } from "react-router-dom";
import { Navigation } from "../navigation/navigationItems";

const Footer = () => {
  const { footer } = Navigation[0];
  return (
    <div className="py-16">
      <div className="flex items-center justify-between text-[#737373] md:py-4 max-[938px]:flex-col max-[938px]:items-start max-[938px]:gap-6">
        <img src="./logo.svg" alt="logo" />
        <div className="flex items-center sm:gap-6 gap-3 flex-col sm:flex-row">
          {footer.map((item, idx) => (
            <NavLink to={item.link}>
              <p className="hover:text-[#FE0000]" key={idx}>{item.text}</p>
            </NavLink>
          ))}
        </div>
        <p>© 2020 Designership. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
