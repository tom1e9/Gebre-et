import { useState } from 'react'
import { Wallet, Briefcase, Star, Inbox } from 'lucide-react'
import Stat from '../../components/dashboard/Stat'
import BarChart from '../../components/dashboard/BarChart'
import { monthly } from '../../data/mock'
export default function TechOverview() {
  const [online, setOnline] = useState(true)
  const [reqs, setReqs] = useState([{ id: 1, who: 'Meron Haile', job: "Laptop won't boot", area: 'Bole', pay: 600 }, { id: 2, who: 'Biniam Assefa', job: 'WiFi setup for office', area: 'Sarbet', pay: 1500 }])
  return (<div className="space-y-6"><div className="flex items-center justify-between"><h1 className="text-2xl font-bold">Technician overview</h1>
    <button onClick={() => setOnline(!online)} className={`btn ${online ? 'bg-emerald-600 text-white' : 'bg-slate-300'}`}>{online ? 'Online' : 'Offline'}</button></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat label="Total earnings" value="84,500 ETB" Icon={Wallet} /><Stat label="Completed jobs" value="212" Icon={Briefcase} />
      <Stat label="Rating" value="4.9" Icon={Star} /><Stat label="New requests" value={reqs.length} Icon={Inbox} /></div>
    <div className="card"><h2 className="mb-3 font-semibold">Earnings (hundreds ETB)</h2><BarChart data={monthly} /></div>
    <div className="card space-y-3"><h2 className="font-semibold">Job requests</h2>
      {!reqs.length && <p className="text-sm text-slate-500">No new requests. You are all caught up.</p>}
      {reqs.map(r => <div key={r.id} className="flex flex-wrap items-center justify-between gap-2 border-t pt-3 text-sm"><span><b>{r.who}</b> · {r.job} · {r.area} · {r.pay} ETB</span>
        <span className="flex gap-2"><button className="btn-primary !py-1.5" onClick={() => setReqs(reqs.filter(x => x.id !== r.id))}>Accept</button>
        <button className="btn-ghost !py-1.5" onClick={() => setReqs(reqs.filter(x => x.id !== r.id))}>Reject</button></span></div>)}</div></div>)
}
