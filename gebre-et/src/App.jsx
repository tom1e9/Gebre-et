import { Routes, Route } from 'react-router-dom'
import { LayoutDashboard, PlusCircle, CalendarCheck, Briefcase, Wallet, Users, ShieldCheck } from 'lucide-react'
import DashboardLayout from './layouts/DashboardLayout'
import ProtectedRoute from './routes/ProtectedRoute'
import Landing from './pages/public/Landing'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import CustomerOverview from './pages/customer/Overview'
import Booking from './pages/customer/Booking'
import TechOverview from './pages/technician/Overview'
import AdminOverview from './pages/admin/Overview'
const customerNav = [['', 'Overview', LayoutDashboard], ['book', 'Book a Service', PlusCircle], ['', 'My Bookings', CalendarCheck]]
const techNav = [['', 'Overview', LayoutDashboard], ['', 'Job Requests', Briefcase], ['', 'Earnings', Wallet]]
const adminNav = [['', 'Dashboard', LayoutDashboard], ['', 'Customers', Users], ['', 'Verification', ShieldCheck]]
const guard = (role, nav) => <ProtectedRoute role={role}><DashboardLayout items={nav} base={`/${role}`} /></ProtectedRoute>
export default function App() {
  return (<Routes>
    <Route path="/" element={<Landing />} /><Route path="/login" element={<Login />} /><Route path="/register" element={<Register />} />
    <Route path="/customer" element={guard('customer', customerNav)}><Route index element={<CustomerOverview />} /><Route path="book" element={<Booking />} /></Route>
    <Route path="/technician" element={guard('technician', techNav)}><Route index element={<TechOverview />} /></Route>
    <Route path="/admin" element={guard('admin', adminNav)}><Route index element={<AdminOverview />} /></Route>
  </Routes>)
}
