import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Complete Bedding Kit',
    description: 'Comforter, pillow, bedsheet & cover',
    price: 1499,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1582582621959-48d0ae4d274b?q=80&w=1200&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Bucket + Mug Set',
    description: 'Sturdy 20L bucket with mug',
    price: 299,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1601674233980-86da9acc5234?q=80&w=1200&auto=format&fit=crop',
    tag: 'Budget',
  },
  {
    id: 3,
    name: 'LED Study Lamp',
    description: 'Dimmable, flexible neck, low power usage',
    price: 499,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=1200&auto=format&fit=crop',
    tag: 'Trending',
  },
  {
    id: 4,
    name: 'Laundry Essentials',
    description: 'Foldable bag + clips + hangers',
    price: 399,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1604335399106-56a9e94a9327?q=80&w=1200&auto=format&fit=crop',
    tag: 'Combo',
  },
  {
    id: 5,
    name: 'Steel Lunch Box',
    description: 'Leak-proof, 2 compartments',
    price: 349,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1591973669128-5cbe44f66b08?q=80&w=1200&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 6,
    name: 'Bathroom Kit',
    description: 'Toiletry bag + toothbrush holder + soap case',
    price: 279,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1611009281488-3c64f86f7b26?q=80&w=1200&auto=format&fit=crop',
    tag: 'Essential',
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          {product.tag}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-slate-900">{product.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{product.description}</p>
            <div className="mt-2 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? '' : 'opacity-30'}`} />
              ))}
              <span className="ml-1 text-xs text-slate-500">{product.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">₹{product.price}</p>
            <p className="text-xs text-slate-500">incl. taxes</p>
          </div>
        </div>
        <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Curated essentials</h2>
          <p className="mt-1 text-slate-600">Top picks to make your room comfy, organized, and ready from day one.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Need help?</a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
