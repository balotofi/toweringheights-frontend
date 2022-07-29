import {
    Container,
    Heading,
    Box,
    Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import Activity from './Activity'

interface ActivityProps {
    id: number,
    alt: string,
    heading: string,
    summary: string,
}

const activities: ActivityProps[] = [
    {
        id: 1,
        alt: "Games and entertainment",
        heading: "Games & Entertainment",
        summary: "Sports impact our culture,other sources of entertainment and our economy.They help in physical and mental growth and also contribute to the formation of character generally."
    }, {
        id: 2,
        alt: "Art and creativity",
        heading: "Art & Creativity",
        summary: "Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."
    }, 
    // {
    //     id: 3,
    //     alt: "Art and creativity",
    //     heading: "Art & Creativity",
    //     summary: "Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."
    // }, {
    //     id: 4,
    //     alt: "Games and entertainment",
    //     heading: "Games & Entertainment",
    //     summary: "Sports impact our culture,other sources of entertainment and our economy.They help in physical and mental growth and also contribute to the formation of character generally."
    // }
]

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