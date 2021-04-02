import _ from 'lodash'

import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'

import CustomText from '../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  gridItemLeft: {
    paddingRight: '2em'
  },
  gridItemRight: {
    paddingLeft: '5em'
  },
  titleBox: {
    marginBottom: '1em'
  }
}))

const ProjectHelp = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.gridItemLeft} item xs={5}>
        <Box className={classes.titleBox}>
          <CustomText fontSize="1.667em" fontWeight="700" text="How can you help?" />
        </Box>
        <ul>
          {_.map(
            [
              'Start by auditing the images and share your perspective.',
              'If you see any labels causing harm to a minority population, select those labels and report them.',
              'Submit your explanation for why you think it is biased or harmful and highlight which minority group it most affects.',
              'Raise your concerns by starting a discussion post, participate in discussions, share specific images with people you know from the minority group to gain a better perspective.',
              'Ultimately, help the ML engineers gather enough data that allows them to identify the problem with their ML model training that causes this issue and eventually find a solution.'
            ],
            (text, i) => (
              <li key={`li-${i}`}>
                <CustomText fontSize="1.333em" fontWeight="400" text={text} />
              </li>
            )
          )}
        </ul>
      </Grid>
      <Grid className={classes.gridItemRight} item xs={7}>
        <Image fluid src="/projectHelp.png" />
      </Grid>
    </>
  )
}

export default ProjectHelp
