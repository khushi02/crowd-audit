import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { BookmarkBorder, OpenWith } from '@material-ui/icons'

import CustomText from '../../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  box: {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: '1.375rem'
  },
  icon: {
    color: '#128F6E',
    marginRight: '1.375rem'
  }
}))

const LabelImageHeader = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box} display="flex" justifyContent="flex-start">
      <OpenWith className={classes.icon} fontSize="small" />
      <BookmarkBorder className={classes.icon} />
      <CustomText color="#128F6E" fontSize="1rem" fontWeight="500" text="COMPARE" />
    </Box>
  )
}

export default LabelImageHeader
