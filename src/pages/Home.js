import React from 'react';
import TeamCard from '../components/TeamCard';
import Hero from '../images/JiyuTaken/1.png';
import XiaoYuan from '../images/peoples/xiaoyuan.jpg';
import LiChen from '../images/peoples/lichen.jpg';
import Leo from '../images/peoples/leo.jpg';
import rsodxd from '../images/peoples/rsodxd.png';

export default function Home() {
	return (
		<React.Fragment>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + Hero + ')' }}>
				<a className="section-content" href="/softwares">
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="title">软件</h1>
						<h1 className="subtitle">一些我们制作的工具。</h1>
					</div>
				</a>
			</section>
			<section className="section verticle">
				<div className="title-group">
					<h1 className="title">关于我们</h1>
					<h1 className="subtitle">团队成员</h1>
				</div>
				<div className="row">
					<TeamCard avatar={XiaoYuan} name="小源151" role="室长" />
					<TeamCard avatar={LiChen} name="LiChen" role="副室长" />
					<TeamCard avatar={Leo} name="Leo" role="ohhhhhh" />
					<TeamCard avatar={rsodxd} name="rsodxd" role="全栈程序员" />
				</div>
			</section>
		</React.Fragment>
	);
}
