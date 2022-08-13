import {
    Flex,
    HStack,
    Icon,
    Link as ChakraLink, 
    Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

interface crumbProps {
    text: string,
    last: boolean,
    href: string,
}

const Crumb = ({text, href, last = false}: crumbProps) => {

    if(last) {
        return (
            <Text color="font.200"  m={'0 !important'} >{text}</Text>
        )
    }

    return (
        <HStack align='center'>
            <Link href={href} passHref>
                <ChakraLink
                    color='brand.300'
                    textDecoration='none'
                    transition='all 0.25s ease-in-out'
                    _hover={{
                        color: '#1768c1'
                    }}
                >
                    {text}
                </ChakraLink>
            </Link>
            <Icon 
                as={MdOutlineKeyboardArrowRight} 
                mx={'1 !important'} 
                pt={'0.5'}
                color='font.200' 
                w={5} 
                h={5} 
            />
        </HStack>
    )
}

export default Crumb