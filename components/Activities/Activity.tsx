import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
import { boxStyle, flexStyle } from './style'

const Activity = ({...activity}) => {
    return (
        <Flex id={activity.id} sx={flexStyle}>
           <Box sx={boxStyle}>
                <Image
                    width={900}
                    height={600}
                    src={activity.img}
                    alt={activity.alt}
                    priority={true}
                />
           </Box>
            <Box>
                <Heading as='h4' variant='h2' mt='1.8rem' mb='1.5rem' fontSize={{base: 'xl', md: 'md'}} >
                    {activity.heading}
                </Heading>
                <Text lineHeight={7} className='paragraph'>{activity.summary}</Text>
            </Box>
        </Flex>
    )
}

export default Activity