import React from 'react'
import { useRouter } from 'next/router'

import AuditPageTemplate from '../../components/templates/AuditPageTemplate'
import LearnPageTemplate from '../../components/templates/LearnPageTemplate'
import ProjectHeader from '../../components/organisms/ProjectHeader/ProjectHeader'

const ProjectPage = () => {
  const router = useRouter()
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

export default ProjectPage
