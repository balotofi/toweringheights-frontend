import { Heading, Stack } from "@chakra-ui/react"
import Image from "next/image"
import { motion } from "framer-motion"
import SchoolLogo from "../../assets/logo_ths.jpg"
import SearchBar from "../SearchBar"
import {
	AnimatedLogoNavBox,
	logoNavItemsVariant,
	logoNavVariant,
} from "./Animation"
import { logoNavContainer } from "./style"

const LogoNavbar = () => {
	return (
		<AnimatedLogoNavBox
			variants={logoNavVariant}
			initial="hidden"
			animate="show"
			sx={logoNavContainer}
		>
			<Stack
				direction={{ base: "column", md: "row" }}
				align="center"
				gap={{ md: 3.5 }}
			>
				<motion.div variants={logoNavItemsVariant}>
					<Image
						height={93}
						width={105}
						src={SchoolLogo}
						alt="School Logo"
						priority
					/>
				</motion.div>
				<motion.div variants={logoNavItemsVariant}>
					<Heading
						variant="logoHeading"
						fontSize={{
							base: "1.4rem",
							md: "1.6rem",
						}}
					>
						Towering Heights School
					</Heading>
				</motion.div>
			</Stack>

			<SearchBar />
		</AnimatedLogoNavBox>
	)
}

export default LogoNavbar
