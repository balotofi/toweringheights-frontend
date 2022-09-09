import { AspectRatio, VStack, Heading, Box } from "@chakra-ui/react"
import { smallHeadingBorder } from "../../theme/components/boxStyles"
import { findUsHeading } from "./style"

const MapDetails = () => {
    return (
        <VStack gap={4}>
            <VStack>
                <Heading as='h2' variant='h2' sx={findUsHeading}>How to find us</Heading>
                <Box sx={smallHeadingBorder} bg='brand.200' />
            </VStack>
            <AspectRatio 
                position={'relative'} 
                width={{base: "300px", md: "650px", lg: "800px" }} 
                h={{base: "450px", md: "650px"}}
            >
                <iframe 
                    title="School Location On the Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0451142382676!2d5.2367228143189966!3d7.235694516482386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047911e388d428b%3A0x4d0f13c5bcef0489!2sTowering%20Heights%20schools%20Akure!5e0!3m2!1sen!2sng!4v1662739508842!5m2!1sen!2sng" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
                />
            </AspectRatio>
        </VStack>
    )
}

export default MapDetails
