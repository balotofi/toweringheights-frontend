import { CSSProperties } from "react"
import bgFooter from "../../assets/group_img/footer.jpg"

export const footerImageBox = {
	backgroundImage: `url(${bgFooter.src})`,
	backgroundRepeat: "no-repeat",
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
	mb: 5,
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

export const footerSocialStyle = {
	fontSize: "sm",
	_hover: {
		textDecoration: "none",
		color: "font.200",
	},
}
