import { Box } from "@chakra-ui/react"
import Image from "next/image"
import { ISlideShow } from "../../types/imageTypes"

const EachImage = ({ img, alt }: ISlideShow) => {
	return (
		<Box
			borderRadius="xl"
			boxShadow="2px 2px 10px 3px #333333"
			transition="0.25s ease-in-out all"
			_hover={{
				transform: "scale(1.1)",
			}}
			sx={{
				img: {
					borderRadius: "xl",
				},
			}}
		>
			<Image src={img} alt={alt} width={250} height={180} />
		</Box>
	)
}

export default EachImage
