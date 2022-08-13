import {
    Stack,
    Heading,
    Box,
    Link as ChakraLink,
    Flex,
} from '@chakra-ui/react'
import Link from 'next/link'
import Activity from './Activity'
import { activities } from '../../data'

const Activities = () => {    

    return (
        <Stack py={6} px={8} align={{base: 'start', md:'center'}} gap={8} >
            <Flex direction='column' align='center'>
                <Heading as='h3' color='font.300' fontSize='lg' fontWeight='semibold' pb='0.3rem'>Our Activities</Heading>
                <Box w='74px' h='4px' borderRadius='3xl' bg='#747474'/>
            </Flex>
            <Flex direction={{base: 'column', md: 'row'}} gap='20px'>
                {activities.map((activity) => (
                    <Activity key={activity.id} alt={activity.alt} img={activity.img} summary={activity.summary} heading={activity.heading} />
                ))}
            </Flex>
            <Link href='/blog' passHref>
                <ChakraLink 
                    color='brand.300' 
                    fontWeight='bold' 
                    pb='0.2rem' 
                    borderBottom='1px'
                >
                    View More
                </ChakraLink>
            </Link>
        </Stack>
    )
}

export default Activities