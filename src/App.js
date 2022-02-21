import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                <Router>
                    <Routes>
                        <Route path="/" element={Home()} />
                        <Route path="/malwares" element={<h1>还没写（</h1>} />
                        <Route path="/jiyusb" element={<h1>jiyusb :noice:</h1>} />
                    </Routes>
                </Router>
            </main>
        </React.Fragment>
    );
}