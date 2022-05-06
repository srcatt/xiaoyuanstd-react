import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import routes from './router';

export default function App() {
	console.log(
		'\n每一个星球都有一个驱动核心，',
		'\n每一种思想都有影响力的种子',
		'\n感受世界的温度，',
		'\n年轻的你也能成为改变世界的动力，',
		'\n我们珍惜你所有的潜力',
		'\n你的潜力,是改变世界的动力！'
	);
	console.log('\n%c小源工作室招聘问卷：https://wj.qq.com/s2/9765478/b490', 'color: red');

	const suffix = ' | XYStd'
	const DomTitle = ({ item }) => {
		document.title = item.title + suffix
		return item.component
	}

	return (
		<React.Fragment>
			<Navbar />
			<main>
				<Router>
					<Routes>
						{routes.map((val, index) => (
							<Route key={index} path={val.path} element={<DomTitle item={val} />} />
						))}
					</Routes>
				</Router>
			</main>
			<Footer />
		</React.Fragment>
	);
}
