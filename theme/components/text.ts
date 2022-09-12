import { ComponentStyleConfig } from "@chakra-ui/react"

const Text: ComponentStyleConfig = {
	baseStyle: {
		color: "font.300",
		lineHeight: 6,
		fontWeight: "medium",
	},
	variants: {
		footer: {
			color: "white",
			lineHeight: 7,
			fontSize: "sm",
		},
		footerImageText: {
			lineHeight: 7,
			color: "#ffffffa3",
			textAlign: "center",
			mb: "1.2rem",
		},
		staffLabel: {
			color: "brand.300",
			mb: 4,
			textAlign: "center",
		},
		vacancyDetail: {
			color: "font.300",
			lineHeight: 6,
			fontSize: "sm",
		},
	},
}

export default Text
