import ChakraNextLink from "../ChakraNextLink"
import { subLinkStyle } from "./style"

const DesktopSubNav = ({ label, href }: NavProps) => {
	return (
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		<ChakraNextLink href={href!} style={subLinkStyle}>
			{label}
		</ChakraNextLink>
	)
}

export default DesktopSubNav
