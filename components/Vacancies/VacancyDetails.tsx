import {
	Flex,
	Box,
	Heading,
	Button,
	IconButton,
	Text,
	Collapse,
	useDisclosure,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { IoIosArrowDown } from "react-icons/io"
import { detailBox, listStyle } from "./style"

const VacancyDetails = (props: IVacantRole) => {
	const router = useRouter()
	const { isOpen, onToggle } = useDisclosure()
	const {
		title,
		date,
		grade,
		summary,
		descriptions,
		requirements,
		physicalRequirements,
	} = props

	return (
		<Box sx={detailBox}>
			<Flex direction="column" gap={3}>
				<Flex justify="space-between" align="center">
					<Heading as="h4" variant="footerHeading" mb={0}>
						{title}
					</Heading>
					<IconButton
						onClick={onToggle}
						variant="ghost"
						fontSize="3xl"
						aria-label="Toggle Collapse"
						icon={<IoIosArrowDown />}
						transform={isOpen ? "rotate(180deg)" : ""}
					/>
				</Flex>
				<Flex direction="column">
					<Text variant="vacancyDetail" className="paragraph">
						Job Title: <strong>{title}</strong>
					</Text>
					<Text variant="vacancyDetail" className="paragraph">
						Grade Level: <strong>{grade}</strong>
					</Text>
					<Text variant="vacancyDetail" className="paragraph">
						Start Date: <strong>{date}</strong>
					</Text>
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<Box h={"1px"} w="100%" bgColor={"font.300"} my={2} />
				<Flex direction="column" gap={2} align="start">
					<Heading as={"h5"} variant="h5" mt={2}>
						{" "}
						Job Summary
					</Heading>
					<Text variant="vacancyDetail" className="paragraph">
						{" "}
						{summary}{" "}
					</Text>
					<Heading as="h5" variant="h5" mt={2}>
						{" "}
						Job Description
					</Heading>
					<Text variant="vacancyDetail" className="paragraph">
						Essential functions of the job may include but are not limited to
						the following:
					</Text>
					<UnorderedList>
						{descriptions.map((description, idx) => (
							<ListItem sx={listStyle} key={idx}>
								{description}
							</ListItem>
						))}
					</UnorderedList>
					<Heading as="h5" variant="h5" mt={2}>
						{" "}
						Job Requirements
					</Heading>
					<Text variant="vacancyDetail" className="paragraph">
						Knowledge Skills and Ability Required:
					</Text>
					<UnorderedList>
						{requirements.map((requirement, idx) => (
							<ListItem sx={listStyle} key={idx}>
								{requirement}
							</ListItem>
						))}
					</UnorderedList>
					<Heading as={"h5"} variant="h5" mt={2}>
						{" "}
						Physical Requirements
					</Heading>
					<Text variant="vacancyDetail" className="paragraph">
						{physicalRequirements}
					</Text>
					<Button onClick={() => router.push("/join_us/vacancies/apply")}>
						Apply
					</Button>
				</Flex>
			</Collapse>
		</Box>
	)
}

export default VacancyDetails
