import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import { FaBarsStaggered, FaCircleUser, FaXmark } from "react-icons/fa6";
import "../styles/navbar.css";
import { AuthContext } from "../context/AuthProvider";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const {user} = useContext(AuthContext);
  console.log(user);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // navitems
  const navitems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <header className={`${isSticky ? "sticky top-0 left-0 right-0 bg-white text-white" : ""}`}>
      <nav className="font-wittgenstein h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 bg-[#353593] text-white shadow-md">
        <div className="flex items-center">
          <Link to="/">
            <GiSpellBook className="text-6xl text-white inline-block" />
          </Link>
          <h4 className="text-white text-2xl font-bold mt-2 border-4 border-white border-l-[#353593] p-1 ml-2">
            EpicReads
          </h4>
        </div>

        {/* Standard menu for medium and larger devices */}
        <ul className="hidden md:flex space-x-12 ml-auto">
          {navitems.map((item) => (
            <li key={item.link}>
              <Link to={item.path} className="text-white uppercase transition-all duration-300 hover:font-bold">
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-2 items-center">
          <FaCircleUser className="ml-8 text-4xl"/>
          <div>
            {
              user?user.email:""
            }
          </div>
        </div>
        {/* Menu button for mobile devices */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5 text-white" />
            ) : (
              <FaBarsStaggered className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu items */}
        <div
          className={`${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } md:hidden space-y-4 px-4 mt-24 py-7 bg-[#353593]`}
        >
          {navitems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>

  );
}

export default Navbar;