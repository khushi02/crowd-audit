import _ from 'lodash'

import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'

import CustomText from '../../../atoms/CustomText'
import RedirectionButton from '../../../molecules/RedirectionButton'

const useStyles = makeStyles(() => ({
  gridItemLeft: {
    paddingRight: '6.375rem'
  },
  imageBox: {
    height: '11.688rem',
    width: '11.688rem'
  },
  imagesContainer: {
    marginTop: '3.375rem'
  },
  textBox: {
    marginBottom: '1.5rem'
  },
  topContainer: {
    marginBottom: '3.625rem'
  }
}))

const ProjectAbout = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.topContainer} container>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-start">
            <CustomText
              color="#128F6E"
              fontSize="1.25rem"
              fontWeight="700"
              text="Learn about the project and how you can contribute"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <RedirectionButton
              filled
              fontSize="0.875rem"
              height="2.5rem"
              link="/project/audit"
              width="12.875rem"
              text="Start Auditing"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.gridItemLeft} item xs={6}>
          <Box className={classes.textBox}>
            <CustomText fontSize="1.25rem" fontWeight="700" text="What is this project about?" />
          </Box>
          <Box className={classes.textBox}>
            <CustomText
              fontSize="1rem"
              fontWeight="400"
              text="Google Computer Vision is extensively used around the globe for learning new information. Google uses it’s advanced computer vision ML model to produce labels for images that describe them."
            />
          </Box>
          <CustomText
            fontSize="1rem"
            fontWeight="400"
            text="This model helps in generating quick results in real-time and high-stakes tasks that can allow quick description and categorization of images. However, ML engineers of this project have identifed cases of harmful biases against minority groups. They want the crowd auditors to help them identify various biases against minorities and come up with hypothesis to find a solution."
          />
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.imagesContainer} display="flex" flexWrap="wrap" justifyContent="space-between">
            {_.map(['projectAbout1', 'projectAbout2', 'projectAbout3'], (filename, i) => (
              <Box className={classes.imageBox} key={`img-${i}`}>
                <Image fluid src={`/${filename}.png`} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectAbout
