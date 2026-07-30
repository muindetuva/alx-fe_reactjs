function Button({ children, className = '', type = 'button', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-soft disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
