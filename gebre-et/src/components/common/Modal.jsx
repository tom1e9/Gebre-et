import { X } from 'lucide-react'
export default function Modal({ open, onClose, title, children }) {
  if (!open) return null
  return (<div className="fixed inset-0 z-50 grid place-items-center bg-navy/50 p-4" onClick={onClose}>
    <div className="card w-full max-w-md" onClick={e => e.stopPropagation()}>
      <div className="mb-3 flex items-center justify-between"><h3 className="font-semibold">{title}</h3>
      <button onClick={onClose} aria-label="Close"><X size={18} /></button></div>{children}</div></div>)
}
