import _ from 'lodash'

import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Card, CardContent, Chip, Divider, Grid, makeStyles } from '@material-ui/core'

import CustomText from '../../../atoms/CustomText'
import RedirectionButton from '../../../molecules/RedirectionButton'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  gridItemLeft: {
    paddingRight: '6.375rem'
  },
  imageBox: {
    height: '11.688rem',
    width: '11.688rem',
  },
  imagesContainer: {
    marginTop: '3.375rem'
  },
  textBox: {
    marginBottom: '1.5rem'
  },
  topContainer: {
    marginBottom: '3.625rem'
  },
  issueCard: {
    marginTop: "2rem"
  },
  issueChip: {
    marginBottom: "0.5rem"
  },
  issueButton: {
    marginTop: "0.5rem",
    marginRight: "1rem"
  }
}));

function ProjectIssues() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid className={classes.gridItemLeft} item xs={8}>
          <Box className={classes.textBox}>
            <CustomText fontSize="1.25rem" fontWeight="700" text="Report Issues you see while Auditing" />
          </Box>
          <Box className={classes.textBox}>
            <CustomText
              fontSize="1rem"
              fontWeight="400"
              text="You'll see a subset of images that have been labeled by the Computer Vision ML model. These images are a collection of random image types that are taken from multiple applications and use cases where Google's Computer Vision is utilised."
            />
          </Box>
          <CustomText
            fontSize="1rem"
            fontWeight="400"
            text="Explanation of patterns of issues..."
          />
          <CustomText
            fontSize="1rem"
            fontWeight="400"
            text="You'll see an image and associated labels for each image that has been produced by the ML model. The audit tasks especially ask for minorities that may be affected due to mislabels and how severely it impacts them."
          />
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <RedirectionButton
              filled
              fontSize="0.875rem"
              height="2.5rem"
              link="/project/discuss"
              width="12.875rem"
              text="View all issues"
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" paddingTop="1rem">
            <RedirectionButton
              filled
              fontSize="0.875rem"
              height="2.5rem"
              link="/project/discuss"
              width="12.875rem"
              text="Start a new hypothesis"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Box>
          <Card raised="true" className={classes.issueCard}>
            <CardContent>
              <Grid item>
                <CustomText fontSize='1rem' fontWeight='1rem' text='Black person with hand-held thermometer = firearm. Asian person with hand-held thermometer = electronic device. Computer vision is so utterly broken it should probably be started over from scratch.'/>
              </Grid>
              <Grid item className={classes.issueChip}>
                <Chip size="small" label="#RacialBias" color='#D2E2D9' />
                <Chip size="small" label="#POC" color='#D2E2D9' />
              </Grid>
              <Divider variant="inset" />
              <Grid item>
                <Box className={classes.issueButton} justifyContent="space-between">
                  <RedirectionButton
                    fontSize="0.875rem"
                    height="2.5rem"
                    link="/project/discuss"
                    width="12.875rem"
                    text="Read More"
                  />
                  <RedirectionButton
                    fontSize="0.875rem"
                    height="2.5rem"
                    link="/project/discuss"
                    width="12.875rem"
                    text="Add Evidence"
                  />
                </Box>
              </Grid>
            </CardContent>
          </Card>
          <Card raised="true" className={classes.issueCard}>
            <CardContent>
              <Grid item>
                <CustomText fontSize='1rem' fontWeight='1rem' text='The problem here is NOT computer vision. The problem here is our culture. It doesnt matter whether its a machine or a policeman, what maters is how our culture sets the priors for ANY learner.'/>
              </Grid>
              <Grid item className={classes.issueChip}>
                <Chip size="small" label="#RacialBias" color='#D2E2D9' />
                <Chip size="small" label="#POC" color='#D2E2D9' />
              </Grid>
              <Divider variant="inset" />
              <Grid item>
                <Box className={classes.issueButton} justifyContent="space-between">
                  <RedirectionButton
                    fontSize="0.875rem"
                    height="2.5rem"
                    link="/project/discuss"
                    width="12.875rem"
                    text="Read More"
                  />
                  <RedirectionButton
                    fontSize="0.875rem"
                    height="2.5rem"
                    link="/project/discuss"
                    width="12.875rem"
                    text="Add Evidence"
                  />
                </Box>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      </div>
  );
}

export default ProjectIssues;
