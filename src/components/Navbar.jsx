import { NavLink } from 'react-router-dom'
import logo from '../assets/logoword.png'
import trayIcon from '../assets/tray-icon.png'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'font-bold text-neutral-900' : 'hover:text-amber-800'

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-white shadow-xl">
      <NavLink to="/">
        <img src={logo} alt="Eurasia Restaurant" className="h-11 w-auto" />
      </NavLink>

      <div className="flex items-center gap-8 text-neutral-800 font-serif">
        <NavLink to="/" end className={linkClass}>Home</NavLink>

        <NavLink to="/menu" className={({ isActive }) =>
          `flex items-center gap-1 ${isActive ? 'font-bold text-neutral-900' : 'hover:text-amber-800'}`
        }>
          Menu
          <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </NavLink>

        <NavLink to="/reservation" className={({ isActive }) =>
          `flex items-center gap-1 ${isActive ? 'font-bold text-neutral-900' : 'hover:text-amber-800'}`
        }>
          Reservation
          <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </NavLink>

        <NavLink to="/payment" className={linkClass}>Payment</NavLink>
        <NavLink to="/about" className={linkClass}>About Us</NavLink>
        <NavLink to="/tray" className="hover:opacity-70">
          <img src={trayIcon} alt="Tray" className="h-11 w-auto" />
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar