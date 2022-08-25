import { Stack, Flex } from '@chakra-ui/react'
import BreadCrumbNav from '../BreadCrumb'
import ContactDetails from '../Contact/ContactDetails'
import ContactForm from '../Contact/ContactForm'
import { contactFormWrapper } from '../../theme/components/stackStyles'

const ContactPage = () => {
    return (
        <Stack px={{base:'4', md: '8', lg: '16'}} py={{base: '2'}} gap={{base: '5', md: '10'}}>
            <Flex justify='start' mt={{base: '0', md: '2'}}>
                <BreadCrumbNav />
            </Flex>
            <Flex w={'100%'} justify={'center'}>
                <Stack sx={contactFormWrapper}>
                    <ContactDetails />   
                    <ContactForm />
                </Stack>
            </Flex>
        </Stack>
    )
}

export default ContactPage
