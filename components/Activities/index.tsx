import { Stack, Heading, Box, Flex } from "@chakra-ui/react"
import Activity from "./Activity"
import { activities } from "../../data"
import { smallHeadingBorder } from "../../theme/components/boxStyles"

const Activities = () => {
	return (
		<Stack
			py={6}
			px={{ base: 3, md: 8 }}
			align={{ base: "start", md: "center" }}
			gap={6}
		>
			<Flex direction="column" align="center">
				<Heading as="h3" variant="h3">
					Our Activities
				</Heading>
				<Box bg="font.400" sx={smallHeadingBorder} />
			</Flex>
			<Flex direction={{ base: "column", lg: "row" }} gap={10} width={"100%"}>
				{activities.map((activity) => (
					<Activity
						key={activity.id}
						alt={activity.alt}
						img={activity.img}
						summary={activity.summary}
						heading={activity.heading}
					/>
				))}
			</Flex>
		</Stack>
	)
}

export default Activities
