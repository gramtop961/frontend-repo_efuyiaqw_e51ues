import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center text-sm font-medium">
      <li><a href="#products" className="hover:text-indigo-600 transition">Shop</a></li>
      <li><a href="#why" className="hover:text-indigo-600 transition">Why Us</a></li>
      <li><a href="#reviews" className="hover:text-indigo-600 transition">Reviews</a></li>
      <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-indigo-600"></span>
            <span className="font-bold text-lg tracking-tight">Hostel Essentials</span>
          </a>
          <nav className="hidden md:block">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500"
            >
              <ShoppingCart className="h-4 w-4" />
              Cart
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <NavLinks />
          </div>
        )}
      </div>
    </header>
  );
}
