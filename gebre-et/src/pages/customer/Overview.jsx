import { Link } from 'react-router-dom'
import { CalendarCheck, Clock, CheckCircle2, CreditCard } from 'lucide-react'
import Stat from '../../components/dashboard/Stat'
import StatusBadge from '../../components/dashboard/StatusBadge'
import TechCard from '../../components/common/TechCard'
import { bookings, technicians } from '../../data/mock'
import { useAuth } from '../../context/AuthContext'
export default function Overview() {
  const { user } = useAuth()
  return (<div className="space-y-6"><div className="flex flex-wrap items-center justify-between gap-3"><h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
    <Link to="/customer/book" className="btn-gold">+ Book a service</Link></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat label="Total bookings" value="12" Icon={CalendarCheck} /><Stat label="Active" value="2" Icon={Clock} />
      <Stat label="Completed" value="9" Icon={CheckCircle2} /><Stat label="Pending payments" value="650 ETB" Icon={CreditCard} /></div>
    <div className="card overflow-x-auto"><h2 className="mb-3 font-semibold">Recent bookings</h2><table className="w-full text-left text-sm"><tbody>
      {bookings.map(b => <tr key={b.id} className="border-t"><td className="py-2 font-medium">{b.id}</td><td>{b.service}</td><td>{b.tech}</td><td>{b.date}</td><td>{b.price} ETB</td><td><StatusBadge status={b.status} /></td></tr>)}</tbody></table></div>
    <div><h2 className="mb-3 font-semibold">Recommended technicians</h2><div className="grid gap-4 md:grid-cols-3">{technicians.slice(0, 3).map(t => <TechCard key={t.id} tech={t} />)}</div></div></div>)
}
