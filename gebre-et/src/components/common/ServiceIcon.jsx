import { Laptop, Wifi, Camera, Printer, Bug } from 'lucide-react'
const map = { Laptop, Wifi, Camera, Printer, Bug }
export default function ServiceIcon({ name, size = 22 }) { const I = map[name] || Laptop; return <I size={size} /> }
