import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../common/Logo'
import { useLang } from '../../context/LangContext'
import { useAuth } from '../../context/AuthContext'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang, change } = useLang(); const { user } = useAuth()
  const links = [['/', 'home'], ['/#services', 'services'], ['/#how', 'how'], ['/register?role=technician', 'become'], ['/#about', 'about']]
  return (<header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <Logo />
      <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
        {links.map(([to, k]) => <a key={k} href={to} className="hover:text-brand">{t(k)}</a>)}</nav>
      <div className="hidden items-center gap-3 lg:flex">
        <button className="btn-ghost !py-1.5" onClick={() => change(lang === 'en' ? 'am' : 'en')}>{lang === 'en' ? 'አማርኛ' : 'EN'}</button>
        {user ? <Link className="btn-primary" to={`/${user.role}`}>Dashboard</Link> : <>
          <Link className="btn-ghost" to="/login">{t('login')}</Link><Link className="btn-primary" to="/register">{t('start')}</Link></>}</div>
      <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button></div>
    {open && <div className="space-y-3 border-t bg-white px-4 py-4 lg:hidden">
      {links.map(([to, k]) => <a key={k} href={to} onClick={() => setOpen(false)} className="block text-sm font-medium">{t(k)}</a>)}
      <div className="flex gap-2"><button className="btn-ghost" onClick={() => change(lang === 'en' ? 'am' : 'en')}>{lang === 'en' ? 'አማርኛ' : 'EN'}</button>
      <Link className="btn-ghost" to="/login">{t('login')}</Link><Link className="btn-primary" to="/register">{t('start')}</Link></div></div>}
  </header>)
}
