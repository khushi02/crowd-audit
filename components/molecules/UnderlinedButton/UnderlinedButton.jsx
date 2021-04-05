import React from 'react'

import { Button, makeStyles } from '@material-ui/core'

const useStyles = ({ underlined }) =>
  makeStyles(() => ({
    button: {
      color: underlined ? '#128F6E' : '#4F4F4F',
      fontFamily: 'Roboto',
      fontSize: '0.875rem',
      fontWeight: underlined ? '700' : '500',
      marginLeft: '5.313rem',
      textTransform: 'none',
      textDecoration: underlined ? 'underline' : 'none',
      textDecorationColor: '#128F6E',
      textDecorationThickness: '0.188rem',
      textUnderlineOffset: '0.469rem',
      '&:hover': {
        color: '#128F6E',
        fontWeight: '700',
        textDecoration: 'underline',
        textDecorationColor: '#128F6E',
        textDecorationThickness: '0.188rem',
        textUnderlineOffset: '0.469rem'
      }
    }
  }))

const UnderlinedButton = ({ link, text, underlined }) => {
  const classes = useStyles({ underlined })()

  return (
    <Button className={classes.button} href={link}>
      {text}
    </Button>
  )
}

export default UnderlinedButton
