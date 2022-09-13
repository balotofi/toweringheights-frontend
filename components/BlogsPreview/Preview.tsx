import { Link, Text } from "@chakra-ui/react"
import Image from "next/image"
import { AnimatedBlogPreview, blogPreviewVariant } from "./AnimatedBlogPreview"
import { flexStyle } from "./style"

const Preview = ({ ...blog }) => {
	return (
		<AnimatedBlogPreview
			variants={blogPreviewVariant}
			initial="hidden"
			whileInView="show"
			whileHover="hover"
			sx={flexStyle}
		>
			<Image
				width="250"
				height="155"
				src={blog.img}
				alt={blog.alt}
				priority={true}
			/>
			<Text fontSize="sm" pt="1rem" className="paragraph">
				{blog.summary}
				<Link color="brand.300">Read More</Link>
			</Text>
		</AnimatedBlogPreview>
	)
}

export default Preview
