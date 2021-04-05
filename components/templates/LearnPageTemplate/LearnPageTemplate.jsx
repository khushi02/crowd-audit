import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'

import ProjectAbout from '../../organisms/ProjectAbout'
import ProjectData from '../../organisms/ProjectData'
import ProjectHelp from '../../organisms/ProjectHelp'
import ProjectMedia from '../../organisms/ProjectMedia'

const useStyles = makeStyles(() => ({
  aboutContainer: {
    padding: '5.5rem 5.75rem 5.938rem 4.375rem'
  },
  progressContainer: {
    padding: '4.125rem 5.75rem 5.938rem 4.375rem'
  },
  dataContainer: {},
  descriptionContainer: {},
  helpContainer: {}
}))

const LearnPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.aboutContainer} container>
        <ProjectAbout />
      </Grid>
      <Box className={classes.progressContainer}>
        <ProjectData />
      </Box>
      <Grid className={classes.helpContainer} container>
        <ProjectHelp />
      </Grid>
      <Box className={classes.dataContainer}>
        <ProjectMedia />
      </Box>
    </>
  )
}

export default LearnPageTemplate
