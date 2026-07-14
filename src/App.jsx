import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Homepage from './pages/Homepage.jsx'
import Menu from './pages/Menu.jsx'
import Tray from './pages/Tray.jsx'
import Reservation from './pages/Reservation.jsx'
import Payment from './pages/Payment.jsx'
import AboutUs from './pages/AboutUs.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/tray" element={<Tray />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App