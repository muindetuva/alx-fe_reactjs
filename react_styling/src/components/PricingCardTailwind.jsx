function PricingCardTailwind() {
  // Tailwind speeds up delivery by composing focused utilities directly where the component is built.
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <span className="self-start rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200">
        Tailwind
      </span>
      <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
        Professional
      </h3>
      <p className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
        $24/month
      </p>
      <ul className="my-6 divide-y divide-slate-200 text-slate-700 dark:divide-slate-700 dark:text-slate-200">
        <li className="py-3">Unlimited projects</li>
        <li className="py-3">Priority support</li>
        <li className="py-3">Team analytics</li>
      </ul>
      <button
        className="mt-auto rounded-lg bg-cyan-700 px-4 py-2.5 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300 dark:focus-visible:ring-cyan-800"
        type="button"
      >
        Choose Professional
      </button>
    </article>
  )
}

export default PricingCardTailwind
