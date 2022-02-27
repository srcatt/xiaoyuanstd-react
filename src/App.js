import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Softwares from './pages/Softwares';
import Jiyu from './pages/Softwares/Jiyu';
import TaskMgrPlus from './pages/Softwares/TaskMgrPlus';
import Malwares from './pages/Malwares';
import LCVirus from './pages/Malwares/LCVirus';
import Rick from './images/Rick.mp4';

export default function App() {
	console.log(
		'\n每一个星球都有一个驱动核心,',
		'\n每一种思想都有影响力的种子',
		'\n感受世界的温度,',
		'\n年轻的你也能成为改变世界的动力,',
		'\n我们珍惜你所有的潜力',
		'\n你的潜力,是改变世界的动力!'
	);
	console.log('\n%c小源工作室招聘问卷：https://wj.qq.com/s2/9765478/b490', 'color: red');
	console.log('\n%c感谢百度', 'text-decoration: line-through');
	return (
		<React.Fragment>
			<Navbar />
			<main>
				<Router>
					<Routes>
						<Route path="/" element={Home()} />
						<Route path="/about" element={<h1>关于页</h1>} />
						<Route path="/softwares" element={Softwares()} />
						<Route path="/softwares/jiyu" element={Jiyu()} />
						<Route path="/softwares/taskmgr" element={TaskMgrPlus()} />
						<Route path="/malwares" element={Malwares()} />
						<Route path="/malwares/lcvirus" element={LCVirus()} />
						<Route
							path="/unready"
							element={
								<div className="title-group centered" style={{ color: 'rgb(0, 56, 90)' }}>
									<h1 className="title">该内容尚未准备。</h1>
									<h1 className="subtitle">该网站处于开发阶段，请等待程序猿把这个坑填平。</h1>
									<h1 className="subtitle">
										开发进度可在
										<a href="/rick" className="a_decoration" style={{ color: 'orange' }}>
											这里
										</a>
										查看。
									</h1>
								</div>
							}
						/>
						<Route path="/rick" element={<video src={Rick} autoPlay loop controls></video>} />
						<Route path="*" element={NotFound()} />
					</Routes>
				</Router>
				<Footer />
			</main>
		</React.Fragment>
	);
}
