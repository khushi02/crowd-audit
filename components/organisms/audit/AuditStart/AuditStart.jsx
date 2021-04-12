import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, makeStyles } from '@material-ui/core'

import CustomText from '../../../atoms/CustomText'
import RedirectionButton from '../../../molecules/RedirectionButton'

const useStyles = makeStyles(() => ({
  box1: {
    margin: '3.75rem 12.375rem 0 3rem'
  },
  box2: {
    margin: '6rem 6rem 0 3rem'
  },
  box3: {
    margin: '2.375rem 23.625rem 0 3rem'
  },
  box4: {
    float: 'right',
    margin: '7.625rem 3rem 5.275rem auto'
  },
  image1: {
    margin: 'auto 1rem auto 0'
  },
  image2: {
    display: 'block',
    margin: 'auto auto 1.375rem auto',
    maxHeight: '100%',
    maxWidth: '100%'
  }
}))

const AuditStart = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.box1}>
        <CustomText
          fontSize="1rem"
          fontWeight="400"
          text="Google’s Algorithm scans the images to generate labels that describe the whole image."
        />
      </Box>
      <Box className={classes.box2}>
        <CustomText
          fontSize="1.25rem"
          fontWeight="500"
          text="Do any labels for this image seem biased or discriminatory in a way that negatively impact any group of people? "
        />
      </Box>
      <Box className={classes.box3} display="flex">
        <Image className={classes.image1} fluid src="/arrow.png" />
        <CustomText color="#128F6E" fontSize="1.25rem" fontWeight="700" text="Select Labels to report" />
      </Box>
      <Box className={classes.box4}>
        <Box>
          <Image className={classes.image2} src="/nextImage.png" />
        </Box>
        <RedirectionButton
          fontSize="1rem"
          fontWeight="500"
          height="2.125rem"
          text="Skip to Next Image"
          width="11.25rem"
        />
      </Box>
    </>
  )
}

export default AuditStart
