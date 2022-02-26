import React from 'react';
import TaskMgrImg from '../../images/TaskMgrPlus/1.png';

export default function TaskMgrPlus() {
	return (
		<React.Fragment>
			<div className="title-group centered" style={{ color: 'rgb(0, 56, 90)' }}>
				<h1 className="title">TaskMgr+</h1>
				<h1 className="subtitle">打破传统。</h1>
			</div>

			<section className="section section-hero" style={{ backgroundImage: 'url(' + TaskMgrImg + ')' }}>
				<a className="section-content section-content-mini" href="/unready" target="_blank" rel="noreferrer">
					<div className="title-group" style={{ color: '#FFFFFF' }}>
						<h1 className="subtitle">下载</h1>
						<h1 className="title">TaskMgr+</h1>
					</div>
				</a>
			</section>
		</React.Fragment>
	);
}
