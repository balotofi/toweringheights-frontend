import { Link as ChakraLink, Text, Box } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedBlogPreview, blogPreviewVariant } from "./AnimatedBlogPreview"
import { boxImageStyle, flexStyle } from "./style"

const Preview = ({ ...blog }) => {
	return (
		<AnimatedBlogPreview
			variants={blogPreviewVariant}
			initial="hidden"
			whileInView="show"
			direction="column"
			align="center"
			sx={flexStyle}
		>
			<Box sx={boxImageStyle}>
				<Image src={blog.img} alt={blog.alt} layout="fill" priority />
			</Box>
			<Text fontSize="sm" pt="1rem" className="paragraph">
				{blog.summary}
				<Link href="/coming_soon" passHref>
					<ChakraLink color="brand.300">Read More</ChakraLink>
				</Link>
			</Text>
		</AnimatedBlogPreview>
	)
}

export default Preview
