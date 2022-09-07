import { Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { MdLocationOn } from "react-icons/md"
import { ImPhone } from "react-icons/im"
import { whiteIcon } from "../../theme/components/iconStyles"
import { flexStyle } from "./style"

const FooterContactDetails = () => {
    return (
        <Flex direction='column' w={{md: '25%'}}>
            <Heading as='h4' variant='footerHeading'> Find Us </Heading>
            <Flex sx={flexStyle} >
                <Icon as={MdLocationOn} sx={whiteIcon} />
                <Text variant='footer' className='paragraph'>
                    Afrostuff Estate,Alagbaka Extension, off Igbatoro road. 
                    Adjacent NIMC, Alagbaka, Akure.
                </Text>
            </Flex>
            <Flex sx={flexStyle}>
                <Icon as={ImPhone} sx={whiteIcon} />
                <Flex direction='column'>
                    <Text variant='footer' className='paragraph'>0814 266 5965</Text>
                    <Text variant='footer' className='paragraph'>0810 531 3377</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FooterContactDetails