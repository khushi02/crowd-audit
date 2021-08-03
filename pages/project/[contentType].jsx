import React from 'react'
import { useRouter } from 'next/router'

import AuditPageTemplate from '../../components/templates/AuditPageTemplate'
import LearnPageTemplate from '../../components/templates/LearnPageTemplate'
import LabelPageTemplate from '../../components/templates/LabelPageTemplate'
import DiscussPageTemplate from '../../components/templates/DiscussPageTemplate'
import ProjectHeader from '../../components/organisms/project/ProjectHeader'
import AuditSearchTemplate from '../../components/templates/AuditSearchTemplate'

const ProjectPage = () => {
  const router = useRouter()
  const contentType = router.query.contentType.toString()
  const getPageTemplate = () => {
    switch (contentType) {
      case 'learn':
        return <LearnPageTemplate />
      case 'audit':
        return <AuditSearchTemplate />
      case 'audit2':
        return <AuditPageTemplate />
      case 'label':
        return <LabelPageTemplate />
      case 'discuss':
        return <DiscussPageTemplate />
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
