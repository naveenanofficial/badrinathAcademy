import { useEffect } from "react";
import { Dashboard, Login, Register } from "./components/index";
import {Home, Courses, Teachers, Contact, NotFound} from "./sections/index"
import NavBar from "./sections/navBar";
import {Routes, Route, useLocation} from 'react-router-dom'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    localStorage.getItem("isDark") === 'true' ? document.documentElement.classList.add('dark') : null
  }, [])

  return (
   <div className="flex flex-col justify-between min-h-screen">
    <NavBar/>
    <main className="grow justify-between">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
   </div>
  )
}