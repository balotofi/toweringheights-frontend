import { Flex, Heading, Text, Box, Icon } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { boxStyle, textIconStyle } from "./style"
import { IoIosArrowForward } from "react-icons/io"
import { headingVariant } from "./transition"

const LatestUpdates = () => {
	const router = useRouter()

	return (
		<Flex bg="brand.200" direction="column" align="center" py={10} gap={8}>
			<motion.div
				variants={headingVariant}
				whileInView="show"
				initial="hidden"
			>
				<Heading
					as="h3"
					color="white"
					variant="h3"
					m={4}
					display={{ base: "block", lg: "none" }}
				>
					Latest Updates
				</Heading>
			</motion.div>
			<Flex flexWrap={"wrap"} justify="center" gap={8}>
				<Box sx={boxStyle}>
					<Heading variant="h4" mb={0}>
						Admissions
					</Heading>
					<Text className="paragraph">
						Choosing the right school marks a new beginning in the
						life of your child. Contact us as early as possible to
						have your child assessed and ready for school.
					</Text>
					<Flex
						sx={textIconStyle}
						align="center"
						justify="flex-start"
						onClick={() => {
							router.push("/join_us/admissions")
						}}
					>
						Explore More
						<Icon as={IoIosArrowForward} w={5} h={5} />
					</Flex>
				</Box>
				<Box sx={boxStyle}>
					<Heading variant="h4" mb={0}>
						Calendar
					</Heading>
					<Text className="paragraph">
						Terms, exams, holidays, keep up to date on what&apos;s
						hapenning when so you don&apos;t fall behind.
					</Text>
					<Flex
						sx={textIconStyle}
						align="center"
						justify="flex-start"
						onClick={() => {
							router.push("/coming_soon")
						}}
					>
						Explore More
						<Icon as={IoIosArrowForward} w={5} h={5} />
					</Flex>
				</Box>
				<Box sx={boxStyle}>
					<Heading variant="h4" mb={0}>
						Latest News
					</Heading>
					<Text className="paragraph">
						See firsthand news,updates and details about upcoming
						events and information.
					</Text>
					<Flex
						sx={textIconStyle}
						align="center"
						justify="flex-start"
						onClick={() => {
							router.push("/coming_soon")
						}}
					>
						Explore More
						<Icon as={IoIosArrowForward} w={5} h={5} />
					</Flex>
				</Box>
			</Flex>
		</Flex>
	)
}

export default LatestUpdates
