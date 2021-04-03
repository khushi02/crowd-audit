import React from 'react'

import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    color: '#4F4F4F',
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginLeft: '5.313rem',
    textTransform: 'none',
    '&:hover': {
      color: '#128F6E',
      fontWeight: '700',
      textDecoration: 'underline',
      textDecorationColor: '#128F6E',
      textDecorationThickness: '0.188rem',
      textUnderlineOffset: '0.469rem'
    }
  },
  underlined: {
    color: '#128F6E',
    fontWeight: '700',
    textDecoration: 'underline',
    textDecorationColor: '#128F6E',
    textDecorationThickness: '0.188rem',
    textUnderlineOffset: '0.469rem'
  }
}))

const UnderlinedButton = ({ link, text, underlined }) => {
  const classes = useStyles()

  return (
    <Button className={`${classes.button} ${underlined ? classes.underlined : ''}`} href={link}>
      {text}
    </Button>
  )
}

export default UnderlinedButton
