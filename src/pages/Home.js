import React from 'react';
import TeamCard from '../components/TeamCard';
import Hero from '../images/JiyuTaken/1.png';
import OpenSource from '../images/open-source.png';

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
			<section className="section verticle" id="#about">
				<div className="title-group">
					<h1 className="title">关于我们</h1>
					<h1 className="subtitle">一群程序员，做我们喜爱的东西。</h1>
				</div>
				<div className="row">
					<TeamCard avatar="3627046040" name="小源151" role="室长" />
					<TeamCard avatar="255453798" name="LiChen" role="副室长" />
					<TeamCard avatar="2216878969" name="Leo" role="ohhhhhh" />
					<TeamCard avatar="2952558045" name="rsodxd" role="全栈程序员" />
					<TeamCard avatar="2156391386" name="Chils" role="软件开发" />
					<TeamCard avatar="2991266101" name="copi143" role="软件开发" />
				</div>
			</section>
			<section className="section section-hero" style={{ backgroundImage: 'url(' + OpenSource + ')' }}>
				<a
					className="section-content section-content-mini"
					href="https://github.com/xystd"
					target="_blank"
					rel="noreferrer"
				>
					<div className="title-group" style={{ color: '#ffffff' }}>
						<h1 className="title">做开源的事</h1>
						<h1 className="subtitle">部分源码开源在Github。</h1>
					</div>
				</a>
			</section>
		</React.Fragment>
	);
}
