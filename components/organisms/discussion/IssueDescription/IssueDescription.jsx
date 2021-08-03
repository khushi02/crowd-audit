import _ from 'lodash'

import React from 'react'
import { Box, Grid, makeStyles, Chip } from '@material-ui/core'
import CustomText from '../../../atoms/CustomText'
import RedirectionButton from '../../../molecules/RedirectionButton'



const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '50ch'
  },
  issueContent: {
    paddingLeft: '1rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem'
  },
  searchBar: {
    paddingLeft: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  button1: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem'
  },
  button2: {
    paddingBottom: '0.75rem'
  },
  button3: {
    paddingTop: '2rem',
    paddingBottom: '0.75rem'
  },
}))

const IssueDescription = () => {
  const classes = useStyles()

  return (
    <>
    <Box  borderBottom={1} borderColor='grey.500'>
    <Grid container className={classes.root}>
      <Grid item xs={8} className={classes.issueContent}>
        <Grid item>
          <CustomText fontSize='0.75rem' fontWeight='0.5rem' text='Issue #456'/>
        </Grid>
        <Grid item>
          <CustomText fontSize='1rem' fontWeight='1rem' text='Black person with hand-held thermometer = firearm. Asian person with hand-held thermometer = electronic device. Computer vision is so utterly broken it should probably be started over from scratch.'/>
        </Grid>
        <Grid item>
          <Chip size="small" label="#RacialBias" color='#D2E2D9' />
          <Chip size="small" label="#POC" color='#D2E2D9' />
        </Grid>

      </Grid>
      <Grid item xs={2}>
        <Box display="flex" justifyContent="flex-end" className={classes.button3}>
            <RedirectionButton
              fontSize="0.875rem"
              height="2.5rem"
              link="/project/audit"
              width="9rem"
              text="Add Evidence"
            />
          </Box>
      </Grid>
      <Grid iem xs={2}>
        <Box display="flex" justifyContent="flex-end" className={classes.button1}>
            <RedirectionButton
              filled
              fontSize="0.875rem"
              height="2.5rem"
              link="/project/audit"
              width="9rem"
              text="I agree"
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" className={classes.button2}>
            <RedirectionButton
              filled
              fontSize="0.875rem"
              height="2.5rem"
              link="/project/audit"
              width="9rem"
              text="I disagree"
            />
          </Box>
      </Grid>
    </Grid>
    </Box>
    </>
  )
}

export default IssueDescription