import { Heading, Flex, Box, Image, Text, Button, Icon } from "@chakra-ui/react"
import { RiWhatsappLine } from "react-icons/ri"
import { MdMailOutline } from "react-icons/md"
import { useState } from "react"
import BtnSlider from "./BtnSlider"
import { staffs } from "../../data"

const MobileSlider = () => {

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
        <>
            <BtnSlider direction="left" action={prevSlide} />
                <Flex 
                    overflow='hidden' 
                    justify='space-around'
                >
                    {staffs.map(((staff, idx) => (
                        <Flex 
                            position={slideIdx === idx+1 ? 'static' : 'absolute'}
                            direction='column' 
                            align='center' 
                            key={idx}
                            opacity={slideIdx === idx+1 ? '1' : '0'}
                            boxShadow='0px 10px 20px rgba(0, 122, 255, 0.1)'
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
                                <Text textAlign='center' color='brand.300' fontWeight='normal' lineHeight='21.3px' mb={4} >{staff.role}</Text>
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
            <BtnSlider direction="right" action={nextSlide} />
        </>
    )
}

export default MobileSlider