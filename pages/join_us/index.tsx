import type { NextPage } from "next"
import { Stack, Heading } from "@chakra-ui/react"
import BreadCrumbNav from "../../components/BreadCrumb"

const JoinUs: NextPage = () => {
	return (
		<Stack>
			<BreadCrumbNav />
			<Heading variant="h2">Join Us</Heading>
		</Stack>
	)
}

export default JoinUs
