import React from 'react';
import Downloadimg from '../../images/TaskMgrPlus/1.png';

export default function TaskMgr() {
	return (
		<React.Fragment>
			<div className="title-group centered" style={{ color: 'rgb(0, 56, 90)' }}>
				<h1 className="title">LEO出品 | TaskMgr + </h1>
				<h1 className="subtitle">现已开放下载链接</h1>
			</div>

			<section className="section section-hero" style={{ backgroundImage: 'url(' + Downloadimg + ')' }}>
				<a className="section-content" href="/softwares/jiyu">
					<div className="title-group" style={{ color: '#FFFFFF' }}>
						<h1 className="subtitle">立即下载</h1>
						<h1 className="title">TaskMgr+</h1>
					</div>
				</a>
			</section>
		</React.Fragment>
	);
}
