import { assets, navLink } from "@/assets/assets";
import { ThemeContext } from "@/contexts/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Animate Navbar */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`flex items-center justify-between py-5 px-4 md:px-7 lg:px-16 transition-all ${
          scrolled
            ? "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b dark:border-b-gray-700 border-b-gray-300"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-[100px] h-[50px] object-cover"
            src={assets.logo}
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-2">
          {navLink.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-1.5 rounded transition-colors duration-300 ${
                    isActive
                      ? "bg-indigo-500 text-white font-medium"
                      : "text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button
            onClick={() => navigate("/signup")}
            variant={"destructive"}
            className="hidden sm:inline-flex cursor-pointer"
          >
            Join Us
          </Button>
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar Menu (Left Side) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col z-50 border-r border-r-gray-400 dark:border-r-gray-700"
            >
              <div className="flex items-center justify-between px-4 py-4  border-b">
                <img
                  className="w-[90px] h-[50px] object-cover"
                  src={assets.logo}
                  alt="logo"
                />
                <button
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="text-gray-700 dark:text-gray-200" size={22} />
                </button>
              </div>

              <ul className="flex flex-col gap-2 p-4">
                {navLink.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-3 py-2.5 rounded transition ${
                          isActive
                            ? "bg-indigo-500 text-white"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-auto p-4 border-t">
                <Button
                  onClick={() => {
                    navigate("/signup"), setMobileOpen(false);
                  }}
                  variant={"destructive"}
                  className="w-full"
                >
                  Log In
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
