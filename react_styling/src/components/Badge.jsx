function Badge({ children }) {
  return (
    <span className="inline-flex rounded-card bg-brand-soft px-card py-1 text-sm font-bold text-brand-dark dark:bg-brand-dark dark:text-brand-soft">
      {children}
    </span>
  )
}

export default Badge
