import { useState } from 'react'
import { Users, Wrench, ShieldAlert, Banknote } from 'lucide-react'
import Stat from '../../components/dashboard/Stat'
import BarChart from '../../components/dashboard/BarChart'
import { technicians, monthly } from '../../data/mock'
export default function AdminOverview() {
  const [q, setQ] = useState(''); const [page, setPage] = useState(0)
  const rows = technicians.filter(t => t.name.toLowerCase().includes(q.toLowerCase())); const per = 3
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Admin dashboard</h1>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat label="Customers" value="14,020" Icon={Users} /><Stat label="Technicians" value="1,214" Icon={Wrench} />
      <Stat label="Pending verification" value="37" Icon={ShieldAlert} /><Stat label="Platform revenue" value="1.2M ETB" Icon={Banknote} /></div>
    <div className="card"><h2 className="mb-3 font-semibold">Monthly bookings</h2><BarChart data={monthly} /></div>
    <div className="card overflow-x-auto"><input className="input mb-3 max-w-xs" placeholder="Search technicians" value={q} onChange={e => { setQ(e.target.value); setPage(0) }} />
      <table className="w-full text-left text-sm"><tbody>{rows.slice(page * per, page * per + per).map(t => <tr key={t.id} className="border-t"><td className="py-2 font-medium">{t.name}</td><td>{t.spec}</td><td>{t.area}</td><td>⭐ {t.rating}</td></tr>)}</tbody></table>
      {!rows.length && <p className="py-4 text-sm text-slate-500">No technicians match.</p>}
      <div className="mt-3 flex gap-2"><button className="btn-ghost !py-1" disabled={!page} onClick={() => setPage(page - 1)}>Prev</button>
        <button className="btn-ghost !py-1" disabled={(page + 1) * per >= rows.length} onClick={() => setPage(page + 1)}>Next</button></div></div></div>)
}
