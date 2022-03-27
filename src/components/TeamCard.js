export default function TeamCard({ avatar, name, role }) {
	return (
		<div className="team-card">
			<img className="team-card-img" src={'https://q1.qlogo.cn/g?b=qq&nk=' + avatar + '&s=640'} alt={name}></img>
			<div className="title-group">
				<h1 className="title team-title">{name}</h1>
				<h1 className="subtitle team-subtitle">{role}</h1>
			</div>
		</div>
	);
}
