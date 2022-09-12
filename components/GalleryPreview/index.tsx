import { Box, Flex, Link as ChakraLink, Heading } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image1 from "../../assets/class_activities/IMG_20200115_092018_0.jpg"
import Image2 from "../../assets/class_activities/IMG_20200204_114106_8.jpg"
import Image3 from "../../assets/cultural/POP_2079.jpg"
import { ISlideShow } from "../../types/imageTypes"
import EachImage from "./EachImage"
import { smallHeadingBorder } from "../../theme/components/boxStyles"
import {
	AnimatedContainer,
	containerVariants,
	imageVariants,
} from "./Animation"

const galleryPreviews: ISlideShow[] = [
	{
		img: Image1,
		alt: "image1",
	},
	{
		img: Image2,
		alt: "image2",
	},
	{
		img: Image3,
		alt: "image3",
	},
]

const GalleryPreview = () => {
	return (
		<Flex direction="column" p={8} gap={6}>
			<Flex direction="column" align="center" mx={6}>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
				>
					<Heading as="h3" variant="h3">
						Our Gallery
					</Heading>
				</motion.div>
				<Box sx={smallHeadingBorder} bg="font.400" />
			</Flex>
			<AnimatedContainer
				variants={imageVariants}
				initial="hidden"
				whileInView="show"
			>
				<Flex
					m={4}
					direction="row"
					flexWrap="wrap"
					gap={6}
					justify="center"
				>
					{galleryPreviews.map((preview, idx) => (
						<EachImage
							key={idx}
							alt={preview.alt}
							img={preview.img}
						/>
					))}
				</Flex>
			</AnimatedContainer>
			<Flex justify="center">
				<Link href="/gallery" passHref>
					<ChakraLink variant="viewMore">
						Click here to see more
					</ChakraLink>
				</Link>
			</Flex>
		</Flex>
	)
}

export default GalleryPreview
