import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
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
import axios, { AxiosResponse } from "axios"
import FileUpload from "../FileUpload"
import { MdInfo } from "react-icons/md"
import { fileInputStyle, formStyle, helperTextStyle, inputStyle, submitBtnStyle, vStackStyle } from "./style"

const NAME_REGEX = /^[A-Za-z\-]+\s[A-Za-z\-]*$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
const EMAIL_REGEX = /^[A-Za-z0-9_\-\.]{4,}[@][a-z]+[\.][a-z]{2,3}$/

const VacancyForm = () => {

    const [loading, setLoading] = useState(false)
    const [changePlaceholder, setChangePlaceholder] = useState('no file selected')
    const [states, setStates] = useState<IStateResData[]>([])
    const toast = useToast()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IVacancyFormVal>()

    useEffect(() => {
        const fetcher = async() => {
            await axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
            .then((response: AxiosResponse<IStateResData[]>)=> {
                setStates(response.data)
            })
            .catch((error) => {
                return error
            })
        }
        fetcher()
    }, [])

    const onSubmit = handleSubmit((data) => {
        setLoading(true)
        setTimeout(()=> {
            console.log('On Submit: ', data)
            setLoading(false)
            setChangePlaceholder('no file selected')
            toast({
                title: 'Application Sent',
                description: "Thank You For Applying",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'bottom-right',
            })
        }, 1500)
        reset()
    })

    const validateFiles = (value: FileList) => {
        if (value.length < 1) {
            return 'Files is required'
        }
        for (const file of Array.from(value)) {
            const fileMb = file.size / (1024 * 1024)
            const MAX_FILE_SIZE = 10
            if (fileMb > MAX_FILE_SIZE) {
                return 'Max file size 10mb'
            }
        }
        return true
    }

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files){
            setChangePlaceholder(e.target.files[0].name)
            toast({
                title: 'File Upload',
                description: "File Successfully Uploaded",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'bottom-right',
            })
        } else {
            toast({
                title: 'File Upload',
                description: "An error occured",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom-right',
            })
        }
    }

    return (
        <Flex justify='center' w='100%' >
          <VStack sx={vStackStyle}>
            <form onSubmit={onSubmit} style={formStyle}>
                <FormControl isInvalid={!!errors.role}>
                    <FormLabel>Available Role</FormLabel> 
                    <Select {...register('role', { required: 'Select a Role'})} 
                        placeholder='Select a role' 
                        variant='filled' 
                        color='font.300' 
                        size='lg' 
                        fontSize='sm'
                    >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <FormErrorMessage>{errors.role && errors?.role.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.fullName}>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                        {...register('fullName', {
                            required: 'Full Name is Required',
                            pattern: {
                                value: NAME_REGEX,
                                message: 'Invalid Format, Follow the Helper Text'
                            }
                        })} size='lg' variant='filled' sx={inputStyle} placeholder='Full Name' type='text' />
                        <FormHelperText sx={helperTextStyle}> <MdInfo /> Towering Heights </FormHelperText> 
                        <FormErrorMessage>{errors.fullName && errors?.fullName.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                    <FormLabel>Email Address</FormLabel>
                    <Input 
                        {...register('email', {
                            required: 'Email is Required',
                            pattern: {
                                value: EMAIL_REGEX,
                                message: 'Invalid Email'
                            }
                        })}
                        variant='filled' size='lg' type='email' sx={inputStyle} placeholder='Email Address' 
                    />
                    <FormErrorMessage>{errors.email && errors?.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.phone}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input 
                        {...register('phone', {
                            required: 'Phone Number is Required',
                            pattern: {
                                value: PHONE_REGEX,
                                message: 'Invalid Format'
                            }
                        })}
                        variant='filled' sx={inputStyle} size='lg' placeholder='Phone Number' 
                    />
                    <FormHelperText sx={helperTextStyle}> <MdInfo /> +2340000000000</FormHelperText>
                    <FormErrorMessage>{errors.phone && errors?.phone.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.location}>
                    <FormLabel>State of Residence</FormLabel> 
                    <Select {...register('location', { required: 'Select a Location'})} 
                        placeholder='Select' 
                        variant='filled' 
                        color='font.300' 
                        size='lg' 
                        fontSize='sm'
                    >
                        {states.map((state, idx) => (
                            <option key={idx} value={state.name}>{state.name}</option>
                        ))}
                    </Select>
                    <FormErrorMessage>{errors.location && errors?.location.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.file_}>
                    <FormLabel>Upload CV</FormLabel>
                    <InputGroup>
                        <InputLeftElement h='100%' w='120px'>
                            <FileUpload
                                accept={'application/pdf, application/doc'}
                                register={register('file_', { validate: validateFiles })}
                                handleChange={handleChange}
                            >
                                <Button variant='input-file' size='sm' h='2.2rem' mx={4} fontWeight='semibold'>
                                    Choose File
                                </Button>
                            </FileUpload>
                        </InputLeftElement>
                        <Input placeholder={changePlaceholder} sx={fileInputStyle} size='lg' disabled />
                    </InputGroup> 
                    <FormErrorMessage>
                        {errors.file_ && errors?.file_.message}
                    </FormErrorMessage>
                </FormControl>
                <Button variant='filled'
                    sx={submitBtnStyle}
                    size= 'lg'
                    isLoading={loading}
                    loadingText='Submitting'
                    type='submit'
                >
                    SUBMIT
                </Button>
            </form>
          </VStack>
        </Flex>
    )
}

export default VacancyForm