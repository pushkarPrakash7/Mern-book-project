import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import { FaBarsStaggered, FaCircleUser, FaXmark } from "react-icons/fa6";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import "../styles/navbar.css";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const { user } = useContext(AuthContext);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsDropdownOpen(false);
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (menuRef.current && !menuRef.current.contains(event.target)) &&
        (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
        (profileRef.current && !profileRef.current.contains(event.target))
      ) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // navitems
  const navitems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
    { link: "Checkout", path: null },
  ];

  // dropdown items
  const dropdownItems = [
    { link: "Trending", path: "/trending" },
    { link: "New Releases", path: "/new-releases" },
    { link: "Coming Soon", path: "/coming-soon" },
    { link: "Favorites", path: "/favorites" },
    { link: "Watch Later", path: "/watch-later" },
  ];

  return (
    <header className={`${isSticky ? "sticky top-0 left-0 right-0 text-white" : ""}`}>
      <nav className="font-wittgenstein h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 bg-[#353593] text-white shadow-md">
        <div>
          <Link to="/" className="flex items-center">
            <GiSpellBook className="text-6xl text-white inline-block" />
            <h4 className="text-white text-2xl font-bold mt-2 border-4 border-white border-l-[#353593] p-1 ml-2">
              EpicReads
            </h4>
          </Link>
        </div>

        {/* Standard menu for medium and larger devices */}
        <ul className="hidden md:flex space-x-6 ml-8">
          {navitems.map((item) =>
            item.path ? (
              <li key={item.link}>
                <Link to={item.path} className="text-white uppercase transition-all duration-300 hover:font-bold">
                  {item.link}
                </Link>
              </li>
            ) : (
              <li
                key={item.link}
                className="relative"
                onClick={toggleDropdown}
                ref={dropdownRef}
              >
                <span className="text-white uppercase transition-all duration-300 hover:font-bold cursor-pointer">
                  {item.link}
                </span>
                {isDropdownOpen && (
                  <ul
                    className="absolute md:w-48 left-0 mt-2 bg-white text-[#353593] shadow-lg rounded-md z-10"
                  >
                    {dropdownItems.map((dropdownItem) => (
                      <li key={dropdownItem.link}>
                        <Link to={dropdownItem.path} className="block px-4 py-2 hover:bg-gray-200">
                          {dropdownItem.link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex gap-2 items-center">
          <FaShoppingCart className="ml-4 text-2xl" />
          {user ? (
            <div className="relative" ref={profileRef} onClick={toggleProfileDropdown}>
              <FaCircleUser className="ml-8 text-4xl cursor-pointer" />
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-[#353593] shadow-lg rounded-md z-10 px-4 py-2">
                  <div className="text-base">{user.email}</div>
                  <Link to="/admin/dashboard/user" className="hover:underline"><div className="flex gap-2 items-center my-1">Profile <FaArrowRight /></div></Link>
                  <Link to="/logout"><button className="my-2 text-white bg-[#353593] py-1 px-2 rounded-md w-full">Logout</button></Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-1">
              <Link to="/login" className="ml-4 text-white uppercase border border-white px-4 py-2 rounded transition-all duration-300 hover:bg-white hover:text-[#353593]">
                Login
              </Link>
              <Link to="/sign-up" className="ml-4 text-black bg-[#f1b94a] uppercase px-4 py-2 rounded transition-all duration-300 hover:bg-white hover:text-[#353593]">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Menu button for mobile devices */}
        <div className="md:hidden flex gap-4">
          <FaShoppingCart className="h-5 w-5" />
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5 text-white" />
            ) : (
              <FaBarsStaggered className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu items */}
        <div ref={menuRef} className={`${isMenuOpen ? "block fixed -top-4 right-0 left-0" : "hidden"} md:hidden space-y-4 px-4 mt-24 py-7 bg-[#353593]`}>
          {user ? (
            <div className="flex flex-col items-start mb-4">
              <FaCircleUser className="text-4xl text-white cursor-pointer" onClick={toggleProfileDropdown} />
              {isProfileDropdownOpen && (
                <div className="absolute right-4 mt-2 bg-white text-[#353593] shadow-lg rounded-md z-10 px-4 py-2">
                  <div className="text-base">{user.email}</div>
                  <Link to="/admin/dashboard/user" className="hover:underline"><div className="flex gap-2 items-center my-1">Profile <FaArrowRight /></div></Link>
                  <Link to="/logout"><button className="my-2 text-white bg-[#353593] py-1 px-2 rounded-md w-full">Logout</button></Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2 justify-center items-center mb-4">
              <Link to="/login" className="text-white uppercase border border-white px-4 py-2 rounded transition-all duration-300 hover:bg-white hover:text-[#353593]">
                Login
              </Link>
              <Link to="/sign-up" className="text-black bg-[#f1b94a] uppercase px-4 py-2 rounded transition-all duration-300 hover:bg-white hover:text-[#353593]">
                Sign Up
              </Link>
            </div>
          )}

          {navitems.map(({ link, path }) =>
            path ? (
              <Link
                key={path}
                to={path}
                className="block text-base text-white uppercase cursor-pointer hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ) : (
              <div key={link} className="relative">
                <span
                  className="block text-base text-white uppercase cursor-pointer hover:underline"
                  onClick={toggleDropdown}
                >
                  {link}
                </span>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-[#353593] shadow-lg rounded-md z-10">
                    {dropdownItems.map((dropdownItem) => (
                      <li key={dropdownItem.link}>
                        <Link
                          to={dropdownItem.path}
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
