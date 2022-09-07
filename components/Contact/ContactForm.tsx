import { useState } from "react"
import { useForm } from "react-hook-form"
import { 
    VStack, 
    FormControl, 
    FormLabel,
    Input, 
    Button, 
    Textarea, 
    Flex, 
    FormErrorMessage,
    FormHelperText,
    useToast,
} from '@chakra-ui/react'
import { formStyle, inputStyle, vStackStyle } from './style'

const EMAIL_REGEX = /^[A-Za-z0-9_\-\.]{4,}[@][a-z]+[\.][a-z]{2,3}$/
//const EMAIL_REGEX = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const ContactForm = () => {

    const toast = useToast()
    const { register, handleSubmit, formState: { errors }, reset} = useForm<IContactFormVal>()

    const [loading, setLoading] = useState(false)

    const onSubmit = handleSubmit((data) => {
        setLoading(true)
        setTimeout(()=> {
            console.log('On Submit: ', data)
            setLoading(false)
            toast({
                title: 'Message Sent',
                description: "Thank You For Contacting Us",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'bottom-right',
            })
        }, 1500)
        reset()
    })

    return (
        <>
            <VStack sx={vStackStyle}>
                <form onSubmit={onSubmit} style={formStyle}>
                    <FormControl isInvalid={!!errors.name}>
                        <FormLabel>Your Name</FormLabel>
                        <Input
                            {...register('name', {
                                required: 'Your Name is Required',
                                minLength: 5,
                                maxLength: 35,
                            })} 
                            size='lg' variant='filled' sx={inputStyle} placeholder='Towering Heights' type='text' />
                            
                            {!!errors.name ? 
                                <>
                                    <FormErrorMessage>
                                        {errors.name && errors?.name.type === "minLength" && "MinLength is 5 characters"}
                                    </FormErrorMessage>
                                    <FormErrorMessage>
                                        {errors.name && errors?.name.type === "maxLength" && "MaxLength is 35 characters"}
                                    </FormErrorMessage>
                                </>
                                :
                                <FormHelperText visibility={'hidden'}>Towering Heights</FormHelperText>
                            }
                    </FormControl>
                    <FormControl isInvalid={!!errors.email}>
                        <FormLabel>Your Email</FormLabel>
                        <Input 
                            {...register('email', {
                                required: 'Email is Required',
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: 'Invalid Email'
                                }
                            })}
                            variant='filled' size='lg' type='email' sx={inputStyle} placeholder='Email Address' 
                        />
                        {!!errors.email ? 
                            <FormErrorMessage>{errors.email && errors?.email.message}</FormErrorMessage>
                            :
                            <FormHelperText visibility={'hidden'}>toweringheights@mail.com</FormHelperText>
                        }                        
                    </FormControl>
                    <FormControl isInvalid={!!errors.message}>
                        <FormLabel>Your Message</FormLabel>
                        <Textarea 
                            {...register('message', {
                                required: 'Message is Required',
                                minLength: 25,
                                maxLength: 200,
                            })}
                            variant='filled' sx={inputStyle} size='lg' placeholder='Type your message here ...'
                        />
                        {!!errors.message ? 
                            <>
                                <FormErrorMessage>
                                    {errors.message && errors?.message.type === "minLength" && "MinLength is 25 characters"}
                                </FormErrorMessage>
                                <FormErrorMessage>
                                    {errors.message && errors?.message.type === "maxLength" && "MaxLength is 200 characters"}
                                </FormErrorMessage>
                            </>
                            :
                            <FormHelperText visibility={'hidden'}>Your Message</FormHelperText>
                        }
                    </FormControl>
                    <Flex>
                        <Button
                            variant='outline'
                            size= 'lg'
                            isLoading={loading}
                            loadingText='Sending'
                            type='submit'
                        >
                            Send Message
                        </Button>
                    </Flex>
                </form>
            </VStack>
        </>
    )
}

export default ContactForm
