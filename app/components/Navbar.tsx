import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { usePuterStore } from "../lib/puter";
import { SignOutModal } from "./SignOutModal";

const Navbar = () => {
  const { auth } = usePuterStore();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  // Set theme on initial load
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial =
      stored === "dark" || stored === "light"
        ? stored
        : systemPrefersDark
          ? "dark"
          : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <p className="text-2xl font-bold navbar-gradient">Analyzr</p>
        </Link>

        <button className="cursor-pointer" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="text-yellow-600" /> : <Moon />}
        </button>

        <button
          onClick={() => setShowSignOutModal(true)}
          className="primary-button w-fit"
        >
          Sign Out
        </button>
      </nav>
      {showSignOutModal && (
        <SignOutModal
          onCancel={() => setShowSignOutModal(false)}
          onConfirm={() => {
            auth.signOut();
            setShowSignOutModal(false);
          }}
        />
      )}
    </>
  );
};
export default Navbar;
