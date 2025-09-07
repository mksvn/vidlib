import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden relative">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 text-white hover:bg-white/10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-gray-900/95 text-white">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-white text-lg font-semibold">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 text-white hover:bg-white/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-6 pb-8 space-y-1">
            <a href="#" className="block px-2 py-3 text-[18px] hover:bg-white/10 rounded-md">Company</a>
            <a href="#" className="block px-2 py-3 text-[18px] hover:bg-white/10 rounded-md">Platform</a>
            <a href="#" className="block px-2 py-3 text-[18px] hover:bg-white/10 rounded-md">Resources</a>
            <div className="mt-6">
              <Link to="#" className="block w-full text-center bg-primary text-white rounded-full px-4 py-3 text-[18px] hover:bg-primary/90">Sign Up</Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
