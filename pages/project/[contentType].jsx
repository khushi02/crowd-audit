import React from 'react'
import { useRouter } from 'next/router'

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
        return <LearnPageTemplate />
      case 'label':
        return <LearnPageTemplate />
      case 'discuss':
        return <LearnPageTemplate />
    }
  }

  return (
    <>
      <ProjectHeader contentType={contentType} />
      {getPageTemplate()}
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const contentType = params.contentType
  return { props: { contentType } }
}

export default ProjectPage
