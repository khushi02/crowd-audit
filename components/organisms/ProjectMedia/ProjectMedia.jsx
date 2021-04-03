import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  imageBox: {
    padding: '0 1.375rem'
  },
  titleBox: {
    marginBottom: '1rem'
  }
}))

import CustomText from '../../atoms/CustomText'

const ProjectMedia = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.titleBox}>
        <CustomText fontSize="1.25rem" fontWeight="700" text="Media in this project" />
      </Box>
      <Box>
        <Image className={classes.imageBox} fluid src="/projectMedia.png" />
      </Box>
    </>
  )
}

export default ProjectMedia
