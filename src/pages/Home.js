import image from '../images/JiyuTaken/1.png';
export default function Home() {
	return (
		<section className="section section-hero" style={{ backgroundImage: 'url(' + image + ')' }}>
			<a className="section-content" href="/softwares">
				<div className="title-group" style={{ color: '#ffffff' }}>
					<h1 className="title">软件</h1>
					<h1 className="subtitle">一些我们制作的工具。</h1>
				</div>
			</a>
		</section>
	);
}
