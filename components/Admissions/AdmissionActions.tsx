import { Box, Flex, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FaArrowRight } from "react-icons/fa"
import { smallHeadingBorder } from "../../theme/components/boxStyles"
import { actionsHeading, roundBtn } from "./style"

const AdmissionActions = () => {
	const router = useRouter()

	return (
		<Flex direction="column" align="center" gap={4} my="5 !important">
			<Flex direction="column" align="center">
				<Heading as="h3" sx={actionsHeading}>
					TAKE THE NEXT STEPS HERE
				</Heading>
				<Box sx={smallHeadingBorder} bg="brand.200" />
			</Flex>

			<Flex
				flexWrap="wrap"
				justify="center"
				gap={{ base: 6, lg: 10 }}
				my={4}
			>
				<Box
					as="button"
					sx={roundBtn}
					onClick={() => router.push("/coming_soon")}
				>
					Admission policies
					<FaArrowRight />
				</Box>
				<Box
					as="button"
					sx={roundBtn}
					onClick={() => router.push("/coming_soon")}
				>
					Apply now
					<FaArrowRight />
				</Box>
				<Box
					as="button"
					sx={roundBtn}
					onClick={() => router.push("/contact_us")}
				>
					Visit THS
					<FaArrowRight />
				</Box>
			</Flex>
		</Flex>
	)
}

export default AdmissionActions
