import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-lg bg-indigo-600"></span>
              <span className="font-bold text-lg tracking-tight">Hostel Essentials</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Making student life simpler with quality products at fair prices.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-indigo-600" href="#products">Bedding</a></li>
              <li><a className="hover:text-indigo-600" href="#products">Bath & Laundry</a></li>
              <li><a className="hover:text-indigo-600" href="#products">Study</a></li>
              <li><a className="hover:text-indigo-600" href="#products">Combos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Support</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-indigo-600" href="#">Shipping</a></li>
              <li><a className="hover:text-indigo-600" href="#">Returns</a></li>
              <li><a className="hover:text-indigo-600" href="#">Warranty</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Get in touch</h3>
            <p className="mt-3 text-sm text-slate-600">WhatsApp: +91 99999 99999<br/>Email: hello@hostelessentials.co</p>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Instagram" className="hover:text-indigo-600"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-indigo-600"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-indigo-600"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hostel Essentials. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
