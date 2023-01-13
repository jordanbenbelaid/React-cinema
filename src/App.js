import './App.css';
import Contact from './Contact/Contact.jsx';
import HomePage from './HomePage/HomePage.jsx';
import Listings from './Listings/Listings';
import Schedule from './Schedule/Schedule';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/listings" element={<Listings/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Routes>

       
      </BrowserRouter>
    </div>
  );
}

export default App;
