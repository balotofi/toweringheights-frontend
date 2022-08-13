import { 
    Flex, 
    Image,
    Heading,
    Text,
    Box,
    Button,
    Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import LogoNav from '../components/Navbar/LogoNav'
import Nav from '../components/Navbar/Nav'
import Activities from '../components/Activities'
import Blogs from '../components/Blogs'
import Staffs from '../components/Staffs'
import Footer from '../components/Footer'
import ScrollTopBtn from '../components/Navbar/ScrollTopBtn'
import ImageSlideShow from '../components/ImageSlideShow'
  
  const Home: NextPage = () => {

    const router = useRouter()

    return (
      <>
        <LogoNav />
        <Nav />
        <Flex justify='center' p={4} direction={{base: 'column', md: 'row-reverse'}} gap={8}>
          <ImageSlideShow />
          <Box p={{base: '1rem', md: '2rem'}} w={{xl: '50%'}}>
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
              Our <span style={{'fontWeight': '700'}}>mission statement</span> is building iduals and empowering them with skills and confidence to challenge themselves in every aspect of their lives and also enrichment of character and sense of identity. We are determined to build them into becoming well-balanced, productive, and happy iduals.
            </Text>
            <Button 
              onClick={() => router.push('/about')}
              bg='brand.300' 
              color='white' 
              fontSize='md' 
              fontWeight='semibold' 
              size='lg'
              p='0 2rem'
              borderRadius='3xl'
              transition= 'all 0.3s ease-in-out'
              _hover={{
                bg: 'brand.400',
                color: 'brand.300',
                border: '2px',
                borderColor: 'brand.300',
                borderStyle: 'solid'
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Flex>
        <Flex bg='brand.200' direction='column' align='center' p='2.5rem 0' gap='1rem'>
          <Heading as='h3' color='white' fontSize='2xl' fontWeight='bold' letterSpacing='wide' m='1rem' display={{base: 'block', lg:'none'}}>Latest Updates</Heading>
          <Flex direction='row' flexWrap={'wrap'} justify='center' gap='2rem'>
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
          <Staffs />
          <Flex direction='column' p='2rem'>
            <Flex direction='column' align='center' mx={6}>
              <Heading 
                as='h3' 
                color='font.300' 
                fontSize='lg' 
                fontWeight='bold' 
                pb='0.3rem'
                lineHeight='21.6px'
              >
                Our Gallery
              </Heading>
              <Box w='74px' h='4px' borderRadius='3xl' bg='#747474' />
            </Flex>
            <Flex m={4}>
              <Image
                borderRadius='xl'
                src='/assets/class_activities/IMG_20200115_092018_0.jpg'
                w={{base: '182px', md: '250px'}}
                h={{base: '135px', md: '180px'}}
              />
            </Flex>
            <Box w={{base: '251px', md: '50%'}} h='4px' borderRadius='xl' bg='brand.300' />
            <Flex m='1rem' justify={{base: 'end', md: 'center'}}>
              <Image
                borderRadius='xl'
                src='/assets/class_activities/IMG_20200204_114106_8.jpg'
                w={{base: '182px', md: '250px'}}
                h={{base: '135px', md: '180px'}}
              />
            </Flex>
            <Box w={{base: '251px', md: '80%'}} h='4px' borderRadius='xl' bg='brand.300' />
            <Flex m='1rem' justify={{base: 'start', md: 'end'}}>
              <Image
                borderRadius='xl'
                src='/assets/cultural/POP_2079.jpg'
                w={{base: '182px', md: '250px'}}
                h={{base: '135px', md: '180px'}}
              />
            </Flex>
            <Flex justify='center'>
              <Link href='#' passHref>
                <ChakraLink 
                  color='brand.300' 
                  fontWeight='bold' 
                  pb='0.2rem' 
                  borderBottom='1px'
                >
                  Click here to see more
                </ChakraLink>
              </Link>
            </Flex>
          </Flex>
        </div>
        <Footer />
        <ScrollTopBtn />
      </>
    )
  }
  
  export default Home