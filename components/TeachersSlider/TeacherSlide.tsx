import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react"

const TeacherSlide = ({...staff}) => {
    return (
        <Flex direction='column' m='2rem 0' align='center' id={staff.id}>
            <Image
                borderRadius='full'
                boxSize='120px'
                src='https://bit.ly/dan-abramov'
                alt={staff.name}
                position='absolute'
            />
            <Box
                w='250px'
                h='185px'
                bg='white'
                borderRadius='xl'
                mt='60px'
            >
                <Heading 
                    as='h5' 
                    fontWeight='bold' 
                    fontSize='xl' 
                    lineHeight='34.5px' 
                    color='black' 
                    textAlign='center'
                    m='4.5rem 0 0.5rem'
                >
                    {staff.name}
                </Heading>
                <Text textAlign='center' color='brand.300' fontWeight='normal' lineHeight='21.3px' >{staff.role}</Text>
            </Box>
        </Flex>
    )
}

export default TeacherSlide