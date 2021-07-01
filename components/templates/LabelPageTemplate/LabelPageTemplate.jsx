import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'

import LabelImageHeader from '../../organisms/label/LabelImageHeader'
import LabelImageTitle from '../../organisms/label/LabelImageTitle'
import LabelStart from '../../organisms/label/LabelStart/LabelStart'
import CustomText from '../../atoms/CustomText'
import LabelList from '../../organisms/label/LabelList'

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#FAFAFA'
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

const LabelPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.container} container>
        <Grid item xs={6}>
          <LabelImageTitle canShare imageId={234} numImages={5043} />
          <Grid container>
            <Grid className={classes.background} item xs={9}>
              <LabelImageHeader />
              <Image className={classes.image} fluid src="/auditImage.png" />
            </Grid>
            <Grid item xs>
              <Box className={classes.box}>
                <CustomText color="#128F6E" fontSize="1rem" fontWeight="700" text="Labels" />
              </Box>
              <LabelList />
            </Grid>
          </Grid>
          <Box className={`${classes.background} ${classes.bottomBox}`} />
        </Grid>
        <Grid className={classes.rightGridItem} item xs>
          <LabelStart />
          <Box className={classes.bottomBox} />
        </Grid>
      </Grid>
    </>
  )
}

export default LabelPageTemplate
