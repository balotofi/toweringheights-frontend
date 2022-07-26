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
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <LogoNav />
      <Nav />
      <Flex bg='brand.400' justify='center' p='18px'>
        <Image
          borderRadius='full'
          width= '271px'
          height= '255px'
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
          borderRadius='3xl'>
          READ MORE
        </Button>
      </Box>
    </div>
  )
}

export default Home
