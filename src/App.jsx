import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-main pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}