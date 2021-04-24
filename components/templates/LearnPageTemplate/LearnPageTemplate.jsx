import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'

import ProjectAbout from '../../organisms/project/ProjectAbout'
import ProjectData from '../../organisms/project/ProjectData'
import ProjectDescription from '../../organisms/project/ProjectDescription'
import ProjectProgress from '../../organisms/project/ProjectProgress'

const useStyles = makeStyles(() => ({
  aboutContainer: {
    padding: '5.5rem 5.75rem 5.938rem 4.375rem'
  },
  progressContainer: {
    backgroundColor: '#E5E5E5',
    padding: '4.125rem 5.75rem 5.938rem 4.375rem'
  },
  dataContainer: {
    padding: '3.625rem 6.875rem 6.813rem 6.875rem'
  },
  descriptionContainer: {
    padding: '5.5rem 5.75rem 3.625rem 4.375rem'
  }
}))

const LearnPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.aboutContainer} container>
        <ProjectAbout />
      </Grid>
      <Box className={classes.progressContainer}>
        <ProjectProgress />
      </Box>
      <Box className={classes.helpContainer}>
        <Image fluid src="/projectHelp.png" />
      </Box>
      <Grid className={classes.descriptionContainer} container>
        <ProjectDescription />
      </Grid>
      <Box className={classes.dataContainer} display="flex" flexWrap="wrap" justifyContent="space-between">
        <ProjectData />
      </Box>
    </>
  )
}

export default LearnPageTemplate
