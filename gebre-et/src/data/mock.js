// DEMO DATA – replace with API responses.
export const services = [
  { id: 'pc', name: 'Laptop & PC Repair', icon: 'Laptop', from: 300 },
  { id: 'net', name: 'Network & WiFi', icon: 'Wifi', from: 400 },
  { id: 'cctv', name: 'CCTV & Security', icon: 'Camera', from: 800 },
  { id: 'print', name: 'Printer Services', icon: 'Printer', from: 250 },
  { id: 'sw', name: 'Software & Virus Removal', icon: 'Bug', from: 200 },
]
export const technicians = [
  { id: 1, name: 'Dawit Alemayehu', spec: 'Laptop & PC Repair', area: 'Bole', rating: 4.9, jobs: 212, rate: 350, cat: 'pc' },
  { id: 2, name: 'Selam Tesfaye', spec: 'Network & WiFi', area: 'Piassa', rating: 4.8, jobs: 164, rate: 450, cat: 'net' },
  { id: 3, name: 'Yonas Kebede', spec: 'CCTV & Security', area: 'CMC', rating: 4.7, jobs: 98, rate: 900, cat: 'cctv' },
  { id: 4, name: 'Hanna Girma', spec: 'Printer Services', area: 'Kazanchis', rating: 4.9, jobs: 131, rate: 300, cat: 'print' },
  { id: 5, name: 'Abel Mekonnen', spec: 'Software & Virus Removal', area: 'Megenagna', rating: 4.6, jobs: 77, rate: 250, cat: 'sw' },
]
export const bookings = [
  { id: 'GE-20481', service: 'Laptop & PC Repair', tech: 'Dawit Alemayehu', date: 'Nov 6, 10:00', price: 650, status: 'In Progress' },
  { id: 'GE-20466', service: 'Network & WiFi', tech: 'Selam Tesfaye', date: 'Nov 2, 14:00', price: 1200, status: 'Completed' },
  { id: 'GE-20490', service: 'Printer Services', tech: 'Hanna Girma', date: 'Nov 8, 09:00', price: 400, status: 'Pending' },
]
export const locations = ['Bole', 'Piassa', 'CMC', 'Kazanchis', 'Megenagna', 'Sarbet', 'Lideta']
export const monthly = [32, 48, 41, 66, 72, 90]
