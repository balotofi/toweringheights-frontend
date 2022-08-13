import { Stack, Heading, Flex, Box } from "@chakra-ui/react"
import DesktopSlider from "./DesktopSlider"
import MobileSlider from "./MobileSlider"

const Staffs = () => {

    return (
        <Stack bg='brand.400' py={8} px={4} >
            <Box>
                <Flex 
                    bgImage='/assets/blob_shape.svg' 
                    bgRepeat='no-repeat' 
                    //bgPosition='50px 0'
                    bgPosition='center'
                    height='105px'
                    justify='center'
                >
                    <Heading
                        as='h3'
                        fontSize='lg'
                        fontWeight='bold'
                        lineHeight='31px'
                        m=' 1rem 0.5rem'
                        textAlign='center'
                    >
                        Meet Our Team
                    </Heading>
                </Flex>
                <Flex 
                    align='center'
                    justify='space-around'
                    bgImage='/assets/big_blob_shape.svg'
                    bgRepeat='no-repeat'
                    bgPosition='bottom right'
                    display={{base: 'flex', md: 'none'}}
                    my={4}
                    position='relative'
                    h='350px'
                >
                    <MobileSlider />
                </Flex>
                <Flex 
                    align='center'
                    justify='space-around'
                    bgImage='/assets/big_blob_shape.svg'
                    bgRepeat='no-repeat'
                    bgPosition='bottom right'
                    display={{base: 'none', md: 'flex'}}
                    my={4}
                    position='relative'
                    h='350px'
                >
                    <DesktopSlider />
                </Flex>
            </Box>
        </Stack>
    )
}

export default Staffs