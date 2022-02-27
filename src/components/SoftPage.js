import React from 'react';

export default function SoftPage(props) {
	return (
		<React.Fragment>
			<div className="title-group centered" style={{ color: 'rgb(0, 56, 90)' }}>
				<h1 className="title">{props.title}</h1>
				<h1 className="subtitle">{props.desc}</h1>
			</div>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + props.dlimg + ')' }}>
				<a className="section-content section-content-mini" href={props.link} target="_blank" rel="noreferrer">
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="subtitle">下载</h1>
						<h1 className="title">{props.title}</h1>
					</div>
				</a>
			</section>
		</React.Fragment>
	);
}
