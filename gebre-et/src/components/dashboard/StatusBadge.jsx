const c = { Pending: 'bg-amber-100 text-amber-700', 'In Progress': 'bg-blue-100 text-blue-700', Completed: 'bg-emerald-100 text-emerald-700' }
export default function StatusBadge({ status }) { return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${c[status] || 'bg-slate-100'}`}>{status}</span> }
