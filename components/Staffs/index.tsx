import { Stack, Heading, Flex, Box } from "@chakra-ui/react"
import StaffSlider from "./StaffSlider"
import { flexHeading, sliderFlex } from "./style"

const Staffs = () => {
	return (
		<Stack bg="brand.500" py={8} px={4}>
			<Box>
				<Flex sx={flexHeading}>
					<Heading as="h3" variant="h3" mt={4}>
						Meet Our Team
					</Heading>
				</Flex>
				<Box sx={sliderFlex}>
					<StaffSlider />
				</Box>
			</Box>
		</Stack>
	)
}

export default Staffs
