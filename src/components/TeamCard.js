export default function TeamCard(props) {
	return (
		<div className="team-card">
			<img className="team-card-img" src={props.avatar} alt={props.name}></img>
			<div className="title-group">
				<h1 className="title team-title">{props.name}</h1>
				<h1 className="subtitle team-subtitle">{props.role}</h1>
			</div>
		</div>
	);
}
