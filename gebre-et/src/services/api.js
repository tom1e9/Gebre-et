import axios from 'axios'
// Swap mock data for real calls when the Express/MySQL backend is ready.
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/api' })
api.interceptors.request.use(c => { const t = localStorage.getItem('gebre_token'); if (t) c.headers.Authorization = `Bearer ${t}`; return c })
export default api
