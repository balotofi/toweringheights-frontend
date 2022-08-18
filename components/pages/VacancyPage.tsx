import { Stack, Flex, VStack, Heading, Box } from "@chakra-ui/react"
import BreadCrumbNav from "../BreadCrumb"
import LogoNav from "../Navbar/LogoNav"
import Nav from "../Navbar/Nav"

const VacancyPage = () => {
    return (
        <>
            <LogoNav />
            <Nav />
            <Stack px={{base:'4', md: '8', lg: '16'}} py={{base: '2'}} gap={{base: '5', md: '10'}}>
                <Flex justify='start' mt={{base: '0', md: '2'}}>
                    <BreadCrumbNav />
                </Flex>
                <VStack align='start' gap={2}>
                    <Heading as='h1' fontSize='2xl' fontWeight='semibold' lineHeight={8} mb='2 !important'>
                        Vacancies 
                    </Heading>
                    <Heading as='h2' 
                        fontSize='3xl' 
                        fontWeight='bold' 
                        lineHeight={10} 
                        display={{md:'none'}} 
                    >
                        Available Job Offers.
                    </Heading>
                    <Heading as='h2' 
                        fontSize='3xl' 
                        fontWeight='bold' 
                        lineHeight={10} 
                        display={{base:'none', md: 'block'}} 
                    >
                        Current Job Vacancies at Towering Height  Schools.
                    </Heading>
                    <hr
                        style={{
                            border: '3px solid #F0C965',
                            width: '100%'
                        }} 
                    />
                </VStack>
            </Stack>
        </>
    )
}

export default VacancyPage