import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Footer from "../Footer"
import ScrollTopBtn from "../Navbar/ScrollTopBtn"
import {
	Stack,
	Flex,
	Heading,
	Text,
	List,
	ListItem,
	VStack,
	Container,
	Button,
	Icon,
} from "@chakra-ui/react"
import BreadCrumbNav from "../BreadCrumb"

const AdmissionPolicyPage = () => {
	const router = useRouter()

	const linkStyles = {}

	return (
		<>
			<Stack px={{ base: "4", md: "12", lg: "20" }} py={4}>
				<Flex justify="start">
					<BreadCrumbNav />
				</Flex>

				<Heading as="h1" variant="h1">
					Admissions Policy
				</Heading>
			</Stack>

			<Stack px={{ md: "8", lg: "16" }} py={{ base: "2" }} gap={5}>
				<Container maxW="100%" mb="3rem">
					<Heading as="h2" fontWeight="semibold" variant="h2" mt={2}>
						General Requirements
					</Heading>

					<Text
						className="paragraph"
						mb={8}
						mt={4}
						fontSize={{ base: "lg", lg: "xl" }}
					>
						Towering Heights School is an educational institution serving
						students in creche to primary levels. Admission is open to students
						who wish to pursue their studies in a safe and caring learning
						environment and who meet admission requirements.
					</Text>

					<Text fontSize={{ base: "lg", lg: "xl" }}>
						The school does not discriminate on the basis of color, race or
						ethnic origin in the administration of its educational policies,
						admission policies and other programs.
					</Text>
				</Container>

				<Container as="section" maxW="100%">
					<Heading as="h2" fontWeight="semibold" variant="h2">
						Admission Requirements
					</Heading>

					<Text mb={8} mt={4} fontSize={{ base: "lg", lg: "xl" }}>
						In order to complete your registration, copies of the following
						documents are required at the time of registration:
					</Text>

					<List fontSize={{ base: "16px", lg: "19px" }} spacing={3}>
						<ListItem>
							<VStack align="left">
								<span>
									<Icon viewBox="0 0 200 200" color="brand.300" mr="10px">
										<path
											fill="currentColor"
											d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
										/>
									</Icon>
									Birth Certificate
								</span>

								<span>
									<Icon viewBox="0 0 200 200" color="brand.300" mr="10px">
										<path
											fill="currentColor"
											d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
										/>
									</Icon>
									Copy of last immunization record
								</span>

								<span>
									<Icon viewBox="0 0 200 200" color="brand.300" mr="10px">
										<path
											fill="currentColor"
											d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
										/>
									</Icon>
									Passport Photograph
								</span>
							</VStack>
						</ListItem>
					</List>

					<Text my="5rem">
						If you have any additional questions, please{" "}
						<span style={{ color: "blue" }}>
							<Link href="/contact_us">contact our front office.</Link>
						</span>
					</Text>
				</Container>

				<Button
					onClick={() => router.push("/coming_soon")}
					size="lg"
					maxW="13rem"
					mx="1rem"
					mb="20rem"
					variant="solid"
				>
					Apply
				</Button>
			</Stack>

			<Footer />
			<ScrollTopBtn />
		</>
	)
}

export default AdmissionPolicyPage
