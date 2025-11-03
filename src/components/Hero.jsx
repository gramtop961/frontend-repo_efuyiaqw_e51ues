import Spline from '@splinetool/react-spline';
import { Truck, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
            <span className="inline-block rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide">
              Student-friendly prices
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Level up your hostel life with curated essentials
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              Build your perfect setup — cozy bedding, brighter study lights, and everyday must-haves. Fast delivery, quality you can trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 transition-transform">
                Shop Essentials
              </a>
              <a href="#why" className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition">
                Why choose us
              </a>
            </div>
            <dl id="why" className="mt-10 grid grid-cols-3 gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-emerald-300" /><span>Next-day delivery</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-sky-300" /><span>Quality guaranteed</span></div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" /><span>4.8/5 rated</span></div>
            </dl>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-white/10">
                  <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-3 p-3">
                    <div className="col-span-2 row-span-2 rounded-xl bg-white/70 backdrop-blur p-4 shadow-sm flex flex-col justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-800">Bedding Kit</p>
                        <p className="text-xs text-slate-600">Comforter + Pillow + Cover</p>
                      </div>
                      <p className="text-2xl font-bold text-slate-900">₹1499</p>
                    </div>
                    <div className="rounded-xl bg-white/70 backdrop-blur p-4 shadow-sm flex flex-col justify-between">
                      <p className="text-sm font-semibold text-slate-800">Bucket Set</p>
                      <p className="text-lg font-bold text-slate-900">₹299</p>
                    </div>
                    <div className="rounded-xl bg-white/70 backdrop-blur p-4 shadow-sm">
                      <p className="text-sm font-semibold text-slate-800">LED Lamp</p>
                      <p className="text-xs text-slate-600">Dimmable</p>
                    </div>
                    <div className="rounded-xl bg-white/70 backdrop-blur p-4 shadow-sm">
                      <p className="text-sm font-semibold text-slate-800">Laundry Bag</p>
                      <p className="text-xs text-slate-600">Foldable</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-pink-400/40 blur-3xl" />
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-indigo-400/40 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="animate-bounce text-white/80 text-xs tracking-wider">Scroll</div>
      </div>
    </section>
  );
}
