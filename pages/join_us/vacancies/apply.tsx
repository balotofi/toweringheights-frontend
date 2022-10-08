/* eslint-disable require-jsdoc */
import type { NextPage } from "next"
import JobApplyPage from "../../../components/pages/JobApplyPage"

interface IApplyPage {
	states: IStateResData[]
}

const Apply: NextPage<IApplyPage> = () => {
	return (
		<>
			<JobApplyPage />
		</>
	)
}

export default Apply

// const Apply: NextPage<IApplyPage> = ({ states }) => {
// 	return (
// 		<>
// 			<JobApplyPage />
// 		</>
// 	)
// }

// export async function getStaticProps() {
// 	const stateRes = await fetch(
// 		"http://locationsng-api.herokuapp.com/api/v1/states"
// 	)
// 	const states = await stateRes.json()

// 	return {
// 		props: {
// 			states,
// 		},
// 	}
// }
