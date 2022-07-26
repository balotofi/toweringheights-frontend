import { Flex, Heading, Text, Box } from "@chakra-ui/react"
import Image from "next/image"
import { boxStyle, flexStyle } from "./style"
import { motion } from "framer-motion"
import { textVariants } from "./transition"

const Activity = ({ ...activity }) => {
	return (
		<Flex id={activity.id} sx={flexStyle} gap={8}>
			<Box sx={boxStyle}>
				<Image src={activity.img} alt={activity.alt} layout="fill" />
			</Box>
			<Box w={{ base: "100%", md: "50%" }}>
				<motion.div variants={textVariants} initial="hidden" whileInView="show">
					<Heading
						as="h4"
						variant="h2"
						mt="1.8rem"
						mb="1.5rem"
						fontSize={{ base: "xl", md: "md" }}
					>
						{activity.heading}
					</Heading>
					<Text lineHeight={7} className="paragraph">
						{activity.summary}
					</Text>
				</motion.div>
			</Box>
		</Flex>
	)
}

export default Activity
