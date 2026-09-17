import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '0 2rem' }}>
      <Header />
      <Outlet />
    </div>
  )
}