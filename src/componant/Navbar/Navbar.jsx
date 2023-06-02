import { useState } from "react"
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/techmaniaLogo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full bg-[#0b358a] text-white py-2 px-8 md:px-14  lg:px-20">
      <nav className="flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-20 h-10" />
        </div>
        <div className={mobileMenuOpen ? "block" : "hidden lg:block"}>
          <ul className="absolute top-[50px] left-0 w-full lg:static lg:flex justify-between items-center bg-[#0b358a] text-white">
            <li className="px-5 py-2 me-2">
              <a href="">Home</a>
            </li>
            <li className="px-5 py-2 me-2">
              <a href="">About</a>
            </li>
            <li className="px-5 py-2 me-2">
              <a href="">Notice</a>
            </li>
            <li className="px-5 py-2 me-2">
              <a href="">Teachers Panale</a>
            </li>
            <li className="px-5 py-2 me-2">
              <a href="">Admit</a>
            </li>
          </ul>
        </div>
        <div className="text-2xl lg:hidden">
          {mobileMenuOpen ? (
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <AiOutlineClose></AiOutlineClose>
          </div>
          ) : (
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <HiMenuAlt2></HiMenuAlt2>
          </div>

          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
