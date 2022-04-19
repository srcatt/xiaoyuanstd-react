import React from 'react';
import Hero from '../images/JiyuTaken/1.png';
import OpenSource from '../images/open-source.png';

export default function Home() {
	return (
		<React.Fragment>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + Hero + ')' }}>
				<a className="section-content section-content-mini" href="/softwares">
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="title">软件</h1>
						<h1 className="subtitle">一些我们制作的工具。</h1>
					</div>
				</a>
			</section>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + Hero + ')' }}>
				<a className="section-content section-content-mini" href="/softwares">
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="title">关于我们</h1>
						<h1 className="subtitle">在此处查看团队的简介。</h1>
					</div>
				</a>
			</section>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + OpenSource + ')' }}>
				<a
					className="section-content section-content-mini"
					href="https://github.com/xystd"
					target="_blank"
					rel="noreferrer"
				>
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="title">开源社区</h1>
						<h1 className="subtitle">部分源码开源在Github。</h1>
					</div>
				</a>
			</section>
		</React.Fragment>
	);
}
