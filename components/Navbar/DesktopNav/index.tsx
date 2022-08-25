import { 
    Box, 
    Link, 
    Popover, 
    PopoverArrow, 
    PopoverContent, 
    PopoverTrigger, 
    Stack 
} from "@chakra-ui/react"
import { navItems } from "../../../data"
import DesktopSubNav from "./DesktopSubNav" 
import { popOverContent } from './style'

const DesktopNav = () => {
    return (
        <Stack direction='row'>
            {navItems.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger="hover">
                        <PopoverTrigger>
                            <Link href={navItem.href ?? '#'} variant='big-nav-links' py={6} px={8} textTransform='uppercase'>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>
                        {navItem.children && (
                            <PopoverContent sx={popOverContent}>
                                <PopoverArrow bg={'brand.300'} />
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

export default DesktopNav