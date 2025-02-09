import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full px-4 sm:px-8 lg:px-16 py-4 relative bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-lg sm:text-xl font-bold text-[#0B2447]">
            AI - Video Summarization
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`${location.pathname === "/" ? "text-blue-600" : "text-gray-600"} hover:text-blue-700 font-medium`}
          >
            Home
          </Link>
          <Link
            to="/summarize"
            className={`${location.pathname === "/summarize" ? "text-blue-600" : "text-gray-600"} hover:text-blue-700 font-medium`}
          >
            Start Project
          </Link>
          <Link to="/login">
            <Button
              variant="default"
              className="bg-[#0B2447] hover:bg-[#0B2447]/90"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-4 space-y-4 z-50">
          <Link
            to="/"
            className={`block ${location.pathname === "/" ? "text-blue-600" : "text-gray-600"} hover:text-blue-700 font-medium`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/summarize"
            className={`block ${location.pathname === "/summarize" ? "text-blue-600" : "text-gray-600"} hover:text-blue-700 font-medium`}
            onClick={toggleMenu}
          >
            Start Project
          </Link>
          <Link to="/login" className="w-full">
            <Button
              variant="default"
              className="w-full bg-[#0B2447] hover:bg-[#0B2447]/90"
            >
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
