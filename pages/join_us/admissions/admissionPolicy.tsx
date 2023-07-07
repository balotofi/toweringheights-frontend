import React from 'react'
import { useRouter } from 'next/router'
import AdmissionPolicyPage from '../../../components/pages/AdmissionPolicyPage'
import { NextPage } from 'next'

const admissionsId: NextPage = () => {
    const router = useRouter()

    const admissionsId = router.query.admissionsId

  return (
    <AdmissionPolicyPage />
  )
}

export default admissionsId