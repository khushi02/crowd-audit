import _ from 'lodash'

import React from 'react'
import { Box, Divider, LinearProgress, makeStyles, withStyles } from '@material-ui/core'

import CustomText from '../../atoms/CustomText'

const CustomLinearProgress = withStyles(() => ({
  bar: {
    backgroundColor: '#696969',
    borderRadius: '0.375rem'
  },
  colorPrimary: {
    backgroundColor: '#C4C4C4'
  },
  root: {
    borderRadius: '0.375rem',
    height: '1.25rem'
  }
}))(LinearProgress)

const useStyles = makeStyles(() => ({
  graduation: {
    color: '#939393',
    height: '2.562rem',
    width: '0.125rem'
  },
  textBox: {
    marginBottom: '1.5rem'
  }
}))

const CustomProgressBar = ({ value }) => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.textBox} display="flex" justifyContent="flex-end">
        <CustomText fontSize="0.875rem" fontWeight="500" text={`${value}% completed`} />
      </Box>
      <CustomLinearProgress value={value} variant="determinate" />
      <Box>
        {_.map([25, 50, 75], (value, i) => (
          <span className={classes.graduation} key={`graduation-${i}`}></span>
        ))}
      </Box>
    </>
  )
}

export default CustomProgressBar
