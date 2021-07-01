import _ from 'lodash'

import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import LabelChip from '../../../molecules/LabelChip'

const labels = ['GUN', 'BLACK', 'DANGER', 'CRIME', 'POINT', 'HARM', 'PLANT', 'WINDOW', 'DUTY', 'DISTANCE']

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: '#FAFAFA'
  }
}))

const LabelList = ({ selectedLabel }) => {
  const classes = useStyles()

  return (
    <>
      {_.map(labels, (label, i) => (
        <Box className={classes.box} key={`chip-${i}`}>
          <LabelChip
            clickable
            label={`<${label}>`}
            link={`/audit_select?label=${label}`}
            selected={label === selectedLabel}
          />
        </Box>
      ))}
    </>
  )
}

export default LabelList
