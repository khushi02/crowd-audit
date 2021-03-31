import React from 'react'
import { useRouter } from 'next/router'

import AuditPageTemplate from '../../components/templates/AuditPageTemplate'
import LearnPageTemplate from '../../components/templates/LearnPageTemplate'
import ProjectHeader from '../../components/organisms/ProjectHeader/ProjectHeader'

const ProjectPage = () => {
  const router = useRouter()
  console.log(router)
  const contentType = router.query.contentType.toString()
  const getPageTemplate = () => {
    switch (contentType) {
      case 'learn':
        return <LearnPageTemplate />
      case 'audit':
        return <AuditPageTemplate />
      case 'label':
        return null
      case 'discuss':
        return null
    }
  }

  return (
    <>
      <ProjectHeader contentType={contentType} />
      {getPageTemplate()}
    </>
  )
}

// export const getServerSideProps = async ({ params }) => {
//   const contentType = params.contentType
//   return { props: { contentType } }
// }

export default ProjectPage
