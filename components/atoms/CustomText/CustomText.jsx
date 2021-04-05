import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

const useStyles = ({ color, fontSize, fontWeight }) =>
  makeStyles(() => ({
    text: {
      color: color || '#4F4F4F',
      fontFamily: 'Roboto',
      fontSize: fontSize,
      fontWeight: fontWeight
    }
  }))

const CustomText = ({ color, fontSize, fontWeight, text }) => {
  const classes = useStyles({ color, fontSize, fontWeight })()

  return <Typography className={classes.text}>{text}</Typography>
}

export default CustomText
