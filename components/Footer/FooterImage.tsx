import { Box, Flex, Text, InputGroup, Input, InputRightElement, IconButton } from "@chakra-ui/react"
import { SendPlaneIcon } from "../Icons"
import { footerImageBox } from "./style"

const FooterImage = () => {
    return (
        <Box bg="url(/assets/group_img/footer.jpg) no-repeat" sx={footerImageBox} >
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
                    <Text fontSize={{lg: 'lg'}} variant='footerImageText'>
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
                            fontWeight='medium'
                            color='white'
                            fontSize='lg'
                            pl='2rem'
                            focusBorderColor='brand.400'
                            placeholder="Enter e-mail to recieve news letter"
                            _placeholder={{ color: '#ffffffa3', fontSize: '14px', fontWeight:'normal'}}
                        />
                        <InputRightElement w='42px' h={'90%'} top='2px' right='2px'>
                            <IconButton
                                aria-label='Subscribe to Newsletter'
                                icon={<SendPlaneIcon />}
                                variant='subNewsletter'
                            /> 
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            </Flex>
        </Box>
    )
}

export default FooterImage