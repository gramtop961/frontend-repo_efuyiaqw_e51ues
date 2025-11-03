import { Truck, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold">Student-friendly prices</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Everything you need for hostel life — delivered fast
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              From bedding to buckets, lights to laundry — build your perfect setup with curated essentials trusted by thousands of students.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500">
                Shop Essentials
              </a>
              <a href="#why" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Why choose us
              </a>
            </div>
            <dl id="why" className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-indigo-600" /><span>Next-day delivery</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-600" /><span>Quality guaranteed</span></div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-indigo-600" /><span>4.8/5 rated</span></div>
            </dl>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-200 via-indigo-100 to-pink-100">
                  <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-3 p-3">
                    <div className="col-span-2 row-span-2 rounded-xl bg-white/80 backdrop-blur p-4 shadow-sm flex flex-col justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-700">Bedding Kit</p>
                        <p className="text-xs text-slate-500">Comforter + Pillow + Cover</p>
                      </div>
                      <p className="text-2xl font-bold">₹1499</p>
                    </div>
                    <div className="rounded-xl bg-white/80 backdrop-blur p-4 shadow-sm flex flex-col justify-between">
                      <p className="text-sm font-semibold text-slate-700">Bucket Set</p>
                      <p className="text-lg font-bold">₹299</p>
                    </div>
                    <div className="rounded-xl bg-white/80 backdrop-blur p-4 shadow-sm">
                      <p className="text-sm font-semibold text-slate-700">LED Lamp</p>
                      <p className="text-xs text-slate-500">Dimmable</p>
                    </div>
                    <div className="rounded-xl bg-white/80 backdrop-blur p-4 shadow-sm">
                      <p className="text-sm font-semibold text-slate-700">Laundry Bag</p>
                      <p className="text-xs text-slate-500">Foldable</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-pink-300/40 blur-3xl" />
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-indigo-300/40 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
