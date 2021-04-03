import _ from 'lodash'

import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import CustomText from '../../atoms/CustomText'
import CustomProgressBar from '../../molecules/CustomProgressBar'
import StatPaper from '../../molecules/StatPaper/'

const useStyles = makeStyles(() => ({
  dataBox: {
    paddingLeft: '6.875rem',
    paddingRight: '6.875rem',
    paddingTop: '2.438rem'
  },
  statBox: {
    paddingTop: '2.438rem'
  }
}))

const ProjectData = () => {
  const classes = useStyles()

  return (
    <>
      <CustomText fontSize="1.25rem" fontWeight="700" text="Project Data" />
      <Box className={classes.dataBox}>
        <CustomProgressBar value={45} />
        <Box className={classes.statBox} display="flex" flexWrap="wrap" justifyContent="space-between">
          {_.map(
            [
              { label: 'Auditors', value: 3490 },
              { label: 'Labels', value: 98451 },
              { label: 'Hypotheses Created', value: 450 },
              { label: 'Images Audited', value: 2269 },
              { label: 'Discussions Posted', value: 1569 }
            ],
            ({ label, value }) => (
              <StatPaper key={`paper-${label}`} label={label} value={value} />
            )
          )}
        </Box>
      </Box>
    </>
  )
}

export default ProjectData
