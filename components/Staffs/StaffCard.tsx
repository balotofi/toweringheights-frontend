import { Box, Heading, Text, Button, Icon, Flex } from "@chakra-ui/react"
import Image from "next/image"
import { RiWhatsappLine } from "react-icons/ri"
import { MdMailOutline } from "react-icons/md"
import { imageBox, contentBox, staffName } from "./style"
import { IStaffProps } from "../../types/imageTypes"

const StaffCard = ({ sName, img, role }: IStaffProps) => {
	return (
		<Flex justify="center">
			<Box sx={imageBox}>
				<Image
					width={130}
					height={130}
					src={img}
					alt={sName}
					priority={true}
				/>
			</Box>
			<Box sx={contentBox}>
				<Heading as="h5" sx={staffName}>
					{sName}
				</Heading>
				<Text variant="staffLabel">{role}</Text>
				<Flex mb={4} justify="center" gap={2} px={2}>
					<Button size="md" variant={"staffCardBtn"}>
						<Icon
							as={RiWhatsappLine}
							w={{ base: 5, lg: 6 }}
							h={{ base: 5, lg: 6 }}
						/>
					</Button>
					<Button size="md" variant={"staffCardBtn"}>
						<Icon
							as={MdMailOutline}
							w={{ base: 5, lg: 6 }}
							h={{ base: 5, lg: 6 }}
						/>
					</Button>
				</Flex>
			</Box>
		</Flex>
	)
}

export default StaffCard
