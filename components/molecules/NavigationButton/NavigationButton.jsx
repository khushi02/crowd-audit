import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    color: '#4F4F4F',
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontWeight: '400',
    marginLeft: '4.375rem',
    textTransform: 'none',
    '&:hover': {
      color: '#128F6E'
    }
  },
  emphasized: {
    color: '#128F6E'
  }
}))

const NavigationButton = ({ emphasized, link, text }) => {
  const classes = useStyles()

  return (
    <Button className={`${classes.button} ${emphasized ? classes.emphasized : ''}`} href={link}>
      {text}
    </Button>
  )
}

export default NavigationButton
