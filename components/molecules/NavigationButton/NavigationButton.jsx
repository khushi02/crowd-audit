import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    color: '#4F4F4F',
    fontFamily: 'Roboto',
    fontSize: '1.167em',
    fontWeight: '400',
    marginLeft: '4.5em',
    textTransform: 'none'
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
