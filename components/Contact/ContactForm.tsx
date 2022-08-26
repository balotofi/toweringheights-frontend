import { Formik, Form, Field, FormikProps, FormikErrors } from 'formik'
import { VStack, FormControl, FormLabel, Input, Button, Textarea, Flex, FormErrorMessage } from '@chakra-ui/react'
import { formStyle, inputStyle, vStackStyle } from './style'

interface IValues {
    email: string,
    name: string,
    message: string
}

const ContactForm = () => {

    const initialValues: IValues = {email: '', name: '', message: ''}

    function validateInput (values: IValues) {
        const errors: FormikErrors<IValues> = {}
        if(!values.name) {
            errors.name = 'Name is Required'
        } else if (!values.email) {
            errors.email = 'Email is Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Enter a Valid Email address'
        } else if (!values.message) {
            errors.message = 'Type in Your Message'
        }
        return errors
    }

    return (
        <>
            <VStack sx={vStackStyle}>
                <Formik
                    initialValues={initialValues}
                    validate={validateInput}
                    onSubmit={(values, action) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2))
                            action.setSubmitting(false)
                        }, 500)
                    }}
                >
                {(props: FormikProps<IValues>) => (
                    <Form style={formStyle}>
                        <Field name='name' type='text'>
                            {({field, form}: any) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel>Your Name</FormLabel> 
                                    <Input {...field} variant='filled' sx={inputStyle} placeholder='John Doe' />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='email' type='email'>
                            {({field, form}: any) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>Your Email</FormLabel>
                                    <Input {...field} variant='filled' sx={inputStyle} placeholder='johndoe@gmail.com' />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='message' type='text'>
                            {({field, form}: any) => (
                                <FormControl isInvalid={form.errors.message && form.touched.message}>
                                    <FormLabel>Your Message</FormLabel>
                                    <Textarea {...field} variant='filled' sx={inputStyle} placeholder='Type your message here ...' />
                                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Flex>
                            <Button
                                variant='outline'
                                size= 'lg'
                                isLoading={props.isSubmitting}
                                loadingText='Submitting'
                                type='submit'
                            >
                                Send Message
                            </Button>
                        </Flex>
                    </Form>
                )}
                </Formik>
            </VStack>
        </>
    )
}

export default ContactForm
