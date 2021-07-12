import { Box, Grid } from '@material-ui/core'
import _ from 'lodash'

import React from 'react'

import StatPaper from '../../../molecules/StatPaper'

function ProjectData() {
  return (
    <div>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
      {_.map(
        [
          { label: 'Auditors', value: 3490 },
          { label: 'Labels', value: 98451 },
          { label: 'Hypotheses Created', value: 450 },
          { label: 'Images Audited', value: 2269 },
          { label: 'Discussions Posted', value: 1569 }
        ],
        ({ label, value }, i) => (
          <Box>
            <StatPaper icon={`/projectStat${i + 1}.png`} key={`paper-${label}`} label={label} value={value} />
          </Box>
        )
      )}
      </Box>
    </div>
  )
}

export default ProjectData
