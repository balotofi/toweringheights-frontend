import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { slideShowImages } from "../../data/slideShowData"
import { dotArrayBox, dotArrayFlex, imageBox, imageFlex } from "./style"

const dotArray: number[] = [ 0, 1, 2, 3, 4 ]

const ImageSlideShow = () => {

    const [slideId, setSlideId] = useState(1)

    useEffect(() => {
        const slide = setInterval(() => {
            if ( slideId === slideShowImages.length ){
                setSlideId(1)
            } else {
                setSlideId(id => id + 1)
            }
        }, 5000 )
        return () => clearInterval(slide)
    }, [slideId])

    const dotPosition = (idx: number) => { 
        setSlideId(idx)
    }

    return (
        <Flex sx={imageFlex}>
            {slideShowImages.map((item, id) => ( 
                <Box key={item.alt} sx={imageBox} display={slideId === id + 1 ? 'block' : 'none'} >
                    <Image
                        src={item.img}
                        alt={item.alt}
                        layout='fill'
                        quality='100'
                        loading='eager'
                    />
                </Box>
            ))}
            <Flex sx={dotArrayFlex}>
                {dotArray.map((idx) => (
                    <Box key={idx} sx={dotArrayBox}  
                        bg={slideId === idx + 1 ? 'gray.200' : 'transparent'}
                        onClick={() => dotPosition( idx+1 )}
                    />
                ))}
            </Flex>
        </Flex>
    ) 
}

export default ImageSlideShow