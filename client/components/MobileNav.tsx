import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 text-white hover:bg-white/10"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border border-white/20 bg-gray-900 text-white shadow-xl z-50">
          <nav className="py-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-white/10">
              Company
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-white/10">
              Platform
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-white/10">
              Resources
            </a>
            <div className="px-4 py-2">
              <Link
                to="#"
                className="block w-full text-center bg-primary text-white rounded-full px-4 py-2 text-sm hover:bg-primary/90"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
