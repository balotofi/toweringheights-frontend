import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import BreadCrumbNav from '../BreadCrumb'
import AboutImage from '../../assets/class_img/InShot_20220728_100338428.jpg'

const AboutPage = () => {

    return (
        <>
            <Stack px={2} py={4} p={{md: '0'}}>
                <Flex justify='center'
                    w={{base: '100%'}}
                    h={{base: '239px', md: '500px', lg: '650px'}}
                >
                    <Image src={AboutImage} />
                </Flex>
                <Flex mx={{md: '6 !important', lg: '12 !important'}}>
                    <BreadCrumbNav />
                </Flex>
            </Stack>
            <Stack p={{base: 4, md: '1.5rem 3rem'}} mx={{md: '5'}} w={{md: '70%'}}>
                <Heading as='h2' variant='h2' mb={4} color='brand.300' fontSize='3xl'>About Us</Heading>
                <Heading as='h3' color='brand.300' fontWeight='semibold' variant='h3'>
                    Welcome to the Towering Heights Schools website
                </Heading>
                <Box>
                    <Text mb={2} className='paragraph'>
                        Towering Heights schools is a centre of education that prides itself on creating leaders of tomorrow. We produce not only educated, but morally sound students.
                    </Text>
                    <Text mb={2} className='paragraph'>
                        We make sure to carry our parents along every step of the way and give them a comfortable atmosphere in which they can converse with the school to ensure the best results from their children.
                    </Text>
                </Box>
                <Heading as='h3' color='brand.300' fontWeight='semibold' variant='h3'>
                    Our Values
                </Heading>
                <Box>
                    <Text mb={2} className='paragraph'>
                        We pride ourselves in the quality of children we raise.
                    </Text>
                </Box>
                <Heading as='h3' color='brand.300' fontWeight='semibold' variant='h3'>
                    Vision and Mission
                </Heading>
                <Box>
                    <Text mb={2} className='paragraph'>
                        Values and ethics are the key foundations of any civilised society. Hillside's nurturing environment provides the vital support each boy needs to learn and mature. Our community's extraordinary patience guides our boys to develop a solid foundation of compassion
                        and self-esteem throughout their lives. Through our comprehensive yet flexible structure, as well as the experience that enables us to
                        work with every boy at his own level of personal development, Hillside helps students to navigate the uncertain world of early
                        adolescence. A Hillside boy gains the skills and confidence to challenge himself in every aspect of his life and positively broadens and
                        enriches his character and sense of identity. He learns to look beyond himself and to recognize excellence in others, an essential step
                        to becoming a well-balanced, productive and happy individual.
                    </Text>
                </Box>
                <Heading as='h3' color='brand.300' fontWeight='semibold' variant='h3'>
                    Background
                </Heading>
                <Box>
                    <Text mb={2} className='paragraph'>
                        BECKY PARKER COLLEGE (PC) is a private co-educational boarding school situated some four kilometer on Oba-lle road, East of
                        Akure, the Ondo State capital, Nigeria. The college offers courses leading to General Certificate of Basic Education (GCBE), West
                        African Senior Secondary Certificate Examinations(WASSCE), Senior Secondary Certificate Examination(SSCE) NECO,General
                        Certificate of Education (GCE) Advanced level. The school opened in October 1994, it was established to provide holistic education
                        that compliments the National Education system and facilitates access into universities at local and international level. 
                    </Text>
                </Box>
                <Heading as='h3' color='brand.300' fontWeight='semibold' variant='h3'>
                    For prospective parents
                </Heading>
                <Box>
                    <Text mb={2} className='paragraph'>
                        If you want your child to achieve the peak in life then Towering Heights is for you
                        With the highest calibre of staff a tranquil environment and unique teaching techniques without a doubt your ward will accomplish
                        their potentials.
                    </Text>
                    <Text mb={2} className='paragraph'>
                        Bring your wards today, excellence is inevitable!
                    </Text>
                </Box>
            </Stack>
        </>
    )
}

export default AboutPage