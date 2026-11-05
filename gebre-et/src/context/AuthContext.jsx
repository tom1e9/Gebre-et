import { createContext, useContext, useState } from 'react'
const Ctx = createContext()
export const useAuth = () => useContext(Ctx)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('gebre_user') || 'null'))
  const login = (u) => { setUser(u); localStorage.setItem('gebre_user', JSON.stringify(u)) }
  const logout = () => { setUser(null); localStorage.removeItem('gebre_user') }
  return <Ctx.Provider value={{ user, login, logout }}>{children}</Ctx.Provider>
}
