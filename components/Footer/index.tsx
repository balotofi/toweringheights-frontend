import { Box, Text, Flex, Heading, Link } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Image from "next/image"
import SchoolLogo from "../../assets/logo_ths.jpg"
import FooterImage from "./FooterImage"
import FooterLink from "./FooterLink"
import FooterSocial from "./FooterSocial"
import FooterContactDetails from "./FooterContactDetails"
import { footerLinks, footerSocials } from "../../data/footerData"
import { footerTextVariants } from "./Animation"

const Footer = () => {
	return (
		<Box position="relative" bottom="0">
			<FooterImage />
			<Flex p="2rem" bgColor="font.300" direction="column">
				<Flex
					direction={{
						base: "column",
						md: "row",
					}}
					gap={{ base: "6" }}
					align={{ md: "start" }}
				>
					<Box
						w={{ md: "25%" }}
						mx={{ md: "4" }}
						sx={{
							img: {
								borderRadius: "50%",
							},
						}}
					>
						<Image width={100} height={85} src={SchoolLogo} alt="School Logo" />
						<motion.div
							variants={footerTextVariants}
							initial="hidden"
							whileInView="show"
						>
							<Text
								variant="footer"
								fontSize="md"
								mt="1.5rem"
								className="paragraph"
							>
								Towering Heights Schools is a centre of education that prides
								itself on creating leaders of tomorrow. We pride ourselves in
								the quality of children we raise.
							</Text>
						</motion.div>
					</Box>
					<Flex direction="column" w={{ md: "15%" }}>
						<Heading as="h4" variant="footerHeading">
							Links
						</Heading>
						{footerLinks.map((link, idx) => (
							<FooterLink key={idx} href={link.href} text={link.text} />
						))}
					</Flex>
					<FooterContactDetails />
					<Flex direction="column" w={{ md: "25%" }}>
						<Heading as="h4" variant="footerHeading">
							Social Links
						</Heading>
						{footerSocials.map((social, idx) => (
							<FooterSocial
								key={idx}
								href={social.href}
								text={social.text}
								icon={social.icon}
							/>
						))}
					</Flex>
				</Flex>
				<Flex align="center" justify="space-between">
					<Text
						color="white"
						opacity="0.5"
						lineHeight="21px"
						fontSize="xs"
						fontWeight="medium"
						textAlign="left"
					>
						Copyright © 2022 THS. All Right Reserved.
					</Text>
					<Text
						color="white"
						opacity="0.5"
						lineHeight="21px"
						fontSize="xs"
						fontWeight="medium"
						textAlign="right"
					>
						Developed By{" "}
						<Link
							color="brand.200"
							isExternal
							href="https://github.com/Meekunn"
						>
							Meekunn
						</Link>
					</Text>
				</Flex>
			</Flex>
		</Box>
	)
}

export default Footer
