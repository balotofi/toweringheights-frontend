import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
// import pageNotFoundBig from "../../assets/404.png"
import comingSoon from "../../assets/coming_soon.png"
import Image from "next/image"

const ComingSoonPage = () => {
	const router = useRouter()

	return (
		<Flex w="100%" justify="center" mb={12} px={3} pt={6}>
			<Flex direction="column" align="center" gap={3} textAlign="center">
				<Box>
					<Image
						src={comingSoon}
						quality={100}
						priority
						alt="Construction Image"
					/>
				</Box>
				<Text w={"75%"}>
					Sorry, this page is getting a tune-up and almost ready for use.
				</Text>
				<Text my={4} w={"75%"}>
					You may check back in a little while.
				</Text>
				<Button onClick={() => router.push("/")} size="lg">
					Go to homepage
				</Button>
			</Flex>
		</Flex>
	)
}

export default ComingSoonPage
