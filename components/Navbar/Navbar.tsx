import {
	Box,
	Flex,
	Text,
	useDisclosure,
	IconButton,
	Collapse,
} from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { navbarInnerBoxStyle } from "./style"

const Navbar = () => {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Box position="sticky" top="0" zIndex="9999">
			<Box sx={navbarInnerBoxStyle}>
				<Flex align="center" display={{ base: "flex", md: "none" }}>
					<IconButton
						onClick={onToggle}
						variant={"ghost"}
						aria-label={"Toggle barigation"}
						icon={
							isOpen ? (
								<IoMdClose color="white" fontSize="1.5rem" />
							) : (
								<FaBars color="white" />
							)
						}
					/>
					<Text fontSize="lg" color="white" lineHeight={5}>
						MENU
					</Text>
				</Flex>

				<Flex
					display={{ base: "none", md: "flex" }}
					align={"center"}
					w={"100%"}
					justify={"center"}
				>
					<DesktopNav />
				</Flex>
			</Box>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}

export default Navbar
