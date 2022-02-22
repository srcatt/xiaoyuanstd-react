import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Malwares from './pages/Malwares';
import LCVirus from './pages/Malwares/LCVirus';

export default function App() {
	return (
		<React.Fragment>
			<Navbar />
			<main>
				<Router>
					<Routes>
						<Route path="/" element={Home()} />
						<Route path="/about" element={<h1>关于页</h1>} />
						<Route path="/softwares" element={<h1>还没写（</h1>} />
						<Route path="/softwares/jiyu" element={<h1>during construction</h1>} />
						<Route path="/malwares" element={Malwares()} />
						<Route path="/malwares/lcvirus" element={LCVirus()} />
						<Route path="*" element={NotFound()} />
					</Routes>
				</Router>
				<Footer />
			</main>
		</React.Fragment>
	);
}
