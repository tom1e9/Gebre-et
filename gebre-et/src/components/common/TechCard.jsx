import { Star, MapPin } from 'lucide-react'
export default function TechCard({ tech, action }) {
  return (<div className="card transition hover:shadow-md"><div className="flex items-center gap-3">
    <span className="grid h-12 w-12 place-items-center rounded-full bg-navy font-bold text-gold">{tech.name[0]}</span>
    <div><p className="font-semibold">{tech.name}</p><p className="text-xs text-slate-500">{tech.spec}</p></div></div>
    <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
      <span className="flex items-center gap-1"><Star size={14} className="fill-gold text-gold" />{tech.rating} · {tech.jobs} jobs</span>
      <span className="flex items-center gap-1"><MapPin size={14} />{tech.area}</span></div>
    <div className="mt-3 flex items-center justify-between"><span className="text-sm font-semibold">{tech.rate} ETB/hr</span>{action}</div></div>)
}
