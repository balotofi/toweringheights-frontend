import { Flex, Heading, Box, Text, ScaleFade } from "@chakra-ui/react"
import { useInViewport } from "react-in-viewport"
import { useRef } from "react"
import { useRouter } from "next/router"
import { boxStyle } from "./style"

const LatestUpdates = () => {
	const router = useRouter()
	const ref = useRef<HTMLDivElement>(null)
	const { inViewport } = useInViewport(
		ref,
		{ rootMargin: "400px" },
		{ disconnectOnLeave: false },
		{}
	)
	console.log(inViewport)

	return (
		<Flex bg="brand.200" direction="column" align="center" py={10} gap={4}>
			<Heading
				as="h3"
				color="white"
				variant="h3"
				m={4}
				display={{ base: "block", lg: "none" }}
			>
				Latest Updates
			</Heading>
			<Flex direction="row" flexWrap={"wrap"} justify="center" gap={8}>
				<ScaleFade
					initialScale={0.9}
					in={inViewport}
					whileHover={{ scale: 1.1 }}
				>
					<Box
						sx={boxStyle}
						onClick={() => {
							router.push("/join_us/admissions")
						}}
						ref={ref}
					>
						<Heading variant="h4">Admissions</Heading>
						<Text className="paragraph">
							Choosing the right school marks a new beginning in
							the life of your child. Contact us as early as
							possible to have your child assessed and ready for
							school.
						</Text>
					</Box>
				</ScaleFade>
				<ScaleFade
					initialScale={0.9}
					in={inViewport}
					whileHover={{ scale: 1.1 }}
				>
					<Box sx={boxStyle} ref={ref}>
						<Heading variant="h4">Calendar</Heading>
						<Text className="paragraph">
							Terms, exams, holidays, keep up to date on what's
							hapenning when so you don't fall behind.
						</Text>
					</Box>
				</ScaleFade>
				<ScaleFade
					initialScale={0.9}
					in={inViewport}
					whileHover={{ scale: 1.1 }}
				>
					<Box sx={boxStyle} ref={ref}>
						<Heading variant="h4">Latest News</Heading>
						<Text className="paragraph">
							See firsthand news,updates and details about
							upcoming events and information.
						</Text>
					</Box>
				</ScaleFade>
			</Flex>
		</Flex>
	)
}

export default LatestUpdates
