import {
    Flex,
    HStack,
    Icon,
    Link as ChakraLink, 
    Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { crumbIcon } from '../../theme/components/iconStyles'

interface crumbProps {
    text: string,
    last: boolean,
    href: string,
}

const Crumb = ({text, href, last = false}: crumbProps) => {

    if(last) {
        return (
            <Text color="font.200"  m={'0 !important'}> {text} </Text>
        )
    }

    return (
        <HStack align='center'>
            <Link href={href} passHref>
                <ChakraLink  variant='crumb'> {text} </ChakraLink>
            </Link>
            <Icon 
                as={MdOutlineKeyboardArrowRight} 
                sx={crumbIcon}
            />
        </HStack>
    )
}

export default Crumb