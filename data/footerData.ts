import { MdEmail, MdFacebook } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"

export const footerLinks: IFooterLink[] = [
	{
		href: "/",
		text: "Home",
	},
	{
		href: "/about_us",
		text: "About us",
	},
	{
		href: "/gallery",
		text: "Gallery",
	},
	{
		href: "/teachers",
		text: "Teachers",
	},
	{
		href: "/parents",
		text: "Parents",
	},
	{
		href: "/join_us",
		text: "Join us",
	},
	{
		href: "/contact_us",
		text: "Contact",
	},
]

export const footerSocials: IFooterSocial[] = [
	{
		href: "mailto:toweringheightsschools@gmail.com",
		icon: MdEmail,
		text: "Gmail",
	},
	{
		href: "https://m.facebook.com/toweringheightsng/",
		icon: MdFacebook,
		text: "Facebook",
	},
	{
		href: "https://wa.link/wgvjla",
		icon: IoLogoWhatsapp,
		text: "WhatsApp",
	},
]
