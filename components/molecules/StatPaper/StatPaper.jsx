import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, makeStyles, Paper } from '@material-ui/core'

import CustomText from '../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  icon: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconBox: {
    height: '3.125rem',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -120%)',
    width: '3.125rem'
  },
  labelBox: {
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    top: 'calc(50% + 2rem)',
    transform: 'translate(-50%, 0)',
    width: '100%'
  },
  paper: {
    backgroundColor: '#FAFAFA',
    borderRadius: '0.401rem',
    boxShadow: '0 0.125rem 0.125rem rgba(0, 0, 0, 0.25)',
    height: '9.625rem',
    position: 'relative',
    width: '12rem'
  },
  valueBox: {
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, 0)',
    width: '100%'
  }
}))

const StatPaper = ({ icon, label, value }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Box className={classes.iconBox}>
        <Image className={classes.icon} fluid src={icon} />
      </Box>
      <Box className={classes.valueBox}>
        <CustomText fontSize="1.719rem" fontWeight="500" text={value} />
      </Box>
      <Box className={classes.labelBox}>
        <CustomText fontSize="0.917rem" fontWeight="500" text={label} />
      </Box>
    </Paper>
  )
}

export default StatPaper
