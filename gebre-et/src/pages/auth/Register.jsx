import { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import { useAuth } from '../../context/AuthContext'
export default function Register() {
  const [sp] = useSearchParams(); const { login } = useAuth(); const nav = useNavigate()
  const [f, setF] = useState({ name: '', phone: '', email: '', password: '', role: sp.get('role') === 'technician' ? 'technician' : 'customer' })
  const [errs, setErrs] = useState({})
  const submit = e => { e.preventDefault(); const x = {}
    if (f.name.trim().length < 3) x.name = 'Full name is required'
    if (!/^(\+251|0)9\d{8}$/.test(f.phone)) x.phone = 'Use an Ethiopian number, e.g. 0911223344'
    if (!/\S+@\S+\.\S+/.test(f.email)) x.email = 'Valid email required'
    if (f.password.length < 6) x.password = 'Minimum 6 characters'
    setErrs(x); if (Object.keys(x).length) return
    login({ name: f.name, email: f.email, role: f.role }); nav(`/${f.role}`) }
  const field = (k, ph, type = 'text') => <div><input className="input" type={type} placeholder={ph} value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} />{errs[k] && <p className="mt-1 text-xs text-red-600">{errs[k]}</p>}</div>
  return (<div className="grid min-h-screen place-items-center p-4"><form onSubmit={submit} className="card w-full max-w-sm space-y-4">
    <Logo /><h1 className="text-xl font-bold">Create your account</h1>
    <div className="grid grid-cols-2 gap-2">{['customer', 'technician'].map(r => <button type="button" key={r} onClick={() => setF({ ...f, role: r })}
      className={`rounded-xl border py-2 text-sm font-semibold capitalize ${f.role === r ? 'border-brand bg-brand/10 text-brand' : 'border-slate-200'}`}>{r}</button>)}</div>
    {field('name', 'Full name')}{field('phone', 'Phone (09...)')}{field('email', 'Email')}{field('password', 'Password', 'password')}
    <button className="btn-primary w-full">Register as {f.role}</button><p className="text-center text-sm">Have an account? <Link className="text-brand" to="/login">Login</Link></p></form></div>)
}
