/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
	Box,
	Flex,
	Text,
	InputGroup,
	Input,
	InputRightElement,
	IconButton,
	useToast,
	FormControl,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react"
import { SendPlaneIcon } from "../Icons"
import { footerImageBox } from "./style"
import { useForm } from "react-hook-form"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { newsLetterInputStyle } from "./style"
import { EMAIL_REGEX } from "../../data/regex"

const FooterImage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<INewsLetter>()
	const [loading, setLoading] = useState(false)
	const toast = useToast()
	const form = useRef<HTMLFormElement>(null)

	const onSubmit = handleSubmit(() => {
		setLoading(true)
		const currentForm = form.current
		if (currentForm == null) return
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID!,
				process.env.NEXT_PUBLIC_TEMPLATE_ID_NEWSLETTER!,
				currentForm,
				process.env.NEXT_PUBLIC_USER_ID!
			)
			.then((res) => {
				setLoading(false),
					console.log(res),
					toast({
						title: "Message Sent",
						description: "Thank You For Contacting Us",
						status: "success",
						duration: 5000,
						isClosable: true,
						position: "bottom-right",
					})
			})
			.catch((error) => {
				setLoading(false),
					toast({
						title: "Oops, Message Not Sent",
						description: "Something went wrong",
						status: "error",
						duration: 5000,
						isClosable: true,
						position: "bottom-right",
					}),
					console.log(error)
			})
		reset()
	})

	return (
		<Box sx={footerImageBox}>
			<Flex
				bgColor="rgba(0, 0, 0, 0.6)"
				overflow="hidden"
				h="100%"
				justify="center"
			>
				<Flex direction="column" justify="center" w={{ lg: "40%" }}>
					<Text fontSize={{ lg: "lg" }} variant="footerImageText">
						A wonderful{" "}
						<span
							style={{
								color: "#007AFF",
								fontWeight: "600",
							}}
						>
							FIRST
						</span>{" "}
						out of home learning{" "}
						<span
							style={{
								color: "#007AFF",
								fontWeight: "600",
							}}
						>
							EXPERIENCE
						</span>{" "}
						for your child.
					</Text>
					<form onSubmit={onSubmit} ref={form}>
						<FormControl isInvalid={!!errors.email}>
							<InputGroup
								bg="rgba(0, 0, 0, 0.2)"
								borderRadius="md"
							>
								<Input
									{...register("email", {
										required: "Email is Required",
										pattern: {
											value: EMAIL_REGEX,
											message: "Invalid Email",
										},
									})}
									type="email"
									size={{
										base: "md",
										md: "lg",
									}}
									placeholder="Enter e-mail to recieve news letter"
									sx={newsLetterInputStyle}
								/>
								<InputRightElement
									w="42px"
									h={"90%"}
									top="2px"
									right="2px"
								>
									<IconButton
										aria-label="Subscribe to Newsletter"
										icon={<SendPlaneIcon />}
										variant="subNewsletter"
										isLoading={loading}
										type="submit"
									/>
								</InputRightElement>
							</InputGroup>
							{errors.email ? (
								<FormErrorMessage>
									{errors.email && errors?.email.message}
								</FormErrorMessage>
							) : (
								<FormHelperText visibility={"hidden"}>
									Email
								</FormHelperText>
							)}
						</FormControl>
					</form>
				</Flex>
			</Flex>
		</Box>
	)
}

export default FooterImage
