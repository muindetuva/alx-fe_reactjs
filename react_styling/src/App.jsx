import Badge from './components/Badge.jsx'
import DeleteConfirmDialog from './components/DeleteConfirmDialog.jsx'
import PricingCardBootstrap from './components/PricingCardBootstrap.jsx'
import PricingCardTailwind from './components/PricingCardTailwind.jsx'
import ProductCard from './components/ProductCard.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'

const products = [
  { id: 1, name: 'Studio Headphones', price: 129, image: 'https://placehold.co/640x420/164e63/ffffff?text=Headphones' },
  { id: 2, name: 'Mechanical Keyboard', price: 94, image: 'https://placehold.co/640x420/155e75/ffffff?text=Keyboard' },
  { id: 3, name: 'Ergonomic Mouse', price: 59, image: 'https://placehold.co/640x420/0e7490/ffffff?text=Mouse' },
  { id: 4, name: 'USB-C Hub', price: 74, image: 'https://placehold.co/640x420/0891b2/ffffff?text=USB-C+Hub' },
  { id: 5, name: 'Monitor Light', price: 48, image: 'https://placehold.co/640x420/0f766e/ffffff?text=Monitor+Light' },
  { id: 6, name: 'Laptop Stand', price: 68, image: 'https://placehold.co/640x420/047857/ffffff?text=Laptop+Stand' },
  { id: 7, name: 'Desk Mat', price: 38, image: 'https://placehold.co/640x420/15803d/ffffff?text=Desk+Mat' },
  { id: 8, name: 'Web Camera', price: 116, image: 'https://placehold.co/640x420/166534/ffffff?text=Web+Camera' },
]

function App() {
  return (
    <div className="min-h-screen bg-surface text-ink transition-colors dark:bg-surface-dark dark:text-white">
      <header className="border-b border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <Badge>Framework Lab</Badge>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              React Styling Systems
            </h1>
          </div>
          <ThemeSwitcher />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section aria-labelledby="comparison-heading">
          <h2 id="comparison-heading" className="text-2xl font-bold">
            Bootstrap and Tailwind comparison
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <PricingCardBootstrap />
            <PricingCardTailwind />
          </div>
        </section>

        <section className="mt-14" aria-labelledby="products-heading">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge>Responsive Grid</Badge>
              <h2 id="products-heading" className="mt-2 text-2xl font-bold">
                Featured products
              </h2>
            </div>
            <DeleteConfirmDialog />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
