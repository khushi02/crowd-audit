import _ from 'lodash'

import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'

import CustomText from '../../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  gridItemLeft: {
    paddingRight: '6.375rem'
  },
  textBox: {
    marginBottom: '1.5rem'
  }
}))

const ProjectDescription = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.gridItemLeft} item xs={6}>
        <Box className={classes.textBox}>
          <CustomText fontSize="1.25rem" fontWeight="700" text="What will you see in this project?" />
        </Box>
        <Box className={classes.textBox}>
          <CustomText
            fontSize="1rem"
            fontWeight="400"
            text="You’ll see a subset of images that have been labeled by the Computer Vision ML model. These images are a collection of random image types that are taken from multiple applications and use cases where Google’s Computer Vision is utilised."
          />
        </Box>
        <Box className={classes.textBox}>
          <CustomText
            fontSize="1rem"
            fontWeight="400"
            text="You’ll see an image and associated labels for each image that has been produced by the ML model. The audit tasks especially asks for minorities that may be affected due to mislabels and how severely does it impacts them."
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Image fluid src="/projectDescription.png" />
      </Grid>
    </>
  )
}

export default ProjectDescription
