import React from 'react';
import Bg from '../images/Ocean.jpg';
export default function Join() {
	return (
		<React.Fragment>
			<div className="title-group" style={{ color: 'rgb(0, 56, 90)' }}>
				<h1 className="title">加入我们</h1>
				<h1 className="subtitle">让我们一起营造更好的未来ヾ(≧▽≦*)</h1>
			</div>
			<a href="//jq.qq.com/?_wv=1027&k=QhPjjFqS" className="join-a" target="_blank" rel="noreferrer">
				<div className="join-bg" style={{ backgroundImage: 'url(' + Bg + ')' }}>
					<div className="title-group">
						<h1 className="title">和优秀的人 做有挑战的事</h1>
						<h1 className="subtitle"> J o i n X i a o Y u a n S t d</h1>
						<h1 className="subtitle">立即加入</h1>
					</div>
				</div>
			</a>
		</React.Fragment>
	);
}
