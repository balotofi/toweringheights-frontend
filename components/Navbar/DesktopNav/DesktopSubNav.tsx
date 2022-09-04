import { Box, Link, Stack, Text } from "@chakra-ui/react"

const DesktopSubNav = ({label, href }: NavProps) => {
    return (
        <Link href={href} role={'group'} variant='bigNavLinks' display={'block'} px={6} py={3}>
            <Stack direction={'row'}>
                <Box>
                    <Text color={'gray.100'}>{label}</Text>
                </Box>
            </Stack>
        </Link>
    )
}

export default DesktopSubNav