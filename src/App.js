import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Team from './pages/Team';
import Softwares from './pages/Softwares';
import Jiyu from './pages/Softwares/Jiyu';
import TaskMgrPlus from './pages/Softwares/TaskMgrPlus';
import Malwares from './pages/Malwares';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import LiquidIcon from './components/LiquidIcon';

export default function App() {
	const [alertOpen, setAlertOpen] = React.useState(true);
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
				<Collapse in={alertOpen}>
					<Alert
						variant="filled"
						severity="info"
						icon={<LiquidIcon width="1em" />}
						action={
							<IconButton
								color="inherit"
								size="small"
								onClick={() => {
									setAlertOpen(false);
								}}
							>
								<Close fontSize="inherit" />
							</IconButton>
						}
					>
						好东西，正在开发。
					</Alert>
				</Collapse>

				<Router>
					<Routes>
						<Route path="/" element={Home()} />
						<Route path="/team" element={Team()} />
						<Route path="/softwares" element={Softwares()} />
						<Route path="/softwares/jiyu" element={Jiyu()} />
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
