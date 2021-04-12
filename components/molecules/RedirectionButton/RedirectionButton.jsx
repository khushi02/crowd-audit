import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = ({ filled, fontSize, fontWeight, height, width }) =>
  makeStyles(() => ({
    button: {
      backgroundColor: filled ? '#128F6E' : '#FFFFFF',
      border: '0.063rem solid #128F6E',
      borderRadius: '0.445rem',
      boxSizing: 'border-box',
      color: filled ? '#FFFFFF' : '#128F6E',
      fontFamily: 'Roboto',
      fontSize: fontSize,
      fontWeight: fontWeight,
      height: height,
      textTransform: 'none',
      width: width,
      '&:hover': {
        backgroundColor: filled ? '#FFFFFF' : '#128F6E',
        color: filled ? '#128F6E' : '#FFFFFF'
      }
    }
  }))

const RedirectionButton = ({ filled, fontSize, fontWeight, height, link, text, width }) => {
  const classes = useStyles({ filled, fontSize, fontWeight, height, width })()

  return (
    <Button className={classes.button} href={link}>
      {text}
    </Button>
  )
}

export default RedirectionButton
