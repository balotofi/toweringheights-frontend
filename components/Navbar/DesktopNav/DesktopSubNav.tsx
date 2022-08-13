import { Box, Link, Stack, Text } from "@chakra-ui/react"
import { NavProps } from "../../../types"

const DesktopSubNav = ({label, href }: NavProps) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            px={6}
            py={3}
            _hover={{
                textDecoration: 'none',
                bgColor: 'rgba(217, 217, 217, 0.3)',
                transition: 'all 0.5s ease-out'
            }}
        >
            <Stack
                direction={'row'}
            >
                <Box>
                    <Text color={'gray.100'}>{label}</Text>
                </Box>
            </Stack>
        </Link>
    )
}

export default DesktopSubNav