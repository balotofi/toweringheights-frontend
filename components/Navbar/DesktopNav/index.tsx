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

const DesktopNav = () => {
    return (
        <Stack direction='row'>
            {navItems.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger="hover">
                        <PopoverTrigger>
                            <Link
                                href={navItem.href ?? '#'}
                                color='white'
                                p={6}
                                py={{xl: '1.5rem'}}
                                px={{xl: '2rem'}}
                                fontSize={{md: 'md', xl: 'lg' }}
                                fontWeight='medium'
                                textTransform={'uppercase'}
                                transition={'all 0.25s ease-in'}
                                _hover={{
                                    textDecoration: 'none',
                                    bgColor: 'rgba(217, 217, 217, 0.3)',
                                    fontWeight: '500'
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>
                        {navItem.children && (
                            <PopoverContent
                                border={1}
                                minW='3xs'
                                boxShadow='xl'
                                bgColor='brand.300'
                                py={1}
                                borderRadius='md'
                                //rounded='small'
                            >
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