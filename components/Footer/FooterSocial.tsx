import { Flex, Icon, Link } from "@chakra-ui/react"
import { whiteIcon } from "../../theme/components/iconStyles"
import { flexStyle } from "./style"

const FooterSocial = ({ href, text, icon }: IFooterSocial) => {
	return (
		<Flex sx={flexStyle}>
			<Icon as={icon} sx={whiteIcon} />
			<Link
				href={href}
				isExternal
				sx={{
					fontSize: "sm",
					mb: "1rem",
					_hover: {
						textDecoration: "none",
						color: "font.200",
					},
				}}
			>
				{text}
			</Link>
		</Flex>
	)
}

export default FooterSocial
