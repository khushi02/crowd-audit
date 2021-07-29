import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'

import RedirectionButton from '../RedirectionButton'
import CustomText from '../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  buttonBox: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: '0.625rem',
    boxShadow: '0 0.125rem 0.125rem rgba(0, 0, 0, 0.25)'
  },
  descriptionBox: {
    marginBottom: '3rem',
    marginTop: '1.25rem'
  },
  middleBox: {
    paddingLeft: '2.5rem',
    paddingRight: '15.25rem'
  },
  rightBox: {
    height: '100%',
    paddingRight: '2.5rem',
    position: 'relative',
    width: '100%'
  },
  titleBox: {
    marginTop: '3rem'
  }
}))

const ProjectCard = ({ image, title, description }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.container} container>
      <Grid item xs={2}>
        <Image fluid src={image} />
      </Grid>
      <Grid item xs={8}>
        <Box className={classes.middleBox}>
          <Box className={classes.titleBox}>
            <CustomText fontSize="1.25rem" fontWeight="700" text={title} />
          </Box>
          <Box className={classes.descriptionBox}>
            <CustomText fontSize="0.75rem" fontWeight="400" text={description} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box className={classes.rightBox} display="flex" justifyContent="flex-end">
          <Box className={classes.buttonBox}>
            <RedirectionButton
              fontSize="0.875rem"
              fontWeight="700"
              height="3.75rem"
              link="/project/learn"
              text="View Project"
              width="7.5rem"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProjectCard
