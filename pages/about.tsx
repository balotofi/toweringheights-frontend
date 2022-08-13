import type { NextPage } from 'next'
import LogoNav from '../components/Navbar/LogoNav'
import Nav from '../components/Navbar/Nav'
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import BreadCrumbNav from '../components/BreadCrumb'
import ScrollTopBtn from '../components/Navbar/ScrollTopBtn'

const About: NextPage = () => {

    return (
        <>
            <LogoNav />
            <Nav />
            <Stack px={2} py={4} p={{md: '0'}}>
                <Flex justify='center'>
                    <Image
                        src={'/assets/class_img/InShot_20220728_100338428.jpg'} 
                        w={{base: '100%', md: '90%'}}
                        h={{base: '239px', md: '500px', lg: '650px'}}
                    />
                </Flex>
                <Flex justify='center' mt={2}>
                    <BreadCrumbNav />
                </Flex>
            </Stack>
            <Stack p={{base: '1rem', md: '1.5rem 3rem'}} mx={{md: '5'}} w={{md: '60%'}}>
                <Heading as={'h1'} mb={4} mt={1} color='brand.300'>About Us</Heading>
                <Heading as={'h2'} my={'2 !important'} color='brand.300' fontWeight='semibold' fontSize='2xl' lineHeight={8}>
                    Welcome to the Towering Heights Schools website
                </Heading>
                <Box my={'4 !important'}>
                    <Text lineHeight={6} my={2}>
                        Towering Heights schools is a centre of education that prides itself on creating leaders of tomorrow. We produce not only educated, but morally sound students.
                    </Text>
                    <Text lineHeight={6} my={2}>
                        We make sure to carry our parents along every step of the way and give them a comfortable atmosphere in which they can converse with the school to ensure the best results from their children.
                    </Text>
                </Box>
                <Heading as={'h2'} my={'2 !important'} color='brand.300' fontWeight='semibold' fontSize='2xl' lineHeight={8}>
                    Our Values
                </Heading>
                <Box my={'4 !important'}>
                    <Text lineHeight={6} my={2}>
                        We pride ourselves in the quality of children we raise.
                    </Text>
                </Box>
                <Heading as={'h2'} my={'2 !important'} color='brand.300' fontWeight='semibold' fontSize='2xl' lineHeight={8}>
                    Vision and Mission
                </Heading>
                <Box my={'4 !important'}>
                    <Text lineHeight={6} my={2}>
                        Values and ethics are the key foundations of any civilised society. Hillside's nurturing environment provides the vital support each boy needs to learn and mature. Our community's extraordinary patience guides our boys to develop a solid foundation of compassion
                        and self-esteem throughout their lives. Through our comprehensive yet flexible structure, as well as the experience that enables us to
                        work with every boy at his own level of personal development, Hillside helps students to navigate the uncertain world of early
                        adolescence. A Hillside boy gains the skills and confidence to challenge himself in every aspect of his life and positively broadens and
                        enriches his character and sense of identity. He learns to look beyond himself and to recognize excellence in others, an essential step
                        to becoming a well-balanced, productive and happy individual.
                    </Text>
                </Box>
                <Heading as={'h2'} my={'2 !important'} color='brand.300' fontWeight='semibold' fontSize='2xl' lineHeight={8}>
                    Background
                </Heading>
                <Box my={'4 !important'}>
                    <Text lineHeight={6} my={2}>
                        BECKY PARKER COLLEGE (PC) is a private co-educational boarding school situated some four kilometer on Oba-lle road, East of
                        Akure, the Ondo State capital, Nigeria. The college offers courses leading to General Certificate of Basic Education (GCBE), West
                        African Senior Secondary Certificate Examinations(WASSCE), Senior Secondary Certificate Examination(SSCE) NECO,General
                        Certificate of Education (GCE) Advanced level. The school opened in October 1994, it was established to provide holistic education
                        that compliments the National Education system and facilitates access into universities at local and international level. 
                    </Text>
                </Box>
                <Heading as={'h2'} my={'2 !important'} color='brand.300' fontWeight='semibold' fontSize='2xl' lineHeight={8}>
                    For prospective parents
                </Heading>
                <Box my={'4 !important'}>
                    <Text lineHeight={6} my={2}>
                        If you want your child to achieve the peak in life then Towering Heights is for you
                        With the highest calibre of staff a tranquil environment and unique teaching techniques without a doubt your ward will accomplish
                        their potentials.
                    </Text>
                    <Text lineHeight={6} my={2}>
                        Bring your wards today, excellence is inevitable!
                    </Text>
                </Box>
            </Stack>
            <Footer />
            <ScrollTopBtn />
        </>
    )
}

export default About