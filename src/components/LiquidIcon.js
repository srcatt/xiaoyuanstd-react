export default function LiquidIcon({ fill = '#FFFFFF', onClick = null, width = '128' }) {
	return (
		<svg
			id="app"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={width}
			viewBox="0 0 128 128"
			fill={fill}
			onClick={onClick}
		>
			<path d="M0,64C0,12.8,12.8,0,64,0s64,12.8,64,64-12.8,64-64,64S0,115.2,0,64" />
			<rect width="64" height="64" transform="translate(64 64)" />
		</svg>
	);
}
