import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === "/auth";

  return (
    <nav className="navbar">
      {isAuthPage ? (
        <div className="cursor-not-allowed">
          <p className="text-2xl font-bold text-gradient">Analyzr</p>
        </div>
      ) : (
        <Link to="/">
          <p className="text-2xl font-bold text-gradient">Analyzr</p>
        </Link>
      )}

      <button
        className="cursor-pointer"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? <Sun className="text-yellow-500" /> : <Moon />}
      </button>

      {isAuthPage ? (
        <div className="primary-button w-fit cursor-not-allowed">
          Upload Resume
        </div>
      ) : (
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      )}
    </nav>
  );
};
export default Navbar;
