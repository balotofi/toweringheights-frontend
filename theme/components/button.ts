import type { ComponentStyleConfig } from "@chakra-ui/theme"

const Button: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: "medium",
		transition: "all 0.3s ease-in-out",
		borderRadius: "lg",
		border: "1px solid",
		borderColor: "brand.300",
	},
	sizes: {
		sm: {
			fontSize: "sm",
		},
		md: {
			fontSize: "md",
		},
		lg: {
			fontSize: "lg",
			lineHeight: 6,
		},
	},
	variants: {
		subNewsletter: {
			borderRadius: 0,
			border: "none",
			w: "100%",
			h: "100%",
			bg: "brand.300",
			_hover: {
				bg: "brand.200",
			},
		},
		iconButton: {
			border: "2px solid",
			boderColor: "brand.300",
			bg: "transparent",
			colorScheme: "blue",
		},
		staffCardBtn: {
			border: "none",
			bg: "transparent",
		},
		outline: {
			borderColor: "white",
			color: "white",
			bg: "transparent",
			colorScheme: "blue",
			_hover: {
				bg: "white",
				color: "font.300",
			},
		},
		solid: {
			bg: "brand.300",
			color: "white",
			fontWeight: "semibold",
			colorScheme: "blue",
			_hover: {
				bg: "transparent",
				color: "brand.300",
				border: "1px solid",
				borderColor: "brand.300",
			},
		},
		ghost: {
			border: "none",
			bg: "transparent",
			color: "font.300",
		},
		inputFile: {
			px: 2,
			background: "white",
			borderRadius: "md",
			color: "font.300",
			fontWeight: "normal",
			fontSize: "xs",
			border: "2px solid",
			borderColor: "white",
		},
	},
	defaultProps: {
		size: "md",
		variant: "solid",
	},
}

export default Button
