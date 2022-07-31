import { 
    Flex, 
    Image,
    Heading,
    Text,
    Box,
    Button,
} from '@chakra-ui/react'
import LogoNav from '../components/Navbar/LogoNav'
import Nav from '../components/Navbar/Nav'
import Activities from '../components/Activities'
import type { NextPage } from 'next'
import Blogs from '../components/Blogs'
import TeachersSlider from '../components/TeachersSlider'
  
  const Home: NextPage = () => {
    return (
      <div>
        <LogoNav />
        <Nav />
        <Flex bg='brand.400' justify='center' p='18px'>
          <Image
            borderRadius='full'
            w= '271px'
            h= '255px'
            src='https://bit.ly/dan-abramov'
            alt='Welcome Page Image'
          />
        </Flex>
        <Box p='1.125rem 1.875rem'>
          <Text lineHeight={6} fontSize='xl' fontWeight='medium' pb='0.5rem' >Welcome to</Text>
          <Heading
            as='h2'
            color='brand.300'
            fontWeight='bold'
            fontSize='2xl'
            lineHeight={7}
            pb='0.5rem'
          > 
          Towering Heights Schools
          </Heading>
          <Box w='280px' h='6px' borderRadius='25px' bg='brand.100' />
          <Text p='1rem 0 0.5rem'>
            Towering Heights Schools is a centre of education that prides itself on creating leaders of tomorrow. We provide not only educated, but morally sound students.
          </Text>
          <Text p='1rem 0 2rem'>
            Our <span style={{'fontWeight': '700'}}>mission statement</span> is building individuals and empowering them with skills and confidence to challenge themselves in every aspect of their lives and also enrichment of character and sense of identity. We are determined to build them into becoming well-balanced, productive, and happy individuals.
          </Text>
          <Button 
            bg='brand.300' 
            color='white' 
            fontSize='md' 
            fontWeight='semibold' 
            size='lg'
            p='0 2rem'
            borderRadius='3xl'
            position='static'
          >
            READ MORE
          </Button>
        </Box>
        <Flex bg='brand.200' direction='column' align='center' p='2.5rem 0' gap='1rem'>
          <Heading as='h3' color='white' fontSize='2xl' fontWeight='bold' letterSpacing='wide' m='1rem'>Latest Updates</Heading>
          <Flex direction='column' gap='2rem'>
            <Box w='305px' h='301px' bg='white' borderRadius='2xl' p='2rem'>
              <Text fontWeight='semibold' fontSize='3xl' mb='2rem' textAlign='center'>Admissions</Text>
              <Text>Choosing the right school marks a new beginning in the life of your child. Contact us as early as possible to have your child assessed and ready for school.</Text>
            </Box>
            <Box w='305px' h='301px' bg='white' borderRadius='2xl' p='2rem'>
              <Text fontWeight='semibold' fontSize='3xl' mb='2rem' textAlign='center'>Calendar</Text>
              <Text>Terms, exams, holidays, keep up to date on what's hapenning when so you don't fall behind.</Text>
            </Box>
            <Box w='305px' h='301px' bg='white' borderRadius='2xl' p='2rem'>
              <Text fontWeight='semibold' fontSize='3xl' mb='2rem' textAlign='center'>Latest News</Text>
              <Text>See firsthand news,updates and details about upcoming events and information.</Text>
            </Box>
          </Flex>
        </Flex>
        <Activities />
        <div style={{backgroundColor: '#D9D9D9'}}>
            <Blogs />
              <TeachersSlider />
        </div>
      </div>
    )
  }
  
  export default Home