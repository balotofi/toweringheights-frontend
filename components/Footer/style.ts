import { CSSProperties } from "react"

export const footerImageBox = {
	backgroundSize: "cover",
	backgroundPosition: "center",
	h: {
		base: "177px",
		md: "200px",
		lg: "250px",
	},
}

export const flexStyle = {
	color: "white",
	mb: 4,
	gap: 2.5,
	transition: "all 0.15s ease-in-out",
	_hover: {
		color: "font.200",
	},
}

export const newsLetterInputStyle = {
	border: "2px solid",
	fontWeight: "medium",
	color: "white",
	fontSize: "md",
	pl: 8,
	focusBorderColor: "brand.400",
	_placeholder: {
		color: "#ffffffa3",
		fontSize: "14px",
		fontWeight: "normal",
	},
}

export const footerLinkStyle: CSSProperties = {
	marginBottom: "1rem",
	fontSize: "0.875rem",
}
