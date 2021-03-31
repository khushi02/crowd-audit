import React from 'react'
import { Box, makeStyles, Paper } from '@material-ui/core'

import CustomText from '../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: '#FAFAFA',
    borderRadius: '0.5em',
    boxShadow: '0 0.167em 0.167em rgba(0, 0, 0, 0.25)',
    height: '13em',
    position: 'relative',
    width: '16em'
  },
  labelBox: {
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, 0)',
    width: '100%'
  },
  valueBox: {
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -100%)'
  }
}))

const StatPaper = ({ label, value }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Box className={classes.valueBox}>
        <CustomText fontSize="2.25em" fontWeight="500" text={value} />
      </Box>
      <Box className={classes.labelBox}>
        <CustomText fontSize="1.25em" fontWeight="500" text={label} />
      </Box>
    </Paper>
  )
}

export default StatPaper
