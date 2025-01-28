import { Navigation } from "../navigationItems";

const Navbar = () => {
  const { navbar } = Navigation[0];
  return (
    <div className="flex items-center gap-12 justify-center p-10">
      {navbar.slice(0, 2).map((item, idx) => (
        <p key={idx}>{item.text}</p>
      ))}
      <img className="mx-14" src="./logo.svg" alt="nsk.ai_logo" />
      {navbar.slice(2, 4).map((item, idx ) => (
        <p key={idx}>{item.text}</p>
      ))}
    </div>
  );
};

export default Navbar;
