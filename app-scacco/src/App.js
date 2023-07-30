import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/ContactPage/Contact';
import About from './components/AboutPage/About';
import Navbar from './Templates/navbar/index';
import Home from './components/HomePage/Home';
import React from 'react';
import './App.css';


function App() {
    return (
        <> 
            <Router>
                <Navbar />  
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactme" element={<Contact />} />
                    {/* <Route path='*' element={<ErrorPage />} /> */}
                </Routes>
            </Router>       
        </>
    );
}

export default App;
