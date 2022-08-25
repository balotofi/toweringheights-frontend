import { Flex, Heading, Box, Text } from '@chakra-ui/react'
import { boxStyle } from './style'

const LatestUpdates = () => {
    return (
        <Flex bg='brand.200' direction='column' align='center' py={10} gap={4}>
          <Heading as='h3' color='white' variant='h3' m={4} display={{base: 'block', lg:'none'}}>Latest Updates</Heading>
          <Flex direction='row' flexWrap={'wrap'} justify='center' gap={8}>
            <Box sx={boxStyle}>
              <Heading variant='h4'>Admissions</Heading>
              <Text >Choosing the right school marks a new beginning in the life of your child. 
                Contact us as early as possible to have your child assessed and ready for school.</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading variant='h4'>Calendar</Heading>
              <Text>Terms, exams, holidays, keep up to date on what's hapenning when so you don't fall behind.</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading variant='h4'>Latest News</Heading>
              <Text>See firsthand news,updates and details about upcoming events and information.</Text>
            </Box>
          </Flex>
        </Flex>
    )
}

export default LatestUpdates