import { Flex, Icon, Link } from "@chakra-ui/react"
import { whiteIcon } from "../../theme/components/iconStyles"
import { flexStyle, footerSocialStyle } from "./style"
import { motion } from "framer-motion"
import { footerLinkVariants } from "./Animation"

const FooterSocial = ({ href, text, icon }: IFooterSocial) => {
	return (
		<motion.div
			variants={footerLinkVariants}
			initial="hidden"
			whileInView="show"
		>
			<Flex sx={flexStyle}>
				<Icon as={icon} sx={whiteIcon} />
				<Link href={href} isExternal sx={footerSocialStyle}>
					{text}
				</Link>
			</Flex>
		</motion.div>
	)
}

export default FooterSocial
