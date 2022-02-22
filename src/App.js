import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home'

export default function App() {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                <Router>
                    <Routes>
                        <Route path="/" element={Home()} />
                        <Route path="/softwares" element={<h1>还没写（</h1>} />
                        <Route path="/softwares/jiyu" element={<h1>during construction</h1>} />
                        <Route path="/malwares" element={<h1>还没写（</h1>} />
                    </Routes>
                </Router>
                <Footer />
            </main>

        </React.Fragment>
    );
}