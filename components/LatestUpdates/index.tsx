import { Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { boxStyle } from "./style"
import { headingVariant, latestUpdateVariants } from "./transition"
import { AnimatedLatestUpdate } from "./AnimatedLatestUpdate"

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
			<Flex direction="row" flexWrap={"wrap"} justify="center" gap={8}>
				<AnimatedLatestUpdate
					variants={latestUpdateVariants}
					initial="hidden"
					animate="show"
					whileHover="hover"
					sx={boxStyle}
					onClick={() => {
						router.push("/join_us/admissions")
					}}
				>
					<Heading variant="h4">Admissions</Heading>
					<Text className="paragraph">
						Choosing the right school marks a new beginning in the
						life of your child. Contact us as early as possible to
						have your child assessed and ready for school.
					</Text>
				</AnimatedLatestUpdate>
				<AnimatedLatestUpdate
					variants={latestUpdateVariants}
					initial="hidden"
					animate="show"
					whileHover="hover"
					sx={boxStyle}
				>
					<Heading variant="h4">Calendar</Heading>
					<Text className="paragraph">
						Terms, exams, holidays, keep up to date on what's
						hapenning when so you don't fall behind.
					</Text>
				</AnimatedLatestUpdate>
				<AnimatedLatestUpdate
					variants={latestUpdateVariants}
					initial="hidden"
					animate="show"
					whileHover="hover"
					sx={boxStyle}
				>
					<Heading variant="h4">Latest News</Heading>
					<Text className="paragraph">
						See firsthand news,updates and details about upcoming
						events and information.
					</Text>
				</AnimatedLatestUpdate>
			</Flex>
		</Flex>
	)
}

export default LatestUpdates
