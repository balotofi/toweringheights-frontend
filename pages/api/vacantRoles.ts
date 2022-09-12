import { vacantRoles } from "../../data/vacancies"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IVacantRole[]>
) {
	res.status(200).json(vacantRoles)
}
