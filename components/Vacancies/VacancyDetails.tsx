import { Flex, Box, Heading, Button, IconButton, Text, Collapse, useDisclosure } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { IoIosArrowDown } from "react-icons/io"
import { detailBox } from "./style"

const VacancyDetails = () => {

    const router = useRouter()
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box sx={detailBox}>
            <Flex direction='column' gap={3}>
                <Flex justify='space-between' align='center'>
                    <Heading as='h4' variant='footer-heading' mb={0}>Special Educations Teacher</Heading>
                    <IconButton 
                        onClick={onToggle} 
                        variant='ghost' 
                        fontSize= '3xl'
                        aria-label='Toggle Collapse' 
                        icon={<IoIosArrowDown />} 
                    />
                </Flex>
                <Flex justify='space-between' align='start'>
                    <Flex direction='column'>
                        <Text variant='vacancy-detail'>Special Education Teacher (SY22-23)</Text>
                        <Text variant='vacancy-detail'>Grade Level: All Grades</Text>
                        <Text variant='vacancy-detail'>Start Date: August 2022</Text>
                        <Text variant='vacancy-detail'>Locations: Boston and Lawrence, MA...</Text>
                    </Flex>
                    <Button onClick={() => router.push('/joinus/vacancies/apply')}>Apply</Button>
                </Flex>
            </Flex>  
            <Collapse in={isOpen} animateOpacity>
                <Flex direction='column' gap={3}>
                    <Text variant='vacancy-detail'>
                        Sit nulla est ex deserunt exercitation anim occaecat. 
                        Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. 
                        Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
                    </Text>
                </Flex>
            </Collapse>
        </Box>
    )
}

export default VacancyDetails