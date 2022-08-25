import { Text, Heading, VStack, Flex, Icon } from "@chakra-ui/react"
import { ImPhone } from "react-icons/im"
import { MdLocationOn, MdEmail } from "react-icons/md"
import { blueIcon } from '../../theme/components/iconStyles'
import { flexStyle } from './style'

const ContactDetails = () => {
    return (
        <VStack gap={4} w={{md: '45%'}} align='start'>
            <Heading as='h2' variant='h2' textTransform={'uppercase'}>Contact Details</Heading>
            <Text>
                You can always reach us via following contact details.
                 We will give our best to reach you as possible.
            </Text>
            <Flex sx={flexStyle}>
                <Icon as={ImPhone} sx={blueIcon} />
                <Text>+234 805 029 1265 , +234 907 228 0656</Text>
            </Flex>
            <Flex sx={flexStyle}>
                <Icon as={MdEmail} sx={blueIcon} />
                <Text>toweringheightsschools@gmail.com</Text>
            </Flex>
            <Flex sx={flexStyle}>
                <Icon as={MdLocationOn} sx={blueIcon} />
                <Text>
                    Afro stuff estate Alagbaka extension,<br/> 
                    Off Igbatoro Road, <br/>
                    Adjacent National Identity Management Commission,<br/>
                    South, Akure.
                </Text>
            </Flex>
        </VStack>
    )
}

export default ContactDetails