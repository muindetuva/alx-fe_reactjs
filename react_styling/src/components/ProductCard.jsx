import Button from './Button.jsx'

function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <img
        // This arbitrary value preserves the intentionally exact product-image height.
        className="h-[11.5rem] w-full object-cover"
        src={product.image}
        alt=""
      />
      <div className="p-card">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {product.name}
        </h3>
        <p className="my-3 text-price font-bold text-brand dark:text-brand-soft">
          ${product.price}
        </p>
        <Button className="w-full">Add to cart</Button>
      </div>
    </article>
  )
}

export default ProductCard
