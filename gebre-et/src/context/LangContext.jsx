import { createContext, useContext, useState } from 'react'
const dict = {
  en: { home: 'Home', services: 'Services', how: 'How It Works', become: 'Become a Technician', about: 'About Us', login: 'Login', start: 'Get Started',
    hero: 'Find Trusted IT Experts Near You.', heroSub: 'Book verified technicians in Addis Ababa for repairs, networks, CCTV and more.',
    find: 'Find a Technician', search: 'What do you need fixed?', popular: 'Popular Services', steps: 'How It Works', featured: 'Featured Technicians' },
  am: { home: 'መነሻ', services: 'አገልግሎቶች', how: 'እንዴት ይሰራል', become: 'ቴክኒሻን ይሁኑ', about: 'ስለ እኛ', login: 'ግባ', start: 'ጀምር',
    hero: 'በአቅራቢያዎ ታማኝ የአይቲ ባለሙያዎችን ያግኙ።', heroSub: 'በአዲስ አበባ ለጥገና፣ ኔትወርክ፣ ሲሲቲቪ እና ሌሎችም የተረጋገጡ ቴክኒሻኖችን ይያዙ።',
    find: 'ቴክኒሻን ያግኙ', search: 'ምን ማስጠገን ይፈልጋሉ?', popular: 'ተወዳጅ አገልግሎቶች', steps: 'እንዴት ይሰራል', featured: 'ተመራጭ ቴክኒሻኖች' },
}
const Ctx = createContext()
export const useLang = () => useContext(Ctx)
export function LangProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('gebre_lang') || 'en')
  const change = l => { setLang(l); localStorage.setItem('gebre_lang', l); document.documentElement.lang = l }
  return <Ctx.Provider value={{ lang, change, t: k => dict[lang][k] || dict.en[k] || k }}>{children}</Ctx.Provider>
}
