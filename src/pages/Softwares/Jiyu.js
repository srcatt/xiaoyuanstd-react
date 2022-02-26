import React from 'react';
import JiyuTaken1 from '../../images/JiyuTaken/1.png';
import JiyuTaken2 from '../../images/JiyuTaken/2.png';

export default function Jiyu() {
	return (
		<React.Fragment>
			<div className="title-group centered" style={{ color: 'rgb(0, 56, 90)' }}>
				<h1 className="title">极域反控助手</h1>
				<h1 className="subtitle">就点三下，砰！机房炸了。</h1>
			</div>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + JiyuTaken1 + ')' }}>
				<a
					className="section-content section-content-mini"
					href="https://wwn.lanzoul.com/iinxE00mvjsb"
					target="_blank"
					rel="noreferrer"
				>
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="subtitle">下载</h1>
						<h1 className="title">极域反控助手</h1>
					</div>
				</a>
			</section>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + JiyuTaken2 + ')' }}>
				<a className="section-content section-content-mini" href="/unready">
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="title">观看宣传片</h1>
						<h1 className="subtitle">用之前先看一眼。</h1>
					</div>
				</a>
			</section>
		</React.Fragment>
	);
}
