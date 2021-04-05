import _ from 'lodash'

import React from 'react'
import { Box } from '@material-ui/core'

import LabelChip from '../../molecules/LabelChip'

const labels = ['GUN', 'BLACK', 'DANGER', 'CRIME', 'POINT', 'HARM', 'PLANT', 'WINDOW', 'DUTY', 'DISTANCE']

const LabelList = ({ selectedLabel }) => (
  <>
    {_.map(labels, (label, i) => (
      <Box key={`chip-${i}`}>
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

export default LabelList
