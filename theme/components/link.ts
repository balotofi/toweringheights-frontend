import type { ComponentStyleConfig } from "@chakra-ui/theme"

const Link: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: "medium",
		transition: "all 0.25s ease-in",
		textDecoration: "none",
		color: "white",
	},
	sizes: {
		md: {
			fontSize: "md",
		},
	},
	variants: {
		crumb: {
			color: "brand.300",
			_hover: {
				color: "#1768c1",
				textDecoration: "none",
			},
		},
		viewMore: {
			color: "brand.300",
			fontWeight: "bold",
			pb: "0.2rem",
			borderBottom: "1px",
		},
		staffCardLink: {
			color: "font.300",
			display: "flex",
			alignItems: "center",
		},
	},
}

export default Link
