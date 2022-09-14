/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
	Collapse,
	Flex,
	Icon,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react"
import { IoMdArrowDropdown } from "react-icons/io"
import ChakraNextLink from "../ChakraNextLink"
import { flexStyle, dropDownIcon, subLinkStyle } from "./style"

const MobileNavItem = ({ label, children, href }: NavProps) => {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex as={ChakraNextLink} href={href ?? "#"} sx={flexStyle}>
				<Text
					color={"white"}
					lineHeight={5}
					textTransform={"uppercase"}
					fontSize={"sm"}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={IoMdArrowDropdown}
						sx={dropDownIcon}
						transform={isOpen ? "rotate(180deg)" : ""}
					/>
				)}
			</Flex>
			<Collapse
				in={isOpen}
				animateOpacity
				style={{ marginTop: "0!important" }}
			>
				<Stack mt={2} pl={4} align={"start"}>
					{children &&
						children.map((child) => (
							<ChakraNextLink
								key={child.label}
								href={child.href!}
								style={subLinkStyle}
							>
								{child.label}
							</ChakraNextLink>
						))}
				</Stack>
			</Collapse>
		</Stack>
	)
}

export default MobileNavItem
