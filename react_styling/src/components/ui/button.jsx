import { forwardRef } from 'react'

const variants = {
  default: 'bg-brand text-white hover:bg-brand-dark',
  destructive: 'bg-red-700 text-white hover:bg-red-800',
  outline:
    'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800',
}

const Button = forwardRef(function Button(
  { className = '', variant = 'default', type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-soft disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }
