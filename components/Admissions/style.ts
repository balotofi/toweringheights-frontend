export const admissionsBoxBtn = {
	display: "flex",
	flexDirection: "column",
	gap: 5,
	borderRadius: "xl",
	bg: "brand.300",
	w: "300px",
	h: "300px",
	boxShadow: "0px 0px 5px 3px #606474",
	transition: "1s transform",
	_hover: {
		transform: "scale(0.9)",
	},
	img: {
		borderTopRadius: "xl",
	},
}

export const actionsHeading = {
	color: "font.300",
	fontSize: "xl",
	fontWeight: "bold",
	lineHeight: 7,
	mb: 2,
}

export const roundBtn = {
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	gap: "1rem",
	alignItems: "center",
	borderRadius: "50%",
	bg: "brand.200",
	border: "2px solid #9fa1b1",
	color: "white",
	fontWeight: "semibold",
	w: "180px",
	h: "180px",
	boxShadow: "0px 0px 5px 5px #e7e8ef",
	transition: "1s transform",
	_hover: {
		transform: "scale(1.1)",
	},
}
