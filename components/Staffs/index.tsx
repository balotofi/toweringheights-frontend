import { Stack, Heading, Flex, Box } from "@chakra-ui/react"
import DesktopSlider from "./DesktopSlider"
import MobileSlider from "./MobileSlider"
import { flexHeading, sliderFlex } from "./style"

const Staffs = () => {

    return (
        <Stack bg='brand.500' py={8} px={4} >
            <Box>
                <Flex sx={flexHeading}>
                    <Heading as='h3' variant='h3' mt={4}>
                        Meet Our Team
                    </Heading>
                </Flex>
                <Flex sx={sliderFlex} display={{base: 'flex', md: 'none'}}>
                    <MobileSlider />
                </Flex>
                <Flex sx={sliderFlex} display={{base: 'none', md: 'flex'}}>
                    <DesktopSlider />
                </Flex>
            </Box>
        </Stack>
    )
}

export default Staffs