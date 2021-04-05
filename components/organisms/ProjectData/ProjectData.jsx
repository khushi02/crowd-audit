import _ from 'lodash'

import React from 'react'
import { makeStyles } from '@material-ui/core'

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
    padding: '0 2.5rem 0 1rem'
  }
}))

const ProjectData = () => {
  const classes = useStyles()

  return (
    <>
      {_.map(
        [
          { label: 'Auditors', value: 3490 },
          { label: 'Labels', value: 98451 },
          { label: 'Hypotheses Created', value: 450 },
          { label: 'Images Audited', value: 2269 },
          { label: 'Discussions Posted', value: 1569 }
        ],
        ({ label, value }, i) => (
          <StatPaper icon={`/projectStat${i + 1}.png`} key={`paper-${label}`} label={label} value={value} />
        )
      )}
    </>
  )
}

export default ProjectData
