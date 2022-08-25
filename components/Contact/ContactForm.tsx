import { VStack, FormControl, FormLabel, Input, Button, Textarea, Flex } from '@chakra-ui/react'
import { inputStyle, vStackStyle } from './style'

const ContactForm = () => {
    return (
        <VStack sx={vStackStyle}>
            <FormControl id="text">
                <FormLabel>Your Name</FormLabel>
                <Input type='text' variant='filled' sx={inputStyle} placeholder='John Doe' />
            </FormControl>
            <FormControl id="email">
                <FormLabel>Your Email</FormLabel>
                <Input type='email' variant='filled' sx={inputStyle} placeholder='johndoe@gmail.com' />
            </FormControl>
            <FormControl>
                <FormLabel>Your Message</FormLabel>
                <Textarea variant='filled' sx={inputStyle} placeholder='Type your message here ...' />
            </FormControl>
            <Flex>
                <Button
                    variant='outline'
                    size= 'lg'
                >
                    Send Message
                </Button>
            </Flex>
        </VStack>
    )
}

export default ContactForm