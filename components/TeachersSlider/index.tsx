import { Container, Heading, Flex, Box, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
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
        <Container bg='brand.400' padding='1rem 2rem' >
            <Box>
                <Flex 
                    bgImage='/assets/blob_shape.svg' 
                    bgRepeat='no-repeat' 
                    bgPosition='50px 0'
                    height='105px'
                    justify='center'
                >
                    <Heading
                        as='h3'
                        fontSize='lg'
                        fontWeight='bold'
                        lineHeight='31px'
                        m=' 1rem 0.5rem'
                        textAlign='center'
                    >
                        Meet Our Team
                    </Heading>
                </Flex>
                <Flex 
                    align='center'
                    justify='space-around'
                    bgImage='/assets/big_blob_shape.svg'
                    bgRepeat='no-repeat'
                    bgPosition='bottom right'
                    h='350px'
                >
                    <BtnSlider direction="left" action={prevSlide} />
                    <Flex w='300px' overflow='hidden' >
                        {staffs.map(((staff, idx) => (
                            <Flex 
                                position='relative'
                                direction='column' 
                                align='center' 
                                key={staff.id}
                                opacity={slideIdx === idx+1 ? '1' : '0'}
                            >
                                <Image
                                    mb='-6.25rem'
                                    position='absolute'
                                    borderRadius='full'
                                    boxSize='120px'
                                    src='https://bit.ly/dan-abramov'
                                    alt={staff.name}
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
                    </Flex>
                    <BtnSlider direction="right" action={nextSlide} />
                </Flex>
            </Box>
        </Container>
    )
}

export default TeachersSlider