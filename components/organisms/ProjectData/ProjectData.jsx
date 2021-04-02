import _ from 'lodash'

import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import CustomText from '../../atoms/CustomText'
import CustomProgressBar from '../../molecules/CustomProgressBar'
import StatPaper from '../../molecules/StatPaper/'

const useStyles = makeStyles(() => ({
  dataBox: {
    paddingLeft: '10em',
    paddingRight: '10em',
    paddingTop: '5em'
  },
  statBox: {
    paddingTop: '5em'
  }
}))

const ProjectData = () => {
  const classes = useStyles()

  return (
    <>
      <CustomText fontSize="1.667em" fontWeight="700" text="Project Data" />
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
