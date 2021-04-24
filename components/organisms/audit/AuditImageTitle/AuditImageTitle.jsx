import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import { Share } from '@material-ui/icons'

import CustomText from '../../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  box: {
    padding: '0.75rem 1rem'
  },
  container: {
    backgroundColor: '#4F4F4F'
  },
  icon: {
    color: '#FFFFFF'
  }
}))

const AuditImageTitle = ({ canShare, imageId, numImages }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.container} container>
      <Grid item xs={6}>
        <Box className={classes.box} display="flex" justifyContent="flex-start">
          <CustomText
            color="#FFFFFF"
            fontSize="1rem"
            fontWeight="700"
            text={`Auditing Image ${imageId} / ${numImages}`}
          />
        </Box>
      </Grid>
      {canShare ? (
        <Grid item xs={6}>
          <Box className={classes.box} display="flex" justifyContent="flex-end">
            <Share className={classes.icon} />
          </Box>
        </Grid>
      ) : null}
    </Grid>
  )
}

export default AuditImageTitle
