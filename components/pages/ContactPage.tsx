import { 
    Stack, 
    Flex, 
    Heading, 
    Text, 
    VStack, 
    Icon, 
    FormControl, 
    FormLabel, 
    Input, 
    Textarea, 
    Button 
} from '@chakra-ui/react'
import BreadCrumbNav from '../BreadCrumb'
import LogoNav from '../Navbar/LogoNav'
import Nav from '../Navbar/Nav'
import { ImPhone } from "react-icons/im"
import { MdLocationOn, MdEmail } from "react-icons/md"
import ScrollTopBtn from '../Navbar/ScrollTopBtn'
import Footer from '../Footer'

const ContactPage = () => {
    return (
        <>
            <LogoNav />
            <Nav />
            <Stack px={{base:'4', md: '8', lg: '16'}} py={{base: '2'}} gap={{base: '5', md: '10'}}>
                <Flex justify='start' mt={{base: '0', md: '2'}}>
                    <BreadCrumbNav />
                </Flex>
                <Flex w={'100%'} justify={'center'}>
                    <Stack 
                        direction='row' 
                        flexWrap={'wrap'}
                        w={{md: '75%'}}
                        justify={{md: 'space-between'}}
                        p={{base: '4', md: '8'}}
                        gap={6} 
                        pb={8}
                        mb={'10 !important'}
                        boxShadow= '0px 0px 10px rgba(0, 0, 0, 0.1)'
                        borderRadius='md'
                    >
                        <VStack gap={4} w={{md: 'calc(75% / 2)'}} align='start'>
                            <Heading as='h1' fontSize='3xl' lineHeight='9' textTransform={'uppercase'}>Contact Details</Heading>
                            <Text lineHeight={6} >
                                You can always reach us via following contact details. We will give our best to reach you as possible.
                            </Text>
                            <Flex align='center' gap={4} fontWeight='medium'>
                                <Icon as={ImPhone} color='brand.300' w={6} h={6} />
                                <Text>+234 805 029 1265 , +234 907 228 0656</Text>
                            </Flex>
                            <Flex align='center' gap={4} fontWeight='medium'>
                                <Icon as={MdEmail} color='brand.300' w={6} h={6} />
                                <Text>toweringheightsschools@gmail.com</Text>
                            </Flex>
                            <Flex align='center' gap={4} fontWeight='medium'>
                                <Icon as={MdLocationOn} color='brand.300' w={6} h={6} />
                                <Text>
                                    Afro stuff estate Alagbaka extension,<br/> 
                                    Off Igbatoro Road, <br/>
                                    Adjacent National Identity Management Commission,<br/>
                                    South, Akure.
                                </Text>
                            </Flex>
                        </VStack>
                        <VStack w={{base: '100%', md: '45%'}} bg='brand.300' p={6} color='white' borderRadius={'md'} lineHeight={6} gap={3}>
                            <FormControl id="text">
                                <FormLabel>Your Name</FormLabel>
                                <Input 
                                    type='text'
                                    color='font.300' 
                                    size='lg' 
                                    bg='white'
                                    variant='filled'
                                    placeholder='John Doe'
                                    _placeholder={{
                                        color: 'rgba(0, 0, 0, 0.5)'
                                    }}
                                />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Your Email</FormLabel>
                                <Input 
                                    type='email'
                                    color='font.300' 
                                    size='lg' 
                                    bg='white'
                                    variant='filled'
                                    placeholder='johndoe@gmail.com'
                                    _placeholder={{
                                        color: 'rgba(0, 0, 0, 0.5)'
                                    }}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Your Message</FormLabel>
                                <Textarea
                                    color='font.300' 
                                    size='lg' 
                                    bg='white'
                                    variant='filled'
                                    placeholder='Type your message here ...' 
                                    _placeholder={{
                                        color: 'rgba(0, 0, 0, 0.5)'
                                    }} 
                                />
                            </FormControl>
                            <Flex>
                                <Button
                                    variant='outline'
                                    bg='transparent'
                                    size= 'lg' 
                                    fontSize='lg'
                                    lineHeight={6}
                                    colorScheme='blue'
                                    color={'white'}
                                    transition='0.35s all ease-in-out'
                                    _hover={{
                                        bg: 'white',
                                        color: 'brand.300'
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Flex>
                        </VStack>
                    </Stack>
                </Flex>
            </Stack>
            <Footer />
            <ScrollTopBtn />
        </>
    )
}

export default ContactPage
