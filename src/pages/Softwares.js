import React from 'react';
import JiyuTaken from '../images/JiyuTaken/1.png';
import JiyuBC from '../images/JiyuBC/1.png';
import TaskMgrPlus from '../images/TaskMgrPlus/1.png';

export default function Softwares() {
	return (
		<React.Fragment>
			<div className="title-group" style={{ color: 'rgb(0, 56, 90)' }}>
				<h1 className="title">软件</h1>
				<h1 className="subtitle">一些我们制作的工具。</h1>
			</div>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + JiyuTaken + ')' }}>
				<a className="section-content section-content-mini" href="/softwares/jiyu">
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="title">极域反控助手</h1>
						<h1 className="subtitle">让你的信息课不再被拘束。</h1>
					</div>
				</a>
			</section>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + TaskMgrPlus + ')' }}>
				<a className="section-content section-content-mini" href="/softwares/taskmgr">
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="title">TaskMgr+</h1>
						<h1 className="subtitle">更好的任务管理器。</h1>
					</div>
				</a>
			</section>
		</React.Fragment>
	);
}
