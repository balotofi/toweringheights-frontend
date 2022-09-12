import {
	Box,
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverTrigger,
	Stack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { navItems } from "../../../data"
import ChakraNextLink from "../ChakraNextLink"
import DesktopSubNav from "./DesktopSubNav"
import { activeLinkStyle, linkStyle, popOverContent } from "./style"

const DesktopNav = () => {
	const router = useRouter()

	return (
		<Stack direction="row">
			{navItems.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger="hover">
						<PopoverTrigger>
							<ChakraNextLink
								href={navItem.href ?? "#"}
								style={
									router.pathname == navItem.href
										? activeLinkStyle
										: linkStyle
								}
							>
								{navItem.label}
							</ChakraNextLink>
						</PopoverTrigger>
						{navItem.children && (
							<PopoverContent sx={popOverContent}>
								<PopoverArrow bg={"brand.300"} />
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav
											key={child.label}
											{...child}
										/>
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	)
}

export default DesktopNav
