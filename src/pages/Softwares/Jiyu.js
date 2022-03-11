import React from 'react';
import SoftPage from '../../components/SoftPage';
import JiyuTaken1 from '../../images/JiyuTaken/1.png';
import JiyuTakenVid1 from '../../images/JiyuTaken/1.mp4';

export default function Jiyu() {
	return (
		<React.Fragment>
			<SoftPage
				title="极域反控助手"
				desc="让你的信息课不再被拘束。"
				dlimg={JiyuTaken1}
				link="https://wwn.lanzoul.com/iinxE00mvjsb"
			/>
			<section className="section verticle">
				<div className="title-group" style={{ color: 'rgb(0, 56, 90)' }}>
					<h1 className="title">集与一身</h1>
					<h1 className="subtitle">方便快捷</h1>
				</div>
				<div className="media-content">
					<video src={JiyuTakenVid1} autoPlay loop muted></video>
				</div>
				<div className="title-group" style={{ color: 'rgb(0, 56, 90)' }}>
					<h1 className="subtitle">不仅能反控，其他电脑也能被你控制，一切都在你的掌控之中。</h1>
				</div>
			</section>
		</React.Fragment>
	);
}
