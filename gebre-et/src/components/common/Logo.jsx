import { Link } from 'react-router-dom'
export default function Logo({ light }) {
  return (<Link to="/" className="flex items-center gap-2">
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-lg font-bold text-gold ring-1 ring-gold/40">G</span>
    <span className={`font-bold ${light ? 'text-white' : 'text-navy'}`}>Gebre ET <span className="text-gold">ገብረ ኢት</span></span></Link>)
}
