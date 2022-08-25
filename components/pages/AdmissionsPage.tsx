import { Stack, Flex, Heading, Text, Box, VStack } from "@chakra-ui/react"
import BreadCrumbNav from "../BreadCrumb"
import ClassSectionBtns from "../Admissions/ClassSectionBtns"
import { headingBorder } from "../../theme/components/boxStyles"
import AdmissionActions from "../Admissions/AdmissionActions"

const AdmissionsPage = () => {
    return (
        <>
            <Stack px={{base:'6', md: '8', lg: '16'}} py={{base: '2'}} gap={5}>
                <Flex justify='start'>
                    <BreadCrumbNav />
                </Flex>
                <VStack align={{base: 'flex-start', md: 'center'}}>
                    <Flex direction='column' align={{base: 'flex-start', md: 'center'}} w={{base: '100%', md: '70%'}}>
                        <Heading as='h2' variant='h2' >Admissions</Heading>
                        <Box bg='brand.200' w={'80%'} sx={headingBorder} />
                        <Box bg='brand.200' w={'60%'}  sx={headingBorder} />
                        <Text mb={4} mt={2} textAlign={{md: 'center'}}>
                            Welcome to Towering Heights school admissions page. 
                            This page has all that is required details if you’re looking for a place to apply for our Nursery or other reception classes for the session.
                        </Text>
                        <Text mb={4} mt={2} textAlign={{md: 'center'}}>
                            THS seeks to enroll students who are prepared to be successful academically and contribute positively to our community as leaders of tomorrow.
                            Admission guidelines vary by sections and categories.
                        </Text>
                    </Flex>
                </VStack>
                <ClassSectionBtns />
                <AdmissionActions />
            </Stack>
        </>
    )
}

export default AdmissionsPage