import type { NextPage } from "next"
import { useState, useEffect } from "react"
import axios, { AxiosResponse } from "axios"
import VacancyPage from "../../../components/pages/VacancyPage"

const Vacancies: NextPage = () => {

    const [details, setDetails] = useState<IVacantRole[]>([])

    useEffect(() => {
        const fetchDetails = async () => {
            await axios.get("/api/vacantRoles")
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
            <VacancyPage details={details} />
        </>
    )
}

export default Vacancies