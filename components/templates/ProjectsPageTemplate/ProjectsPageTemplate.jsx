import _ from 'lodash'

import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import ProjectCard from '../../molecules/ProjectCard'
import data from '../../../public/projects/data'
import CustomText from '../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  box: {
    margin: '8.25rem 4.813rem 4.063rem 6.938rem '
  },
  cardBox: {
    marginTop: '2rem'
  }
}))

const ProjectsPageTemplate = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <CustomText fontSize="0.875rem" fontWeight="400" text="4 Active Projects" />
      {_.map(data, ({ thumbnail, title, description }, i) => (
        <Box className={classes.cardBox} key={`card-${i}`}>
          <ProjectCard image={thumbnail} title={title} description={description} />
        </Box>
      ))}
    </Box>
  )
}

export default ProjectsPageTemplate
