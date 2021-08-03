import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'

import IssuesList from '../../organisms/discussion/IssuesList'
import IssueDescription from '../../organisms/discussion/IssueDescription'

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#FAFAFA'
  },
  leftBar: {
    backgroundColor: theme.palette.background.paper,
  },
  bottomBox: {
    height: '5.625rem'
  },
  box: {
    alignItems: 'center',
    borderBottom: '0.063rem solid #4F4F4F',
    padding: '1.375rem'
  },
  container: {
    paddingLeft: '3.375rem'
  },
  image: {
    display: 'block',
    margin: 'auto',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  rightGridItem: {
    borderLeft: '0.063rem solid #4F4F4F'
  }
}))

const DiscussPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid item xs={3} className={classes.leftBar}>
          <Grid container>
            <IssuesList />
          </Grid>
          <Box className={`${classes.background} ${classes.bottomBox}`} />
        </Grid>
        <Grid className={classes.rightGridItem} item xs={9}>
          <Grid item>
            <IssueDescription />
          </Grid>
          {/* <LabelStart /> */}
          <Box className={classes.bottomBox} />
        </Grid>
      </Grid>
    </>
  )
}

export default DiscussPageTemplate
