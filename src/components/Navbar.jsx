import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logoword.png'
import trayIcon from '../assets/tray-icon.png'

function Navbar() {
  const [reservationOpen, setReservationOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const location = useLocation()
  const isReservationActive = location.pathname.startsWith('/reservation')

  const reservationRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (reservationRef.current && !reservationRef.current.contains(event.target)) {
        setReservationOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-bold text-[#1d080f] [-webkit-text-stroke:0.4px_#1d080f]'
      : 'hover:text-[#1d080f]'

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-xl">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <NavLink to="/">
          <img src={logo} alt="Eurasia Restaurant" className="h-12 w-auto" />
        </NavLink>
        
        <div className="hidden md:flex items-center gap-8 text-[#1d080f] font-heading">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/menu" className={linkClass}>Menu</NavLink>

          <div className="relative" ref={reservationRef}>
          <button 
          onClick={() => setReservationOpen(!reservationOpen)}
          className={`flex items-center gap-1 ${isReservationActive ? 'font-bold text-[#1d080f] [-webkit-text-stroke:0.4px_#1d080f]' : 'hover:text-[#1d080f]'}`}          >
              Reservation
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {reservationOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/85 shadow-lg border border-neutral-100 py-2 rounded-lg overflow-hidden">                
                <NavLink to="/reservation?tab=table" onClick={() => setReservationOpen(false)} className="block px-4 py-2 text-sm hover:bg-neutral-100">Table Reservation</NavLink>
                <NavLink to="/reservation?tab=event" onClick={() => setReservationOpen(false)} className="block px-4 py-2 text-sm hover:bg-neutral-100">Event Reservation</NavLink>
                <NavLink to="/reservation?tab=history" onClick={() => setReservationOpen(false)} className="block px-4 py-2 text-sm hover:bg-neutral-100">History</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/payment" className={linkClass}>Payment</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/tray" className="hover:opacity-70">
            <img src={trayIcon} alt="Tray" className="h-11 w-auto" />
          </NavLink>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <NavLink to="/tray" className="hover:opacity-70">
            <img src={trayIcon} alt="Tray" className="h-11 w-auto" />
          </NavLink>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-neutral-900">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4 font-heading text-[#1d080f]">        
          <NavLink to="/" end onClick={() => setMobileOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/menu" onClick={() => setMobileOpen(false)} className={linkClass}>Menu</NavLink>
          <NavLink to="/reservation" onClick={() => setMobileOpen(false)} className={linkClass}>Reservation</NavLink>
          <NavLink to="/payment" onClick={() => setMobileOpen(false)} className={linkClass}>Payment</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)} className={linkClass}>About Us</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar