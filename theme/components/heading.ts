import type { ComponentStyleConfig } from "@chakra-ui/theme"

const Heading: ComponentStyleConfig = {
	baseStyle: {
		lineHeight: 7,
	},

	variants: {
		logoHeading: {
			lineHeight: 10,
			textTransform: "uppercase",
			color: "brand.300",
			fontWeight: "bold",
			fontSize: "1.6rem",
		},
		h2: {
			fontWeight: "bold",
			fontSize: "2xl",
			lineHeight: 7,
		},
		h3: {
			fontSize: "2xl",
			fontWeight: "bold",
			letterSpacing: "wide",
			lineHeight: 7,
			pb: 1.5,
		},
		h4: {
			fontSize: "2xl",
			fontWeight: "semibold",
			textAlign: "center",
			lineHeight: 7,
			mb: 8,
		},
		h5: {
			fontSize: "lg",
			color: "brand.300",
			fontWeight: "semibold",
		},
		footerHeading: {
			fontSize: "xl",
			color: "brand.300",
			fontWeight: "bold",
			mb: 4,
		},
	},
}

export default Heading
