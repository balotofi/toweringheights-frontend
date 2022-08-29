import { Stack, Flex, VStack, Heading, Box, Text } from "@chakra-ui/react"
import BreadCrumbNav from "../BreadCrumb"
import VacancyDetails from "../Vacancies/VacancyDetails"
import { smallHeadingBorder } from "../../theme/components/boxStyles"

const VacancyPage = () => {
    return (
        <>
            <Stack px={{base:'6', md: '8', lg: '16'}} py={{base: '2'}} gap={6}>
                <Flex justify='start'>
                    <BreadCrumbNav />
                </Flex>
                <VStack align={{base: 'flex-start', lg: 'center'}}>
                    <Flex direction='column' gap={3} w={{md: '80%'}}>
                        <Heading as='h2' variant='h2' mb={4} >Career Opportunities</Heading>
                        <Heading as='h3' variant='h3' fontWeight='semibold' fontSize='1.55rem'>Join our team and help  build the Leaders of Tomorrow</Heading>
                        <Text mb={4} mt={2}>
                            We encourage applicants from diverse backgrounds to apply for any open position for which they are qualified. 
                            Our students must be exposed on a daily basis to a diverse group of powerful role models. 
                            Therefore, we have a responsibility to recruit, retain, develop, and reward a diverse and talented staff from a wide range of backgrounds to join our creative, mission-driven team.
                        </Text>
                    </Flex>
                </VStack>
                <VStack gap={3} mb={'10 !important'}>
                    <Flex direction='column' align='center'>
                        <Heading as='h3' variant='h3'>See open roles at THS</Heading>
                        <Box bg='brand.300' sx={smallHeadingBorder} />
                    </Flex>
                    <VacancyDetails />
                    <VacancyDetails />
                    <VacancyDetails />
                    <VacancyDetails />
                </VStack>
            </Stack>
        </>
    )
}

export default VacancyPage