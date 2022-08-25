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
import { smallHeadingBorder } from '../../theme/components/boxStyles'

const Activities = () => {    

    return (
        <Stack py={6} px={8} align={{base: 'start', md:'center'}} gap={6} >
            <Flex direction='column' align='center'>
                <Heading as='h3' variant='h3'>Our Activities</Heading>
                <Box bg='font.400' sx={smallHeadingBorder} />
            </Flex>
            <Flex direction={{base: 'column', md: 'row'}} gap={5} width={'100%'}>
                {activities.map((activity) => (
                    <Activity key={activity.id} alt={activity.alt} img={activity.img} summary={activity.summary} heading={activity.heading} />
                ))}
            </Flex>
            <Link href='/blog' passHref>
                <ChakraLink variant='view-more'>
                    View More
                </ChakraLink>
            </Link>
        </Stack>
    )
}

export default Activities