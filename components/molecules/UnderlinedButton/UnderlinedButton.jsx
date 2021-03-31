import React from 'react'

import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    color: '#4F4F4F',
    fontFamily: 'Roboto',
    fontSize: '1.167em',
    fontWeight: '500',
    marginRight: '5em',
    textTransform: 'none',
    '&:hover': {
      color: '#128F6E',
      fontWeight: '700',
      textDecoration: 'underline',
      textDecorationColor: '#128F6E',
      textDecorationThickness: '0.25em',
      textUnderlineOffset: '0.625em'
    }
  },
  underlined: {
    color: '#128F6E',
    fontWeight: '700',
    textDecoration: 'underline',
    textDecorationColor: '#128F6E',
    textDecorationThickness: '0.25em',
    textUnderlineOffset: '0.625em'
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
