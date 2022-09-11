import { CSSProperties } from "react"

export const flexStyle = {
	py: 2,
	px: 1,
	justifyContent: "space-between",
	alignItems: "center",
	borderBottom: "1px solid",
	borderColor: "gray.300",
	transition: "all 0.5s ease-in-out",
	_hover: {
		textDecoration: "none",
		bgColor: "rgba(217, 217, 217, 0.3)",
	},
}

export const dropDownIcon = {
	color: "white",
	transition: "all .3s ease-in-out",
	w: 5,
	h: 5,
}

export const subLinkStyle: CSSProperties = {
	fontSize: "0.875rem",
	color: "white",
	padding: "0.5rem 0",
}
