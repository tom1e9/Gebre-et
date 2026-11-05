export default function BarChart({ data, labels = ['Jun','Jul','Aug','Sep','Oct','Nov'] }) {
  const max = Math.max(...data)
  return (<div className="flex h-40 items-end gap-3">{data.map((v, i) => <div key={i} className="flex h-full flex-1 flex-col justify-end text-center">
    <div className="rounded-t-lg bg-brand" style={{ height: `${(v / max) * 85}%` }} /><span className="text-xs text-slate-500">{labels[i]}</span></div>)}</div>)
}
