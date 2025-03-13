import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ResumePDf from './Pages/ResumePDF';
import Hobbies from './Pages/Hobbies';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/PDFResume" element={<ResumePDf/>}/>
      <Route path="/Hobbies" element ={<Hobbies/>}/>
      <Route path="/Contact" element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
