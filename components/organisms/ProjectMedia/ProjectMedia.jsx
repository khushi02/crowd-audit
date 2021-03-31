import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  imageBox: {
    paddingLeft: '2em',
    paddingRight: '2em'
  },
  titleBox: {
    marginBottom: '1em'
  }
}))

import CustomText from '../../atoms/CustomText'

const ProjectMedia = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.titleBox}>
        <CustomText fontSize="1.667em" fontWeight="700" text="Media in this project" />
      </Box>
      <Box>
        <Image className={classes.imageBox} fluid src="/projectMedia.png" />
      </Box>
    </>
  )
}

export default ProjectMedia
