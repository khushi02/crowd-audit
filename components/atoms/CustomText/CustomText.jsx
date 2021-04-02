import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

const useStyles = (fontSize, fontWeight) =>
  makeStyles(() => ({
    text: {
      color: '#4F4F4F',
      fontFamily: 'Roboto',
      fontSize: fontSize,
      fontWeight: fontWeight
    }
  }))

const CustomText = ({ fontSize, fontWeight, text }) => {
  const classes = useStyles(fontSize, fontWeight)()

  return <Typography className={classes.text}>{text}</Typography>
}

export default CustomText
