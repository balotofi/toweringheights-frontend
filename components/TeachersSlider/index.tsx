import { Container, Heading, Flex, Box, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import Animation from "./Animation"
import BtnSlider from "./BtnSlider"
import { staffs } from "../../data"

const TeachersSlider = () => {

    const [slideIdx, setSlideIdx] = useState(1)

    const nextSlide = () => {
        if ( slideIdx !== staffs.length ){
            setSlideIdx(slideIdx + 1)
        } else if ( slideIdx === staffs.length ){
            setSlideIdx(1)
        }
    }

    const prevSlide = () => {
        if ( slideIdx !== 1) {
            setSlideIdx(slideIdx - 1)
        } else if ( slideIdx === 1 ){
            setSlideIdx(staffs.length)
        }
    }

    return (
        <Container bg='brand.400' padding='1rem 2rem' h='1050px'>
            <Animation />
            <Box position='relative'>
                <Heading 
                    as='h3'
                    fontSize='lg'
                    fontWeight='bold'
                    lineHeight='31px'
                    m='0.5rem'
                    textAlign='center'
                    position='relative'
                >
                    Meet Our Team
                </Heading>
                <Flex mt='3rem' align='center' position='relative' justify='space-around'>
                    <BtnSlider direction="left" action={prevSlide} />
                    <Box w='300px' overflow='hidden' >
                        {staffs.map(((staff, idx) => (
                            <Flex 
                                position='absolute'
                                direction='column' 
                                m='2rem 0' 
                                align='center' 
                                key={staff.id}
                                opacity={slideIdx === idx+1 ? '1' : '0'}
                            >
                                <Image
                                    borderRadius='full'
                                    boxSize='120px'
                                    src='https://bit.ly/dan-abramov'
                                    alt={staff.name}
                                    position='absolute'
                                    display={slideIdx === idx+1 ? 'block' : 'none'}
                                />
                                <Box
                                    w='230px'
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
                                    <Text textAlign='center' color='brand.300' fontWeight='normal' lineHeight='21.3px' mb='2.5rem' >{staff.role}</Text>
                                </Box>
                            </Flex>
                        )))}
                    </Box>
                    <BtnSlider direction="right" action={nextSlide} />
                </Flex>
            </Box>
        </Container>
    )
}

export default TeachersSlider