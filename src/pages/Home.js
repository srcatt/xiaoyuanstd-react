import image from '../images/JiyuTaken/1.png';
export default function Home() {
	return (
		<section className="section section-hero" style={{ backgroundImage: 'url(' + image + ')' }}>
			<a className="section-content" href="/softwares/jiyu">
				<div className="title-group" style={{ color: '#ffffff' }}>
					<h1 className="subtitle">隆重介绍</h1>
					<h1 className="title">极域反控助手</h1>
					<h1 className="subtitle">让你的信息课不再孤单</h1>
				</div>
			</a>
		</section>
	);
}
