import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import CustomText from '../../../atoms/CustomText'
import CustomProgressBar from '../../../molecules/CustomProgressBar'

const useStyles = makeStyles(() => ({
  progressBarBox: {
    margin: '0 1.25rem'
  },
  textBox: {
    marginBottom: '3.188rem'
  }
}))

const ProjectProgress = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.textBox}>
        <CustomText
          fontSize="1.25rem"
          fontWeight="700"
          text="The project needs 157 more audits to start generating evidences that can help ML teams improve algorithms"
        />
      </Box>
      <Box className={classes.progressBarBox}>
        <CustomProgressBar value={48} />
      </Box>
    </>
  )
}

export default ProjectProgress
