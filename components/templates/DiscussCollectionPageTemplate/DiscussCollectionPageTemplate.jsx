import _ from 'lodash'

import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core'

import DiscussionCollection from '../../molecules/DiscussionCollection'
import DiscussionLabels from '../../molecules/DiscussionLabels'
import collectionData from '../../../public/collections/collectionData'
import CustomText from '../../atoms/CustomText'

const useStyles = makeStyles(() => ({
  headerBox: {
    marginTop: '2rem',
    marginLeft: '7rem'
  },
  box: {
    margin: '5rem 4.813rem 4.063rem 6.938rem '
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
    backgroundColor: '#E5E5E5',
    margin: '1rem 4.813rem 0rem 0rem ',
    borderRadius: '0.625rem',
    boxShadow: '0 0.125rem 0.125rem rgba(0, 0, 0, 0.25)'
  },
  descriptionBox: {
    margin: '0rem 0.5rem 0.5rem 1rem ',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
}))

const DiscussCollectionPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
    <Grid container>
      <Grid item xs={5}>
      <Box className={classes.headerBox}>
        <CustomText fontSize="1.25rem" fontWeight="600" text="Discussion Forum" />
        <Box className={classes.subtitle}>
          <CustomText color="green" fontSize=".75rem" fontWeight="600" text="All Collections" />
        </Box>
      </Box>
      </Grid>
      <Grid item xs={7}>
        <Box className={classes.search} >
          <input className={classes.textInput} placeHolder="Search crowd audits"></input>
        </Box>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={8}>
        <Box className={classes.box}>
          {_.map(collectionData, ({ title, description }, i) => (
            <Box className={classes.cardBox} key={`collection-${i}`}>
              <DiscussionCollection title={title} description={description} />
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.labelBox}>
            <DiscussionLabels />
        </Box>
        <Box className={classes.topicsTitle}>
            <CustomText fontSize="1.25rem" fontWeight="700" text="Trending Topics" />
        </Box>
        <Box className={classes.container}>
          <Box className={classes.descriptionBox}>
            <CustomText fontSize="0.75rem" fontWeight="400" text="#Google Image Search" />
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.descriptionBox}>
            <CustomText fontSize="0.75rem" fontWeight="400" text="#Zoom's Face Detection" />
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.descriptionBox}>
            <CustomText fontSize="0.75rem" fontWeight="400" text="#Fairness in AI conference" />
          </Box>
        </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default DiscussCollectionPageTemplate
