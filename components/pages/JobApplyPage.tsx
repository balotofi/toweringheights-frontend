import { Stack, Flex, VStack, Heading, Text } from "@chakra-ui/react"
import { FcInfo } from "react-icons/fc"
import BreadCrumbNav from "../BreadCrumb"
import VacancyForm from "../Vacancies/VacancyForm"

const JobApplyPage = () => {
    return (
        <>
            <Stack px={{base:'6', md: '8', lg: '16'}} py={2} mb={8} gap={6}>
                <Flex justify='start'>
                    <BreadCrumbNav />
                </Flex>
                <VStack align={{base: 'flex-start', lg: 'center'}} gap={8}>
                    <Flex direction='column' gap={2} w={{md: '80%'}}>
                        <Heading as='h2' variant='h2' mb={4} >Career Opportunities</Heading>
                        <Heading as='h3' variant='h3' fontWeight='semibold' fontSize='1.2rem'>Join our team and help  build the Leaders of Tomorrow</Heading>
                        <Flex gap={2} align={'center'}>
                            <FcInfo /> 
                            <Text color="brand.200">Form is currently unable. Kindly Apply Via Email</Text>
                        </Flex>
                    </Flex>
                    <VacancyForm />
                </VStack>
            </Stack>
        </>
    )
}

export default JobApplyPage