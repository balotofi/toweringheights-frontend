import { 
    Flex, 
    Box, 
    Heading, 
    Button, 
    IconButton, 
    Text, 
    Collapse, 
    useDisclosure, 
    UnorderedList, 
    ListItem,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { IoIosArrowDown } from "react-icons/io"
import { detailBox, listStyle } from "./style"

const VacancyDetails = () => {

    const router = useRouter()
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box sx={detailBox}>
            <Flex direction='column' gap={3}>
                <Flex justify='space-between' align='center'>
                    <Heading as='h4' variant='footerHeading' mb={0}>Special Educations Teacher</Heading>
                    <IconButton 
                        onClick={onToggle} 
                        variant='ghost' 
                        fontSize= '3xl'
                        aria-label='Toggle Collapse' 
                        icon={<IoIosArrowDown />} 
                        transform={isOpen ? 'rotate(180deg)' : ''}
                    />
                </Flex>
                <Flex direction='column'>
                    <Text variant='vacancyDetail'>Special Education Teacher (SY22-23)</Text>
                    <Text variant='vacancyDetail'>Grade Level: All Grades</Text>
                    <Text variant='vacancyDetail'>Start Date: August 2022</Text>
                    <Text variant='vacancyDetail'>Locations: Boston and Lawrence, MA...</Text>
                </Flex>
            </Flex>  
            <Collapse in={isOpen} animateOpacity>
                <Box h={'1px'} w='100%' bgColor={'font.300'} my={2} />
                <Flex direction='column' gap={2} align='start'>
                    <Heading as={'h5'} variant='h5' mt={2}> Job Description</Heading>
                    <Text variant='vacancyDetail'>
                        Sit nulla est ex deserunt exercitation anim occaecat. 
                        Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. 
                        Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
                    </Text>
                    <Heading as='h5' variant='h5' mt={2}> Job Requirements</Heading>
                    <Text variant='vacancyDetail'>Candidates must have</Text>
                    <UnorderedList>
                        <ListItem sx={listStyle}>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem sx={listStyle}>Consectetur adipiscing elit</ListItem>
                        <ListItem sx={listStyle}>Integer molestie lorem at massa</ListItem>
                        <ListItem sx={listStyle}>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                    <Button onClick={() => router.push('/joinus/vacancies/apply')}>Apply</Button>
                </Flex>
            </Collapse>
        </Box>
    )
}

export default VacancyDetails