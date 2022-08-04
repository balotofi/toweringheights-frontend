import { Box, Flex, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { slideShowItems } from "../../data"

const dotArray: number[] = [ 0, 1, 2, 3, 4 ]

const ImageSlideShow = () => {

    const [slideId, setSlideId] = useState(1)

    useEffect(() => {
        const slide = setInterval(() => {
            if ( slideId === slideShowItems.length ){
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
        <Flex 
            position='relative' 
            align='center' 
            overflow='hidden'
            justify='center'
            w={{xl: '50%'}}
        >
            {slideShowItems.map((item, id) => (
                <Image
                    key={item.alt}
                    src={item.img}
                    display={slideId === id + 1 ? 'block' : 'none'}
                    h={{ base: '255px', md: '400px', xl: '500px' }}
                    w={{ base: '271px', md: '2000px', xl: '1200px'}}
                    borderRadius='50%'
                    border={4}
                    borderStyle={'solid'}
                    borderColor='brand.300'
                    transition='all 0.3s ease-in'
                />
            ))}

            <Flex 
                justify='space-around' 
                position='absolute' 
                bottom='30px'
                gap='5px' 
                transform='translateX(-50%)' 
                left='50%'>
                {dotArray.map((idx) => (
                    <Box
                        onClick={() => dotPosition( idx+1 )}
                        key={idx} 
                        w='20px'
                        h='5px'
                        borderRadius={'md'}
                        border={1}
                        borderStyle={'solid'}
                        borderColor='gray.100'
                        transition='all 0.3s ease-in-out'
                        bg={slideId === idx + 1 ? 'gray.200' : 'transparent'}
                    />
                ))}
            </Flex>
        </Flex>
    ) 
}

export default ImageSlideShow