/* eslint-disable linebreak-style */
import {
	Box,
	Card,
	CardBody,
	Flex,
	Heading,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react"
// import { useRouter } from "next/router"
import Image from "next/image"
import BreadCrumbNav from "../BreadCrumb"
import BlogImage from "../../assets/group_img/IMG-20220421-WA0014.jpg"
import { blogs } from "../../data/Blogs"
import Comment from "../../assets/comments.svg"
import Eye from "../../assets/eye.svg"
import Footer from "../Footer"

const Blog = () => {
	// const router = useRouter()

	return (
		<>
			<Stack
				px={{ base: "6", md: "8", lg: "16" }}
				py={{ base: "2" }}
				gap={5}
				mb="30%"
			>
				<Flex justify="start">
					<BreadCrumbNav />
				</Flex>
				<Heading as="h2" variant="h2" mb={4} color="brand.300" fontSize="4xl">
					Our Blog
				</Heading>
				<Box ml="20px">
					<Text as="p" mb={9}>
						Catch up with the latest news & events at Towering Height Schools.
						<br />
						Stay up to date with valid and important information and messages.
					</Text>

					<Box pos="relative" boxSize="100%">
						<Image src={BlogImage} priority alt="Cultural day" />

						<Box
							pos="absolute"
							bottom="7px"
							bg="blackAlpha.700"
							px="32px"
							py="20px"
						>
							<Text fontSize="2xl" color="white" as="b">
								THE SCHOOL'S CULTURAL DAY
							</Text>
						</Box>
					</Box>

					<Text>Top Event</Text>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod
						temp incit ut labore dolore magnaaliqua. computer science students
						Ut enim ad minimveniam. Lorem ipsum.
					</Text>
					<Text>Read more </Text>
					<Box bg="gray.200" p={12} boxSize="95%" mt="10%">
						<SimpleGrid spacing={10} minChildWidth="300px">
							<Box
								color="brand.300"
								display="flex"
								justifyContent="center"
								alignItems="center"
								fontSize="3xl"
								fontWeight="semibold"
							>
								{" "}
								TOP NEWS & EVENT
							</Box>
							{blogs &&
								blogs.map((blog, idx) => (
									<Card key={idx} maxW="sm">
										<CardBody>
											<Image src={blog.image} alt="blog post" />
											<Stack mt="6" spacing="3">
												<Text>{blog.text}</Text>
												<Box
													display="flex"
													justifyContent="space-between"
													alignItems="center"
												>
													<Text>Headmaster</Text>
													<Box display="flex" gap={4}>
														<Box display="flex" alignItems="center" gap={1}>
															<Image src={Comment} alt="comment" width={22} />
															10
														</Box>
														<Box display="flex" alignItems="center" gap={1}>
															<Image src={Eye} alt="eye" width={22} />
															29
														</Box>
													</Box>
												</Box>
												<Text>{blog.date}</Text>
											</Stack>
										</CardBody>
									</Card>
								))}
						</SimpleGrid>
					</Box>
				</Box>
			</Stack>
			<Footer />
		</>
	)
}

export default Blog
