import { Heading, Flex, Box, Image, Text, Button, Icon } from "@chakra-ui/react"
import { RiWhatsappLine } from "react-icons/ri"
import { MdMailOutline } from "react-icons/md"
import { useState } from "react"
import BtnSlider from "./BtnSlider"
import { staffsArray } from "../../data"

const DesktopSlider = () => {

    const [slideIdx, setSlideIdx] = useState(1)

    const nextSlide = () => {
        if ( slideIdx !== staffsArray.length ){
            setSlideIdx(slideIdx + 1)
        } else if ( slideIdx === staffsArray.length ){
            setSlideIdx(1)
        }
    }

    const prevSlide = () => {
        if ( slideIdx !== 1) {
            setSlideIdx(slideIdx - 1)
        } else if ( slideIdx === 1 ){
            setSlideIdx(staffsArray.length)
        }
    }

    return (
        <>
            <BtnSlider direction="left" action={prevSlide} />
            {staffsArray.map((staff, index) => (
                <Flex 
                    key={index}
                    overflow='hidden' 
                    justify='space-around'
                    gap={{md: '4', lg: '8'}}
                    display={slideIdx === index + 1 ? 'flex': 'none'}
                >
                    {staff.child.map(((staff, idx) => (
                        <Flex 
                            position='relative'
                            direction='column' 
                            align='center' 
                            key={idx}
                            boxShadow='0px 10px 20px rgba(0, 122, 255, 0.1)'
                        >
                            <Image
                                mb='-6.25rem'
                                position='absolute'
                                borderRadius='full'
                                boxSize='120px'
                                src='https://bit.ly/dan-abramov'
                                alt={staff.name}
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
                                <Text textAlign='center' color='brand.300' fontWeight='normal' lineHeight='21.3px' mb={4}>{staff.role}</Text>
                                <Flex mb={4} justify='center' gap={2}>
                                    <Button size='md' bg='transparent'>
                                        <Icon as={RiWhatsappLine} w={{base:'5', md: '7'}} h={{base:'5', md: '7'}} />
                                    </Button>
                                    <Button size='md' bg='transparent'>
                                        <Icon as={MdMailOutline} w={{base:'5', md: '7'}} h={{base:'5', md: '7'}} />
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
                    )))}
                </Flex>
            ))}

            <BtnSlider direction="right" action={nextSlide} />
        </>
    )

}

export default DesktopSlider