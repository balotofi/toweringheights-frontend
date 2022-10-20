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
						<a
							href="https://www.google.com/maps/place/Towering+Heights+schools+Akure/@7.2356892,5.2367228,17z/data=!3m1!4b1!4m5!3m4!1s0x1047911e388d428b:0x4d0f13c5bcef0489!8m2!3d7.2356892!4d5.2389115"
							target="_blank"
							rel="noreferrer"
						>
							Afrostuff Estate,Alagbaka Extension, off Igbatoro road. Adjacent
							NIMC, Alagbaka, Akure.
						</a>
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
							<a href="tel:+234 814 266 5965">0814 266 5965</a>
						</Text>
						<Text variant="footer" className="paragraph" cursor="pointer">
							<a href="tel:+234 810 531 3377"> 0810 531 3377</a>
						</Text>
					</Flex>
				</Flex>
			</motion.div>
		</Flex>
	)
}

export default FooterContactDetails
