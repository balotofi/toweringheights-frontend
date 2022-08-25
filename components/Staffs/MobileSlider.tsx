import { Heading, Flex, Box, Text, Button, Icon } from "@chakra-ui/react"
import Image from "next/image"
import { RiWhatsappLine } from "react-icons/ri"
import { MdMailOutline } from "react-icons/md"
import { useState } from "react"
import BtnSlider from "./BtnSlider"
import { staffs } from "../../data/staffs"
import { imageBox, contentBox, staffName } from "./style"

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
                <Flex overflow='hidden' justify='space-around'>
                    {staffs.map(((staff, idx) => (
                        <Flex 
                            key={idx} direction='column' align='center' 
                            opacity={slideIdx === idx+1 ? '1' : '0'}
                            position={slideIdx === idx+1 ? 'relative' : 'absolute'}
                        >
                            <Box sx={imageBox}>
                                <Image
                                    width={130}
                                    height={130}
                                    src={staff.img}
                                    alt={staff.name}
                                    priority= {true}
                                />
                            </Box>
                            <Box sx={contentBox}>
                                <Heading as='h5' sx={staffName}>
                                    {staff.name}
                                </Heading>
                                <Text variant='staff-label'>{staff.role}</Text>
                                <Flex mb={4} justify='center' gap={2}>
                                    <Button size='md' variant={'staff-card-btn'}>
                                        <Icon as={RiWhatsappLine} w={5} h={5} />
                                    </Button>
                                    <Button size='md' variant={'staff-card-btn'}>
                                        <Icon as={MdMailOutline} w={5} h={5} />
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