import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full px-16 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AI - Video Summarization</h1>
      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className={`${location.pathname === "/" ? "text-blue-600" : "text-gray-600"} hover:text-blue-700`}
        >
          Home
        </Link>
        <Link
          to="/summarize"
          className={`${location.pathname === "/summarize" ? "text-blue-600" : "text-gray-600"} hover:text-blue-700`}
        >
          Start Project
        </Link>
        <Button
          variant="default"
          className="bg-[#0B2447] hover:bg-[#0B2447]/90"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}
