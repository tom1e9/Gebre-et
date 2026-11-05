import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Search, ShieldCheck, Wallet, MapPinned, Headphones, BadgeCheck } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import Logo from '../../components/common/Logo'
import ServiceIcon from '../../components/common/ServiceIcon'
import TechCard from '../../components/common/TechCard'
import { useLang } from '../../context/LangContext'
import { services, technicians, locations } from '../../data/mock'
export default function Landing() {
  const { t } = useLang(); const nav = useNavigate()
  const [q, setQ] = useState(''); const [loc, setLoc] = useState('Bole')
  const why = [[BadgeCheck, 'Verified professionals'], [Wallet, 'Transparent pricing'], [MapPinned, 'Real-time tracking'], [ShieldCheck, 'Secure payments'], [Headphones, 'Customer support']]
  const stats = [['1,200+', 'Verified technicians'], ['18,500+', 'Completed jobs'], ['14,000+', 'Happy customers'], ['25+', 'Services']]
  return (<div><Navbar />
    <section className="bg-navy text-white"><div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="h-1 w-24 rounded bg-gradient-to-r from-green-600 via-gold to-red-600" />
      <h1 className="mt-6 max-w-2xl text-4xl font-bold md:text-5xl">{t('hero')}</h1>
      <p className="mt-4 max-w-xl text-slate-300">{t('heroSub')}</p>
      <form onSubmit={e => { e.preventDefault(); nav(`/register?q=${encodeURIComponent(q)}`) }} className="mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl bg-white p-2 sm:flex-row">
        <div className="flex flex-1 items-center gap-2 px-3 text-navy"><Search size={18} /><input className="w-full py-2 outline-none" placeholder={t('search')} value={q} onChange={e => setQ(e.target.value)} /></div>
        <select className="rounded-xl px-3 py-2 text-navy outline-none" value={loc} onChange={e => setLoc(e.target.value)}>{locations.map(l => <option key={l}>{l}</option>)}</select>
        <button className="btn-gold">{t('find')}</button></form>
      <Link to="/register?role=technician" className="btn-ghost mt-4 !bg-transparent !text-white">{t('become')}</Link></div></section>
    <section id="services" className="mx-auto max-w-7xl px-4 py-14"><h2 className="text-2xl font-bold">{t('popular')}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{services.map(s =>
        <Link to="/register" key={s.id} className="card text-center transition hover:-translate-y-1 hover:shadow-md">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand"><ServiceIcon name={s.icon} /></span>
          <p className="mt-3 text-sm font-semibold">{s.name}</p><p className="text-xs text-slate-500">from {s.from} ETB</p></Link>)}</div></section>
    <section id="how" className="bg-white py-14"><div className="mx-auto max-w-7xl px-4"><h2 className="text-2xl font-bold">{t('steps')}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-4">{['Choose a service', 'Find a technician', 'Book a service', 'Get your problem solved'].map((s, i) =>
        <div key={s} className="card"><span className="grid h-8 w-8 place-items-center rounded-full bg-gold font-bold">{i + 1}</span><p className="mt-3 font-semibold">{s}</p></div>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-4 py-14"><h2 className="text-2xl font-bold">{t('featured')}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{technicians.slice(0, 3).map(x => <TechCard key={x.id} tech={x} action={<Link to="/register" className="btn-ghost !py-1.5">View Profile</Link>} />)}</div></section>
    <section className="bg-white py-14"><div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-5">{why.map(([I, l]) =>
      <div key={l} className="text-center"><I className="mx-auto text-brand" /><p className="mt-2 text-sm font-semibold">{l}</p></div>)}</div></section>
    <section className="bg-navy py-12 text-white"><div className="mx-auto grid max-w-7xl gap-6 px-4 text-center sm:grid-cols-4">{stats.map(([n, l]) =>
      <div key={l}><p className="text-3xl font-bold text-gold">{n}</p><p className="text-sm text-slate-300">{l}</p></div>)}</div></section>
    <section className="mx-auto max-w-7xl px-4 py-14"><div className="card bg-gold/10 text-center"><h2 className="text-2xl font-bold">Earn with your IT skills</h2>
      <p className="mt-2 text-slate-600">Join Gebre ET and get jobs near you.</p><Link to="/register?role=technician" className="btn-primary mt-4">{t('become')}</Link></div></section>
    <footer id="about" className="bg-navy px-4 py-8 text-sm text-slate-300"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row"><Logo light /><p>Real Experts. Real Solutions. · Addis Ababa, Ethiopia</p></div></footer></div>)
}
