import React from 'react'
import { Box, Grid, LinearProgress, makeStyles, withStyles } from '@material-ui/core'
import CustomText from '../../atoms/CustomText'

const CustomLinearProgress = withStyles(() => ({
  bar: {
    backgroundColor: '#696969',
    borderRadius: '1.667em'
  },
  colorPrimary: {
    backgroundColor: '#C4C4C4'
  },
  root: {
    borderRadius: '1.667em',
    height: '1em'
  }
}))(LinearProgress)

const useStyles = makeStyles(() => ({
  container: {
    marginBottom: '1em'
  }
}))

const CustomProgressBar = ({ value }) => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.container} container>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-start">
            <CustomText fontSize="1.167em" fontWeight="500" text={`${value}% complete`} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <CustomText fontSize="1.167em" fontWeight="500" text="Initiated on: January 2020" />
          </Box>
        </Grid>
      </Grid>
      <CustomLinearProgress value={value} variant="determinate" />
    </>
  )
}

export default CustomProgressBar
