import { Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { MdLocationOn } from "react-icons/md"
import { ImPhone } from "react-icons/im"
import { whiteIcon } from "../../theme/components/iconStyles"
import { flexStyle } from "./style"
import { motion } from "framer-motion"
import { footerTextVariants } from "./Animation"

const FooterContactDetails = () => {
	return (
		<Flex direction="column" w={{ md: "25%" }}>
			<Heading as="h4" variant="footerHeading">
				Find Us
			</Heading>
			<motion.div
				variants={footerTextVariants}
				initial="hidden"
				whileInView="show"
				whileHover="hover"
			>
				<Flex sx={flexStyle}>
					<Icon as={MdLocationOn} sx={whiteIcon} />
					<Text variant="footer" className="paragraph" cursor="pointer">
						Afrostuff Estate,Alagbaka Extension, off Igbatoro road. Adjacent
						NIMC, Alagbaka, Akure.
					</Text>
				</Flex>
			</motion.div>
			<motion.div
				variants={footerTextVariants}
				initial="hidden"
				whileInView="show"
				whileHover="hover"
			>
				<Flex sx={flexStyle}>
					<Icon as={ImPhone} sx={whiteIcon} />
					<Flex direction="column">
						<Text variant="footer" className="paragraph" cursor="pointer">
							0814 266 5965
						</Text>
						<Text variant="footer" className="paragraph" cursor="pointer">
							0810 531 3377
						</Text>
					</Flex>
				</Flex>
			</motion.div>
		</Flex>
	)
}

export default FooterContactDetails
