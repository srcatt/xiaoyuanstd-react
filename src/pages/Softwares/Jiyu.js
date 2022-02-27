import React from 'react';
import JiyuTaken1 from '../../images/JiyuTaken/1.png';
import JiyuTakenVid1 from '../../images/JiyuTaken/1.mp4';

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
			<section className="section verticle">
				<div className="title-group" style={{ color: 'rgb(0, 56, 90)' }}>
					<h1 className="title">集与一身</h1>
					<h1 className="subtitle">方便快捷。</h1>
				</div>
				<div className="media-content">
					<video src={JiyuTakenVid1} autoPlay loop muted></video>
				</div>
				<div className="title-group" style={{ color: 'rgb(0, 56, 90)' }}>
					<h1 className="subtitle">insert text</h1>
				</div>
			</section>
		</React.Fragment>
	);
}
