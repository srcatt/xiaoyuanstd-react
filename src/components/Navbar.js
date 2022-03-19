import { React } from 'react';
import Apps from '@mui/icons-material/Apps';
import BugReport from '@mui/icons-material/BugReport';
import GitHub from '@mui/icons-material/GitHub';
import Menu from '@mui/icons-material/Menu';

export default function Navbar() {
	function ExpandDrawer() {
		const navigationBtnGroup = document.getElementById('navigation-btn-group');
		if (navigationBtnGroup.dataset.expand === 'false') {
			navigationBtnGroup.dataset.expand = 'true';
		} else {
			navigationBtnGroup.dataset.expand = 'false';
		}
	}

	return (
		<header className="navigation">
			<a className="navigation-title" href="/">
				XiaoYuanStudio
			</a>
			<div id="navigation-btn-group" data-expand="false">
				<a className="navigation-btn" href="/softwares">
					<Apps />
					软件
				</a>
				<a className="navigation-btn" href="/malwares">
					<BugReport />
					病毒
				</a>
				<a className="navigation-btn" href="https://github.com/xystd" target="_blank" rel="noreferrer">
					<GitHub />
					GitHub
				</a>
			</div>
			<div className="flex-expand"></div>
			<div className="navigation-btn" id="navigation-expand" onClick={ExpandDrawer}>
				<Menu />
			</div>
		</header>
	);
}
