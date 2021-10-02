import _ from 'lodash'

import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core'

import RedirectionButton from '../../molecules/RedirectionButton'
import DiscussionCollection from '../../molecules/DiscussionCollection'
import DiscussionLabels from '../../molecules/DiscussionLabels'
import collectionData from '../../../public/collections/collectionData'
import CustomText from '../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  headerBox: {
    marginTop: '2rem',
    marginLeft: '7rem'
  },
  headerText: {
    marginLeft: '15%'
  },
  box: {
    margin: '5rem 18rem 4rem 7rem '
  },
  labelBox: {
    backgroundColor: '#E5E5E5',
    margin: '5rem 4.813rem 0rem 0rem '
  },
  cardBox: {
    backgroundColor: '#E5E5E5',
    marginTop: '2rem'
  },
  topicsTitle: {
    marginTop: '2rem'
  },
  subtitle: {
    marginTop: '1rem'
  },
  search: {
    alignItems: 'center',
    margin: '0.875rem 1.375rem',
    marginTop: '3.5rem'
  },
  textInput: {
    height:'2rem',
    width: '16rem'
  },
  container: {
    backgroundColor: '#D2E2D9',
    margin: '1rem 4.813rem 0rem 0rem ',
    borderRadius: '0.625rem',
    boxShadow: '0 0.125rem 0.125rem rgba(0, 0, 0, 0.25)'
  },
  descriptionBox: {
    margin: '1rem 2rem 3rem 3rem ',
    paddingTop: '0.5rem'
  },
  titleBox: {
    marginTop: '3rem',
    marginLeft: '3rem'
  },
  buttonBox: {
    marginBottom: '2rem',
    marginRight: '2rem'
  },

  name: {
    paddingLeft: '2rem'
  }
}))

const DiscussCollectionPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
    <Grid container>
      <Box className={classes.headerBox}>
        <div style={{float:'left'}}>
        <img src="/profpic.png" alt="First slide" width="70" height="70" />
        </div>
        <div  style={{padding:'20px', paddingLeft:'0px',float:'left'}}>
        <h2 className={classes.name}>Riya Ray</h2>
        </div>
        <div style={{float:'right',  marginLeft:'20rem'}}>
          <img src="/pointsBar.png" alt = "First slide" width="480" height="60"/>
        </div>
      </Box>
    </Grid>

    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.box}>
        <Grid className={classes.container} container>
          <Grid item xs={12}>
            <Box className={classes.middleBox}>
              <Box className={classes.titleBox}>
                <CustomText fontSize="1.25rem" fontWeight="700" color="#128F6E" text="Finished Auditing Task for Issue #256" />
              </Box>
              <Box className={classes.descriptionBox}>
                <CustomText fontSize="0.75rem" fontWeight="400" text="Now you can write a hypothesis by observing and summarizing evidence from the project evidence library. Publish your hypothesis to recieve more discussion and support." />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid className={classes.container} container>
          <Grid item xs={12}>
            <Box className={classes.middleBox}>
              <Box className={classes.titleBox}>
                <CustomText fontSize="1.25rem" fontWeight="700" color="#128F6E" text="New Task Suggested: Audit Images" />
              </Box>
              <Box className={classes.descriptionBox}>
                <CustomText fontSize="0.75rem" fontWeight="400" text="Now you can write a hypothesis by observing and summarizing evidence from the project evidence library. Publish your hypothesis to recieve more discussion and support." />
              </Box>
            </Box>
            <Box className={classes.buttonBox} display="flex" justifyContent="flex-end">
            <RedirectionButton
              filled="true"
              fontSize="0.875rem"
              fontWeight="700"
              height="2.75rem"
              link="/projects"
              text="Start Task"
              width="7.5rem"
            />
          </Box>
          </Grid>
        </Grid>
        <Grid className={classes.container} container>
          <div>
            <img src="/engagement.png" alt = "First slide"/>
          </div>
        </Grid>
        <Grid className={classes.container} container>
          <div>
            <img src="/personalinfo.png" alt = "First slide"/>
          </div>
        </Grid>

        </Box>

      </Grid>

    </Grid>

    </>
  )
}

export default DiscussCollectionPageTemplate
