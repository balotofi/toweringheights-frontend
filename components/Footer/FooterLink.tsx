import { 
    Link as ChakraLink,
} from "@chakra-ui/react"
import Link from "next/link"

const FooterLink = ({href, text}: IFooterLink) => {
    return (
        <Link href={href} passHref>
            <ChakraLink
                sx={{
                    mb:'1rem',
                    fontSize:'sm',
                    _hover: {
                        color: 'font.200'
                    }
                }}
            >
                {text}
            </ChakraLink>
        </Link>
    )
}

export default FooterLink