import {
    Container,
    Heading,
    Box,
    Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import Activity from './Activity'
import { activities } from '../../data'

const Activities = () => {    

    return (
        <Container p='1.5rem 2rem'>
            <Heading as='h3' color='font.300' fontSize='lg' fontWeight='semibold' pb='0.3rem'>Our Activities</Heading>
            <Box w='74px' h='4px' borderRadius='25px' bg='#747474'/>
            {activities.map((activity) => (
                <Activity key={activity.id} alt={activity.alt} summary={activity.summary} heading={activity.heading} />
            ))}
            <Link href='/' passHref>
                <ChakraLink 
                    color='brand.300' 
                    fontWeight='bold' 
                    pb='0.2rem' 
                    borderBottom='1px'
                >
                    View More
                </ChakraLink>
            </Link>
        </Container>
    )
}

export default Activities