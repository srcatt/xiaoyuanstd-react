import React from 'react';
import Apps from '@mui/icons-material/Apps';
import BugReport from '@mui/icons-material/BugReport';
import GitHub from '@mui/icons-material/GitHub';
import Menu from '@mui/icons-material/Menu';
import People from '@mui/icons-material/People';

export default function Navbar() {
	let [expand, setExpand] = React.useState(false);
	return (
		<header className="navigation">
			<a className="navigation-title" href="/">
				XiaoYuanStudio
			</a>
			<div id="navigation-btn-group" data-expand={expand}>
				<a className="navigation-btn" href="/softwares">
					<Apps />
					软件
				</a>
				<a className="navigation-btn" href="/malwares">
					<BugReport />
					病毒
				</a>
				<a className="navigation-btn" href="https://wj.qq.com/s2/9765478/b490" target="_blank" rel="noreferrer">
					<People />
					加入我们
				</a>
				<a className="navigation-btn" href="https://github.com/xystd" target="_blank" rel="noreferrer">
					<GitHub />
					GitHub
				</a>
			</div>
			<div className="flex-expand"></div>
			<div
				className="navigation-btn"
				id="navigation-expand"
				onClick={() => {
					setExpand(!expand);
				}}
			>
				<Menu />
			</div>
		</header>
	);
}
