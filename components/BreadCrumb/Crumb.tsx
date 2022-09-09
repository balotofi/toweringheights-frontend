import {
    Flex,
    Icon,
    Link as ChakraLink, 
    Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { crumbIcon } from '../../theme/components/iconStyles'

const Crumb = ({href, last = false, newText}: ICrumbProps) => {
    
    if(last) {
        return (
            <Text color="font.200"  m={'0 !important'}> {newText} </Text>
        )
    }

    return (
        <Flex align='center'> 
            <Link href={href} passHref>
                <ChakraLink  variant='crumb'> {newText} </ChakraLink>
            </Link>
            <Icon 
                as={MdOutlineKeyboardArrowRight} 
                sx={crumbIcon}
            />
        </Flex>
    )
}

export default Crumb

// const transformPath= (str: string) => {
//     let arr: string[] = str.toLowerCase().split(' ')
//     for (let i = 0; i < arr.length; i++) {
//          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
//     }
//     return arr.join(' ')
// }

// const transformLabel = (str: string, newText: string) => {
//     const label = str.replace(str, newText)
//     return transformPath(label)
// }