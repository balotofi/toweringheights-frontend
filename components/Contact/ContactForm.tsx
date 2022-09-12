/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import {
	VStack,
	FormControl,
	FormLabel,
	Input,
	Button,
	Textarea,
	Flex,
	FormErrorMessage,
	FormHelperText,
	useToast,
} from "@chakra-ui/react"
import emailjs from "@emailjs/browser"
import { formStyle, inputStyle, vStackStyle } from "./style"
import { EMAIL_REGEX } from "../../data/regex"

const ContactForm = () => {
	const toast = useToast()
	const form = useRef<HTMLFormElement>(null)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IContactFormVal>()

	const [loading, setLoading] = useState(false)

	const onSubmit = handleSubmit(() => {
		setLoading(true)
		const currentForm = form.current
		if (currentForm == null) return
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID!,
				process.env.NEXT_PUBLIC_TEMPLATE_ID_CONTACT_FORM!,
				currentForm,
				process.env.NEXT_PUBLIC_USER_ID!
			)
			.then(() => {
				setLoading(false),
					toast({
						title: "Message Sent",
						description: "Thank You For Contacting Us",
						status: "success",
						duration: 5000,
						isClosable: true,
						position: "bottom-right",
					})
			})
			.catch(() => {
				setLoading(false),
					toast({
						title: "Oops, Message Not Sent",
						description: "Something went wrong",
						status: "error",
						duration: 5000,
						isClosable: true,
						position: "bottom-right",
					})
			})
		reset()
	})

	return (
		<>
			<VStack sx={vStackStyle}>
				<form onSubmit={onSubmit} style={formStyle} ref={form}>
					<FormControl isInvalid={!!errors.name}>
						<FormLabel>Your Name</FormLabel>
						<Input
							{...register("name", {
								required: "Your Name is Required",
								minLength: 5,
								maxLength: 35,
							})}
							name="name"
							size="lg"
							variant="filled"
							sx={inputStyle}
							placeholder="Towering Heights"
							type="text"
						/>

						{errors.name ? (
							<>
								<FormErrorMessage>
									{errors.name &&
										errors?.name.type === "minLength" &&
										"MinLength is 5 characters"}
								</FormErrorMessage>
								<FormErrorMessage>
									{errors.name &&
										errors?.name.type === "maxLength" &&
										"MaxLength is 35 characters"}
								</FormErrorMessage>
							</>
						) : (
							<FormHelperText visibility={"hidden"}>
								Towering Heights
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isInvalid={!!errors.email}>
						<FormLabel>Your Email</FormLabel>
						<Input
							{...register("email", {
								required: "Email is Required",
								pattern: {
									value: EMAIL_REGEX,
									message: "Invalid Email",
								},
							})}
							name="email"
							variant="filled"
							size="lg"
							type="email"
							sx={inputStyle}
							placeholder="Email Address"
						/>
						{errors.email ? (
							<FormErrorMessage>
								{errors.email && errors?.email.message}
							</FormErrorMessage>
						) : (
							<FormHelperText visibility={"hidden"}>
								toweringheights@mail.com
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isInvalid={!!errors.message}>
						<FormLabel>Your Message</FormLabel>
						<Textarea
							{...register("message", {
								required: "Message is Required",
								// minLength: 20,
								maxLength: 200,
							})}
							name="message"
							variant="filled"
							sx={inputStyle}
							size="lg"
							placeholder="Type your message here ..."
						/>
						{errors.message ? (
							<>
								{/* <FormErrorMessage>
                                    {errors.message && errors?.message.type === "minLength" && "MinLength is 25 characters"}
                                </FormErrorMessage> */}
								<FormErrorMessage>
									{errors.message &&
										errors?.message.type === "maxLength" &&
										"MaxLength is 200 characters"}
								</FormErrorMessage>
							</>
						) : (
							<FormHelperText visibility={"hidden"}>
								Your Message
							</FormHelperText>
						)}
					</FormControl>
					<Flex>
						<Button
							variant="outline"
							size="lg"
							isLoading={loading}
							loadingText="Sending"
							type="submit"
						>
							Send Message
						</Button>
					</Flex>
				</form>
			</VStack>
		</>
	)
}

export default ContactForm
