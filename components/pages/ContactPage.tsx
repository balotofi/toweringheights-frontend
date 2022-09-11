import { Stack, Flex } from "@chakra-ui/react"
import BreadCrumbNav from "../BreadCrumb"
import ContactDetails from "../Contact/ContactDetails"
import ContactForm from "../Contact/ContactForm"
import { contactFormWrapper } from "../../theme/components/stackStyles"
import MapDetails from "../Contact/MapDetails"

const ContactPage = () => {
	return (
		<Stack
			px={{ base: "4", md: "8", lg: "16" }}
			my={{ base: "8" }}
			gap={{ base: "5", md: "10" }}
		>
			<Flex justify="start" mt={{ base: "0", md: "2" }}>
				<BreadCrumbNav />
			</Flex>
			<Flex
				w={"100%"}
				justify={"center"}
				direction="column"
				align="center"
				gap={6}
			>
				<Stack sx={contactFormWrapper}>
					<ContactDetails />
					<ContactForm />
				</Stack>
				<MapDetails />
			</Flex>
		</Stack>
	)
}

export default ContactPage
