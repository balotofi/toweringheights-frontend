import { ReactNode, useRef } from "react"
import { InputGroup } from "@chakra-ui/react"
import { UseFormRegisterReturn } from "react-hook-form"

type FileUploadProps = {
	register: UseFormRegisterReturn
	accept?: string
	multiple?: boolean
	children?: ReactNode
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FileUpload = (props: FileUploadProps) => {
	const { register, accept, multiple, children, handleChange } = props
	const inputRef = useRef<HTMLInputElement | null>(null)
	const { ref, ...rest } = register as {
		ref: (instance: HTMLInputElement | null) => void
	}

	const handleClick = () => inputRef.current?.click()

	return (
		<InputGroup onClick={handleClick} variant="filled">
			<input
				type={"file"}
				multiple={multiple || false}
				hidden
				accept={accept}
				name="resume"
				{...rest}
				ref={(e) => {
					ref(e)
					inputRef.current = e
				}}
				onChangeCapture={handleChange}
			/>
			<>{children}</>
		</InputGroup>
	)
}

export default FileUpload
