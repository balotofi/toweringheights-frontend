import type { NextPage } from "next"
import { useState, useEffect } from "react"
import axios, { AxiosResponse } from "axios"
import JobApplyPage from "../../../components/pages/JobApplyPage"

const Apply: NextPage = () => {
	const [details, setDetails] = useState<IVacantRole[]>([])

	useEffect(() => {
		const fetchDetails = async () => {
			await axios
				.get("/api/vacantRoles")
				.then((res: AxiosResponse<IVacantRole[]>) => {
					setDetails(res.data)
				})
				.catch((error) => {
					return error
				})
		}
		return () => {
			fetchDetails()
		}
	}, [])

	return (
		<>
			<JobApplyPage details={details} />
		</>
	)
}

export default Apply
