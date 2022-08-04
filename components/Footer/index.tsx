import { 
    Box, 
    Text,
    Button, 
    Flex, 
    Input, 
    InputGroup, 
    InputRightElement,
    Image,
    Heading, 
    Link as ChakraLink,
    Icon
} from "@chakra-ui/react"
import { SendPlaneIcon } from "../Icons"
import Link from "next/link"
import { MdLocationOn, MdEmail, MdFacebook } from "react-icons/md"
import { ImPhone } from "react-icons/im"
import { IoLogoWhatsapp } from "react-icons/io"

const Footer = () => {
    return(
        <Box 
            position='relative' 
            bottom='0'
        >
            <Box
                bg="url(/assets/group_img/footer.jpg) no-repeat"
                backgroundSize={'cover'}
                backgroundPosition='center'
                h={{base: '177px', md: '200px', lg: '250px'}}
            >
                <Flex
                    bgColor='rgba(0, 0, 0, 0.6)'
                    overflow='hidden'
                    h='100%'
                    justify='center'
                >
                    <Flex
                        direction='column'
                        justify='center'
                        w={{lg: '40%'}}
                    >
                        <Text 
                            color='#ffffffa3' 
                            fontWeight='medium'
                            fontSize={{lg: 'xl'}} 
                            textAlign='center' 
                            mb='1.2rem' 
                            lineHeight='28px'>
                            A wonderful <span style={{color: '#007AFF', fontWeight: '600'}}>  
                                FIRST
                            </span> out of home learning <span style={{color: '#007AFF', fontWeight: '600'}}>
                                EXPERIENCE
                            </span> for your child.
                        </Text>
                        <InputGroup bg='rgba(0, 0, 0, 0.2)' borderRadius='md'>
                            <Input 
                                size={{base: 'md', md: 'lg'}}
                                border='2px solid'
                                fontWeight='semibold'
                                fontSize='lg'
                                pl='2rem'
                                focusBorderColor='brand.400'
                                placeholder="Enter e-mail to recieve news letter"
                                _placeholder={{ color: '#ffffffa3', fontSize: '14px', fontWeight:'normal'}}
                            />
                            <InputRightElement w='42px' h={'90%'} top='2px' right='2px' bgColor='brand.300'>
                                <Button bg='brand.300'>
                                    <SendPlaneIcon /> 
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Flex>
                </Flex>
            </Box>
            <Flex p='2rem' bgColor='font.300' direction='column'>
                <Flex direction={{base: 'column', md: 'row'}} gap={{base: '6'}} align={{md: 'start'}}>
                    <Box w={{md: '25%'}} mx={{md: '4'}}>
                        <Image w='70px' h='65px' src='/assets/logo_ths.jpg' borderRadius='full' />
                        <Text color='white' mt='1.5rem' lineHeight='27px'>
                            Towering Heights Schools is a centre of education that prides itself on creating leaders of tomorrow.We pride ourselves in the quality of children we raise.
                        </Text>
                    </Box>
                    <Flex direction='column' w={{md: '15%'}}>
                        <Heading as='h4' fontSize='xl' color='brand.300' fontWeight='bold' mb='1rem'>Links</Heading>
                        <Link href='/' passHref>
                            <ChakraLink fontSize='sm' color='white' mb='1rem'>Home</ChakraLink>
                        </Link>
                        <Link href='/about' passHref>
                            <ChakraLink fontSize='sm' color='white' mb='1rem'>About us</ChakraLink>
                        </Link>
                        <Link href='/gallery' passHref>
                            <ChakraLink fontSize='sm' color='white' mb='1rem'>Gallery</ChakraLink>
                        </Link>
                        <Link href='/teachers' passHref>
                            <ChakraLink fontSize='sm' color='white' mb='1rem'>Teachers</ChakraLink>
                        </Link>
                        <Link href='/parents' passHref>
                            <ChakraLink fontSize='sm' color='white' mb='1rem'>Parents</ChakraLink>
                        </Link>
                        <Link href='/join' passHref>
                            <ChakraLink fontSize='sm' color='white' mb='1rem'>Join us</ChakraLink>
                        </Link>
                        <Link href='/contact' passHref>
                            <ChakraLink fontSize='sm' color='white' mb='1rem'>Contact us</ChakraLink>
                        </Link>
                    </Flex>
                    <Flex direction='column' w={{md: '25%'}}>
                        <Heading as='h4' fontSize='xl' color='brand.300' fontWeight='bold' mb='1rem'>Find Us</Heading>
                        <Flex color='white' mb='1rem' gap='10px'>
                            <Icon as={MdLocationOn} w={6} h={6} />
                            <Text fontSize='sm'>Afrostuff Estate,Alagbaka Extension, off Igbatoro road. Adjacent NIMC, Alagbaka, Akure.</Text>
                        </Flex>
                        <Flex color='white' mb='1rem' gap='10px'>
                            <Icon as={ImPhone} w={6} h={6} />
                            <Flex direction='column'>
                                <Text fontSize='sm'>0814 266 5965</Text>
                                <Text fontSize='sm'>0810 531 3377</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex direction='column' w={{md: '25%'}}>
                        <Heading as='h4' fontSize='xl' color='brand.300' fontWeight='bold' mb='1rem'>Social Links</Heading>
                        <Flex color='white' mb='1rem' gap='10px'>
                            <Icon as={MdEmail} w={6} h={6} />
                            <ChakraLink 
                                href='www.github.com/Meekunn/'
                                isExternal 
                                fontSize='sm' 
                                color='white' 
                                mb='1rem'
                            >
                                Gmail
                            </ChakraLink>
                        </Flex>
                        <Flex color='white' mb='1rem' gap='10px'>
                            <Icon as={MdFacebook} w={6} h={6} />
                            <ChakraLink 
                                href='www.github.com/Meekunn/'
                                isExternal 
                                fontSize='sm' 
                                color='white' 
                                mb='1rem'
                            >
                                Facebook
                            </ChakraLink>
                        </Flex>
                        <Flex color='white' mb='1rem' gap='10px'>
                            <Icon as={IoLogoWhatsapp} w={6} h={6} />
                            <ChakraLink 
                                href='www.github.com/Meekunn/'
                                isExternal 
                                fontSize='sm' 
                                color='white' 
                                mb='1rem'
                            >
                                Whatsapp
                            </ChakraLink>
                        </Flex>
                    </Flex>
                </Flex>
                <Text
                    color='white'
                    opacity='0.5'
                    lineHeight='21px'
                    fontSize='xs'
                    fontWeight='medium'
                    textAlign='center'
                >
                    Copyright © 2017. All Right Reserved.
                </Text>
            </Flex>
        </Box>
    )
}

export default Footer