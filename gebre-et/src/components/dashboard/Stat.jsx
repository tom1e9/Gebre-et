export default function Stat({ label, value, Icon }) {
  return (<div className="card flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><Icon size={20} /></span>
    <div><p className="text-xs text-slate-500">{label}</p><p className="text-xl font-bold">{value}</p></div></div>)
}
