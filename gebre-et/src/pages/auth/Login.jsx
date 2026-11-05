import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import { useAuth } from '../../context/AuthContext'
export default function Login() {
  const { login } = useAuth(); const nav = useNavigate()
  const [f, setF] = useState({ email: '', password: '', role: 'customer' }); const [err, setErr] = useState('')
  const submit = e => { e.preventDefault()
    if (!/\S+@\S+\.\S+/.test(f.email)) return setErr('Enter a valid email')
    if (f.password.length < 6) return setErr('Password must be at least 6 characters')
    login({ name: f.email.split('@')[0], email: f.email, role: f.role }); nav(`/${f.role}`) }
  return (<div className="grid min-h-screen place-items-center p-4"><form onSubmit={submit} className="card w-full max-w-sm space-y-4">
    <Logo /><h1 className="text-xl font-bold">Welcome back</h1>
    {err && <p className="rounded-lg bg-red-50 p-2 text-sm text-red-600">{err}</p>}
    <input className="input" placeholder="Email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} />
    <input className="input" type="password" placeholder="Password" value={f.password} onChange={e => setF({ ...f, password: e.target.value })} />
    <select className="input" value={f.role} onChange={e => setF({ ...f, role: e.target.value })}><option value="customer">Customer</option><option value="technician">Technician</option><option value="admin">Admin (demo)</option></select>
    <button className="btn-primary w-full">Login</button><p className="text-center text-sm">No account? <Link className="text-brand" to="/register">Register</Link></p></form></div>)
}
