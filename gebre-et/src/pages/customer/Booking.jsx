import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services, technicians, locations } from '../../data/mock'
const steps = ['Service', 'Problem', 'Location', 'Date & time', 'Technician', 'Review', 'Confirm']
export default function Booking() {
  const [s, setS] = useState(0); const [d, setD] = useState({ cat: '', problem: '', area: 'Bole', address: '', date: '', time: '09:00', tech: null }); const [id, setId] = useState(null)
  const set = (k, v) => setD({ ...d, [k]: v })
  const valid = [d.cat, d.problem.trim().length >= 10, d.address.trim(), d.date, d.tech, true][s]
  const svc = services.find(x => x.id === d.cat)
  if (id) return (<div className="card mx-auto max-w-md text-center"><h2 className="text-xl font-bold text-emerald-600">Booking confirmed!</h2><p className="mt-2 text-sm">Your booking ID</p>
    <p className="my-2 text-2xl font-bold">{id}</p><Link to="/customer" className="btn-primary">Back to dashboard</Link></div>)
  return (<div className="mx-auto max-w-2xl space-y-5"><div className="flex gap-1">{steps.map((n, i) => <div key={n} className={`h-1.5 flex-1 rounded ${i <= s ? 'bg-brand' : 'bg-slate-200'}`} />)}</div>
    <p className="text-sm text-slate-500">Step {s + 1} of 7 · {steps[s]}</p>
    <div className="card space-y-3">
      {s === 0 && services.map(x => <button key={x.id} onClick={() => set('cat', x.id)} className={`w-full rounded-xl border p-3 text-left text-sm ${d.cat === x.id ? 'border-brand bg-brand/10' : 'border-slate-200'}`}>{x.name}</button>)}
      {s === 1 && <textarea className="input h-32" placeholder="Describe the problem (min 10 characters)" value={d.problem} onChange={e => set('problem', e.target.value)} />}
      {s === 2 && <><select className="input" value={d.area} onChange={e => set('area', e.target.value)}>{locations.map(l => <option key={l}>{l}</option>)}</select>
        <input className="input" placeholder="Street / building / landmark" value={d.address} onChange={e => set('address', e.target.value)} /></>}
      {s === 3 && <div className="grid grid-cols-2 gap-3"><input type="date" className="input" value={d.date} onChange={e => set('date', e.target.value)} />
        <select className="input" value={d.time} onChange={e => set('time', e.target.value)}>{['09:00', '11:00', '14:00', '16:00'].map(t => <option key={t}>{t}</option>)}</select></div>}
      {s === 4 && technicians.filter(t => !d.cat || t.cat === d.cat).map(t => <button key={t.id} onClick={() => set('tech', t)} className={`w-full rounded-xl border p-3 text-left text-sm ${d.tech?.id === t.id ? 'border-brand bg-brand/10' : 'border-slate-200'}`}>{t.name} · ⭐ {t.rating} · {t.rate} ETB/hr</button>)}
      {s === 5 && <dl className="space-y-1 text-sm"><p><b>Service:</b> {svc?.name}</p><p><b>Problem:</b> {d.problem}</p><p><b>Location:</b> {d.address}, {d.area}</p><p><b>When:</b> {d.date} {d.time}</p><p><b>Technician:</b> {d.tech?.name}</p><p><b>Estimate:</b> {d.tech?.rate} ETB/hr</p></dl>}
      {s === 6 && <p className="text-sm">Press confirm to place your booking.</p>}</div>
    <div className="flex justify-between"><button className="btn-ghost" disabled={!s} onClick={() => setS(s - 1)}>Back</button>
      {s < 6 ? <button className="btn-primary" disabled={!valid} onClick={() => setS(s + 1)}>Next</button>
        : <button className="btn-gold" onClick={() => setId('GE-' + Math.floor(10000 + Math.random() * 90000))}>Confirm booking</button>}</div></div>)
}
