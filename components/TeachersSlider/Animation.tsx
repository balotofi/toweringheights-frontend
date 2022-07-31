import { Box } from "@chakra-ui/react"
import { BigBlobShape, SmallBlobShape } from "../Icons"

const Animation = () => {
    return (
        <Box h='inherit' p='0 1.5rem' bg='transparent' position='absolute'>
            <SmallBlobShape h='97.17px' w='113.76px' position='relative' />
            <BigBlobShape w='193.29px' h='182px' position='absolute' bottom='0' />
        </Box>
    )
}

export default Animation