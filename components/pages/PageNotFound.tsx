import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import pageNotFound from "../../assets/404.png"
import Image from "next/image"

const PageNotFound = () => {
	const router = useRouter()

	return (
		<Flex w="100%" justify="center" mb={12} px={3}>
			<Flex direction="column" align="center" gap={3} textAlign="center">
				<Box>
					<Image
						src={pageNotFound}
						quality={100}
						priority
						alt="404 Image"
					/>
				</Box>
				<Heading as="h2" textTransform="uppercase">
					Oops! Page{" "}
					<span style={{ color: "#007AFF" }}>not found</span>
				</Heading>
				<Text my={4} w={"75%"}>
					The page you are looking for might have been removed, had
					its name changed,or is temporarily unavailable.
				</Text>
				<Button onClick={() => router.push("/")} size="lg">
					Go to homepage
				</Button>
			</Flex>
		</Flex>
	)
}

export default PageNotFound
