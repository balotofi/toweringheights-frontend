import { Stack } from "@chakra-ui/react"
import { navItems } from "../../../data"
import MobileNavItem from "./MobileNavItem"

const MobileNav = () => {
    return (
        <Stack bg='brand.300' p={4} display={{ md: 'none'}}>
            {navItems.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

export default MobileNav