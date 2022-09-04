import { Heading, Flex, Box, Text, Button, Icon } from "@chakra-ui/react"
import Image from "next/image"
import { RiWhatsappLine } from "react-icons/ri"
import { MdMailOutline } from "react-icons/md"
import { useState } from "react"
import BtnSlider from "./BtnSlider"
import { staffsArray } from "../../data/staffs"
import { imageBox, contentBox, staffName } from "./style"

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
                    key={index} gap={{md: '4', lg: '8'}} justify='space-around' overflow='hidden' 
                    display={slideIdx === index + 1 ? 'flex': 'none'}
                >
                    {staff.child.map(((staff, idx) => (
                        <Flex key={idx} position='relative' direction='column' align='center'>
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
                                <Text variant='staffLabel' mx={1}>{staff.role}</Text>
                                <Flex mb={4} justify='center' gap={2}>
                                    <Button size='md' variant={'staffCardBtn'}>
                                        <Icon as={RiWhatsappLine} w={{md: '7'}} h={{md: '7'}} />
                                    </Button>
                                    <Button size='md' variant={'staffCardBtn'}>
                                        <Icon as={MdMailOutline} w={{md: '7'}} h={{md: '7'}} />
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