import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Softwares from './pages/Softwares';
import Jiyu from './pages/Softwares/Jiyu';
import JiyuBC from './pages/Softwares/JiyuBC';
import TaskMgrPlus from './pages/Softwares/TaskMgrPlus';
import Malwares from './pages/Malwares';
import Alert from '@mui/material/Alert';

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
	return (
		<React.Fragment>
			<Navbar />
			<main>
				<Alert variant="filled" severity="info">
					<strong>向所有在东航MU5735航班中遇难的人们默哀。</strong>
				</Alert>
				<Router>
					<Routes>
						<Route path="/" element={Home()} />
						<Route path="/softwares" element={Softwares()} />
						<Route path="/softwares/jiyu" element={Jiyu()} />
						<Route path="/softwares/jiyubc" element={JiyuBC()} />
						<Route path="/softwares/taskmgr" element={TaskMgrPlus()} />
						<Route path="/malwares" element={Malwares()} />
						<Route
							path="/unready"
							element={
								<div className="title-group centered" style={{ color: 'rgb(0, 56, 90)' }}>
									<h1 className="title">该内容尚未准备。</h1>
									<h1 className="subtitle">该网站处于开发阶段，请等待程序猿把这个坑填平。</h1>
								</div>
							}
						/>
						<Route path="*" element={NotFound()} />
					</Routes>
				</Router>
			</main>
			<Footer />
		</React.Fragment>
	);
}
