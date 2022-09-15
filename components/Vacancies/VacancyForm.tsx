/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { useState, useRef } from "react"
import {
	FormControl,
	FormLabel,
	Button,
	FormErrorMessage,
	Select,
	Input,
	FormHelperText,
	VStack,
	InputLeftElement,
	InputGroup,
	useToast,
	Flex,
} from "@chakra-ui/react"
import FileUpload from "../FileUpload"
import {
	fileInputStyle,
	formStyle,
	inputStyle,
	submitBtnStyle,
	vStackStyle,
} from "./style"
import { NAME_REGEX, PHONE_REGEX, EMAIL_REGEX } from "../../data/regex"
import { vacantRoles } from "../../data/vacancies"

const VacancyForm = ({ states }: IVacancyPage) => {
	const [loading, setLoading] = useState(false)
	const [changePlaceholder, setChangePlaceholder] =
		useState("no file selected")
	const toast = useToast()
	const form = useRef<HTMLFormElement>(null)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IVacancyFormVal>()

	const onSubmit = handleSubmit(() => {
		setLoading(true)
		if (form.current == null) return
		setLoading(false)
		setChangePlaceholder("no file selected")
		toast({
			title: "Notice",
			description: "Kindly Contact the School to Apply",
			status: "info",
			duration: 5000,
			isClosable: true,
			position: "bottom-right",
		})
		reset()
	})

	const validateFiles = (value: FileList) => {
		if (value.length < 1) {
			return "Files is required"
		}
		for (const file of Array.from(value)) {
			const fileMb = file.size / (1024 * 1024)
			const MAX_FILE_SIZE = 10
			if (fileMb > MAX_FILE_SIZE) {
				return "Max file size 10mb"
			}
		}
		return true
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
		if (e.target.files) {
			setChangePlaceholder(e.target.files[0].name)
			toast({
				title: "File Upload",
				description: "File Successfully Uploaded",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom-right",
			})
		} else {
			toast({
				title: "File Upload",
				description: "An error occured",
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "bottom-right",
			})
		}
	}

	return (
		<Flex justify="center" w="100%">
			<VStack sx={vStackStyle}>
				<form onSubmit={onSubmit} style={formStyle} ref={form}>
					<FormControl isInvalid={!!errors.role}>
						<FormLabel>Available Role</FormLabel>
						<Select
							{...register("role", {
								required: "Select a Role",
							})}
							placeholder="Select a role"
							variant="filled"
							color="font.300"
							size="lg"
							fontSize="sm"
							name="role"
						>
							{vacantRoles.map((detail: IVacantRole) => (
								<option value={detail.title} key={detail.id}>
									{detail.title}
								</option>
							))}
						</Select>
						{errors.role ? (
							<FormErrorMessage>
								{errors.role && errors?.role.message}
							</FormErrorMessage>
						) : (
							<FormHelperText visibility={"hidden"}>
								Hi
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isInvalid={!!errors.fullName}>
						<FormLabel>Full Name</FormLabel>
						<Input
							{...register("fullName", {
								required: "Full Name is Required",
								pattern: {
									value: NAME_REGEX,
									message:
										"Invalid Format! Try this Format: Towering Heights",
								},
							})}
							name="fullName"
							size="lg"
							variant="filled"
							sx={inputStyle}
							placeholder="Towering Heights"
							type="text"
						/>
						{errors.fullName ? (
							<FormErrorMessage>
								{errors.fullName && errors?.fullName.message}
							</FormErrorMessage>
						) : (
							<FormHelperText visibility={"hidden"}>
								Towering Heights
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isInvalid={!!errors.email}>
						<FormLabel>Email Address</FormLabel>
						<Input
							{...register("email", {
								required: "Email is Required",
								pattern: {
									value: EMAIL_REGEX,
									message: "Invalid Email!",
								},
							})}
							name="email"
							variant="filled"
							size="lg"
							type="email"
							sx={inputStyle}
							placeholder="toweringheights@mail.com"
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
					<FormControl isInvalid={!!errors.phone}>
						<FormLabel>Phone Number</FormLabel>
						<Input
							{...register("phone", {
								required: "Phone Number is Required",
								pattern: {
									value: PHONE_REGEX,
									message:
										"Invalid Phone Number! Try this Format +2349876543201",
								},
							})}
							name="phone"
							variant="filled"
							sx={inputStyle}
							size="lg"
							placeholder="+2349876543201"
						/>
						{errors.phone ? (
							<FormErrorMessage>
								{errors.phone && errors?.phone.message}
							</FormErrorMessage>
						) : (
							<FormHelperText visibility={"hidden"}>
								Phone Number
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isInvalid={!!errors.location}>
						<FormLabel>State of Residence</FormLabel>
						<Select
							{...register("location", {
								required: "Select a Location",
							})}
							placeholder="Select a location"
							variant="filled"
							color="font.300"
							size="lg"
							fontSize="sm"
							name="location"
						>
							{states.map((state, idx) => (
								<option key={idx} value={state.name}>
									{state.name}
								</option>
							))}
						</Select>
						{errors.location ? (
							<FormErrorMessage>
								{errors.location && errors?.location.message}
							</FormErrorMessage>
						) : (
							<FormHelperText visibility={"hidden"}>
								Pick a Location
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isInvalid={!!errors.file_}>
						<FormLabel>Upload CV</FormLabel>
						<InputGroup>
							<InputLeftElement h="100%" w="120px">
								<FileUpload
									accept={"application/pdf, application/doc"}
									register={register("file_", {
										validate: validateFiles,
									})}
									handleChange={handleChange}
								>
									<Button
										variant="inputFile"
										size="sm"
										h="2.2rem"
										mx={4}
										fontWeight="semibold"
									>
										Choose File
									</Button>
								</FileUpload>
							</InputLeftElement>
							<Input
								placeholder={changePlaceholder}
								sx={fileInputStyle}
								size="lg"
								disabled
							/>
						</InputGroup>
						{errors.file_ ? (
							<FormErrorMessage>
								{errors.file_ && errors?.file_.message}
							</FormErrorMessage>
						) : (
							<FormHelperText visibility={"hidden"}>
								Upload CV
							</FormHelperText>
						)}
					</FormControl>
					<Button
						variant="filled"
						sx={submitBtnStyle}
						size="lg"
						isLoading={loading}
						loadingText="Submitting"
						type="submit"
					>
						SUBMIT
					</Button>
				</form>
			</VStack>
		</Flex>
	)
}

export default VacancyForm
