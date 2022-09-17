import { Box } from "@chakra-ui/react"
import Image from "next/image"
import { ISlideShow } from "../../types/imageTypes"

const EachImage = ({ img, alt }: ISlideShow) => {
	return (
		<Box
			borderRadius="md"
			boxShadow="0px 0px 15px #33333369"
			transition="0.25s ease-in-out all"
			width="250px"
			height="180px"
			position="relative"
			sx={{
				img: {
					borderRadius: "md",
				},
			}}
		>
			<Image src={img} alt={alt} layout="fill" placeholder="blur" />
		</Box>
	)
}

export default EachImage
