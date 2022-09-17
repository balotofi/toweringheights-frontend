import { Stack, Text, Flex, Icon } from "@chakra-ui/react"
import { useRouter } from "next/router"
import BreadCrumbNav from "../BreadCrumb"
import Footer from "../Footer"
import ScrollTopBtn from "../Navbar/ScrollTopBtn"
import { FiArrowRight } from "react-icons/fi"
import teachingLady from "../../assets/teaching.png"

const joinUsBtns = {
	border: "1px solid",
	w: "60%",
	borderRadius: "xl",
	borderColor: "font.100",
	color: "font.300",
	fontWeight: "semibold",
	py: 3,
	transition: "0.25s all ease-in-out",
	boxShadow: "-7px 7px rgba(98, 170, 250)",
	_hover: {
		color: "brand.300",
		transform: "scale(1.02)",
	},
}

const containerStyle = {
	bgImage: `url(${teachingLady.src})`,
	bgRepeat: "no-repeat",
	bgPosition: "center",
	px: 8,
	mb: 28,
	pt: 6,
}

const JoinUsPage = () => {
	const router = useRouter()

	return (
		<>
			<Flex
				mx={{
					md: "6 !important",
					lg: "12 !important",
				}}
			>
				<BreadCrumbNav />
			</Flex>
			<Stack align="center" sx={containerStyle}>
				<Stack align="center" w={{ base: "100%", md: "80%" }} gap={10}>
					<Text>
						We encourage applicants from diverse backgrounds to
						apply for any open position for which they are
						qualified. Our students must be exposed on a daily basis
						to a diverse group of powerful role models. Therefore,
						we have a responsibility to recruit, retain, develop,
						and reward a diverse and talented staff from a wide
						range of backgrounds to join our creative,
						mission-driven team.
					</Text>
					<Flex
						sx={joinUsBtns}
						as={"button"}
						align="center"
						justify="space-around"
						onClick={() => router.push("/join_us/admissions")}
					>
						Go To Admissions Page
						<Icon as={FiArrowRight} w={5} h={5} />
					</Flex>
					<Flex
						sx={joinUsBtns}
						as={"button"}
						align="center"
						justify="space-around"
						onClick={() => router.push("/join_us/vacancies")}
					>
						Go To Careers Page
						<Icon as={FiArrowRight} w={5} h={5} />
					</Flex>
				</Stack>
			</Stack>
			<Footer />
			<ScrollTopBtn />
		</>
	)
}

export default JoinUsPage
