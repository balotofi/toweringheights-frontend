import { Flex, Text, Box } from "@chakra-ui/react"
import CrecheImage from "../../assets/class_activities/IMG_20200204_114106_8.jpg"
import Image from "next/image"
import { admissionsBoxBtn } from "./style"

const ClassSectionBtns = () => {
    return (
        <Flex justify='center' flexWrap='wrap' gap={10} my={'6 !important'}>
            <Box as='button' sx={admissionsBoxBtn}>
                <Image 
                    src={CrecheImage}
                    alt='Creche Student'
                    width={580}
                    height={330} 
                    placeholder='blur'   
                />
                <Flex direction='column' justify='center' align='center' gap={4} w={'100%'}>
                    <Text color='white' borderBottom='1px solid'>CRECHE SECTION</Text>
                    <Text color='white' borderBottom='1px solid'>18 - 36 MONTHS</Text>
                </Flex>
            </Box>
            <Box as='button' sx={admissionsBoxBtn}>
                <Image 
                    src={CrecheImage}
                    alt='Creche Student'
                    width={580}
                    height={330}    
                />
                <Flex direction='column' justify='center' align='center' gap={4} w={'100%'}>
                    <Text color='white' borderBottom='1px solid'>KINDERGARTEN SECTION</Text>
                    <Text color='white' borderBottom='1px solid'>KG1-KG2</Text>
                </Flex>
            </Box>
            <Box as='button' sx={admissionsBoxBtn}>
                <Image 
                    src={CrecheImage}
                    alt='Creche Student'
                    width={580}
                    height={330}    
                />
                <Flex direction='column' justify='center' align='center' gap={4} w={'100%'}>
                    <Text color='white' borderBottom='1px solid'>NURSERY SECTION</Text>
                    <Text color='white' borderBottom='1px solid'>NURSERY 1 - 2</Text>
                </Flex>
            </Box>
            <Box as='button' sx={admissionsBoxBtn}>
                <Image 
                    src={CrecheImage}
                    alt='Creche Student'
                    width={580}
                    height={330}    
                />
                <Flex direction='column' justify='center' align='center' gap={4} w={'100%'}>
                    <Text color='white' borderBottom='1px solid'>PRIMARY SECTION</Text>
                    <Text color='white' borderBottom='1px solid'>PRIMARY 1 - 6</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default ClassSectionBtns