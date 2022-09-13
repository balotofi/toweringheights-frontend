import ChakraNextLink from "../Navbar/ChakraNextLink"
import { motion } from "framer-motion"
import { footerLinkStyle } from "./style"
import { footerLinkVariants } from "./Animation"

const FooterLink = ({ href, text }: IFooterLink) => {
	return (
		<motion.div
			variants={footerLinkVariants}
			initial="hidden"
			whileInView="show"
			whileHover="hover"
			style={footerLinkStyle}
		>
			<ChakraNextLink href={href}>{text}</ChakraNextLink>
		</motion.div>
	)
}

export default FooterLink
