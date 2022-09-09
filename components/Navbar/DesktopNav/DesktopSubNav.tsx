import ChakraNextLink from "../ChakraNextLink"
import { subLinkStyle } from "./style"

const DesktopSubNav = ({label, href }: NavProps) => {
    return (
        <ChakraNextLink href={href!} style={subLinkStyle}>
            {label}
        </ChakraNextLink>
    )
}

export default DesktopSubNav