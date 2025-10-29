import { useState } from 'react'
import './App.css'
import Hobbies from './Components/Hobbies';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Contact from './Components/Contact';
import ResumePDF from './Components/ResumePDF';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/PDFResume" element={<ResumePDF/>}/>
      <Route path="/Hobbies" element ={<Hobbies/>}/>
      <Route path="/Contact" element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
