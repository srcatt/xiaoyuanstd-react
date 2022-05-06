import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Team from './pages/Team';
import Softwares from './pages/Softwares';
import Jiyu from './pages/Softwares/Jiyu';
import TaskMgrPlus from './pages/Softwares/TaskMgrPlus';
import Malwares from './pages/Malwares';

let routes = [
	{
		path: '*',
		component: NotFound(),
		title: '找不到页面',
	},
	{
		path: '/',
		component: Home(),
		title: '小源工作室',
	},
	{
		path: '/team',
		component: Team(),
		title: '团队',
	},
	{
		path: '/softwares',
		component: Softwares(),
		title: '软件',
	},
	{
		path: '/softwares/jiyu',
		component: Jiyu(),
		title: '极域反控助手',
	},
	{
		path: '/softwares/taskmgr',
		component: TaskMgrPlus(),
		title: 'TaskMgr+',
	},
	{
		path: '/malwares',
		component: Malwares(),
		title: '病毒',
	},
	{
		path: '/unready',
		component: (
			<div className="title-group centered" style={{ color: 'rgb(0, 56, 90)' }}>
				<h1 className="title">该内容尚未准备。</h1>
				<h1 className="subtitle">该网站处于开发阶段，请等待程序猿把这个坑填平。</h1>
			</div>
		),
		title: '内容尚未准备',
	},
];

export default routes;
