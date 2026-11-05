import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Menu, LogOut, Bell } from 'lucide-react'
import Logo from '../components/common/Logo'
import { useAuth } from '../context/AuthContext'
export default function DashboardLayout({ items, base }) {
  const [open, setOpen] = useState(false); const { user, logout } = useAuth(); const nav = useNavigate()
  return (<div className="min-h-screen lg:flex">
    <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-navy p-4 text-white transition-transform lg:static lg:translate-x-0 ${open ? '' : '-translate-x-full'}`}>
      <div className="mb-6"><Logo light /></div>
      <nav className="space-y-1">{items.map(([path, label, Icon]) =>
        <NavLink key={label} to={`${base}/${path}`} end={path === ''} onClick={() => setOpen(false)}
          className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${isActive ? 'bg-brand' : 'text-slate-300 hover:bg-white/10'}`}>
          <Icon size={18} />{label}</NavLink>)}
        <button onClick={() => { logout(); nav('/') }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/10"><LogOut size={18} />Logout</button></nav>
    </aside>
    {open && <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setOpen(false)} />}
    <div className="flex-1"><div className="flex items-center justify-between border-b bg-white px-4 py-3">
      <button className="lg:hidden" onClick={() => setOpen(true)}><Menu /></button>
      <span className="hidden text-sm text-slate-500 lg:block">Welcome back</span>
      <div className="flex items-center gap-3"><Bell size={18} /><span className="text-sm font-semibold">{user?.name}</span></div></div>
      <main className="p-4 md:p-8"><Outlet /></main></div></div>)
}
