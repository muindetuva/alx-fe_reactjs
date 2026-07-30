import { forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close

const DialogContent = forwardRef(function DialogContent(
  { children, className = '', ...props },
  ref,
) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-slate-950/70" />
      <DialogPrimitive.Content
        ref={ref}
        className={`fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-card bg-white p-card shadow-2xl focus:outline-none dark:bg-slate-900 ${className}`}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded p-1 text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-soft dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Close dialog"
        >
          ×
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
})

DialogContent.displayName = 'DialogContent'

function DialogHeader({ className = '', ...props }) {
  return <div className={`space-y-2 ${className}`} {...props} />
}

function DialogFooter({ className = '', ...props }) {
  return (
    <div
      className={`mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end ${className}`}
      {...props}
    />
  )
}

const DialogTitle = forwardRef(function DialogTitle(
  { className = '', ...props },
  ref,
) {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={`text-xl font-bold text-slate-950 dark:text-white ${className}`}
      {...props}
    />
  )
})

const DialogDescription = forwardRef(function DialogDescription(
  { className = '', ...props },
  ref,
) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={`text-slate-600 dark:text-slate-300 ${className}`}
      {...props}
    />
  )
})

DialogTitle.displayName = 'DialogTitle'
DialogDescription.displayName = 'DialogDescription'

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
