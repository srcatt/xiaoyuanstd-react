import React from 'react';
import TeamCard from '../components/TeamCard';

export default function Team() {
	return (
		<React.Fragment>
			<section className="section verticle" id="#about">
				<div className="title-group">
					<h1 className="title">关于我们</h1>
					<h1 className="subtitle">我们是一群热爱电脑的初中生.</h1>
				</div>
			</section>
			<div className="row">
				<TeamCard avatar="3627046040" name="小源151" role="室长" />
				<TeamCard avatar="255453798" name="LiChen" role="副室长" />
				<TeamCard avatar="2216878969" name="Leo" role="ohhhhhh" />
				<TeamCard avatar="2952558045" name="rsodxd" role="全栈程序员" />
				<TeamCard avatar="2156391386" name="Chils" role="软件开发" />
				<TeamCard avatar="2991266101" name="copi143" role="软件开发" />
				<TeamCard avatar="2224753101" name="江" role="软件开发" />
				<TeamCard avatar="3418672426" name="朱先森" role="技术支持" />
			</div>
		</React.Fragment>
	);
}
