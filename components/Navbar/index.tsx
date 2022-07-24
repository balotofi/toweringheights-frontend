import { 
    Box
} from "@chakra-ui/react"
import Nav from "./Nav"
import LogoNav from "./LogoNav"

const Navbar = () => {
    return (
        <Box maxH='18.125rem'>
            <LogoNav />
            <Nav />
        </Box>
    )
}

export default Navbar