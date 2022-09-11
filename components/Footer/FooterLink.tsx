import ChakraNextLink from "../Navbar/ChakraNextLink"
import { footerLinkStyle } from "./style"

const FooterLink = ({ href, text }: IFooterLink) => {
	return (
		<ChakraNextLink href={href} style={footerLinkStyle}>
			{text}
		</ChakraNextLink>
	)
}

export default FooterLink
