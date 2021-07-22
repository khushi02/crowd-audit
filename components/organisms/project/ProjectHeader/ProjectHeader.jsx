import _ from 'lodash'

import React from 'react'
import Link from 'next/link'
import { Box, Grid } from '@material-ui/core'
import { NavigateBeforeOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

import CustomText from '../../../atoms/CustomText'
import UnderlinedButton from '../../../molecules/UnderlinedButton'

const useStyles = makeStyles(() => ({
  box: {
    alignItems: 'center',
    margin: '2.157rem 2.875rem'
  },
  container: {
    background: '#D2E2D9'
  },
  navigateIcon: {
    color: '#128F6E',
    height: '2rem',
    width: '2rem',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  titleBox: {
    marginLeft: '1.204rem'
  }
}))

const ProjectHeader = ({ contentType }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.container} container>
      <Grid item xs={6}>
        <Box className={classes.box} display="flex" justifyContent="flex-start">
          <Link href="/projects">
            <NavigateBeforeOutlined className={classes.navigateIcon} />
          </Link>
          <Box className={classes.titleBox}>
            <CustomText fontSize="0.75rem" fontWeight="300" text="Project -" />
            <CustomText fontSize="1rem" fontWeight="500" text="Google's Computer Vision for Minorities" />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.box} display="flex" justifyContent="flex-end">
          {_.map(['Learn', 'Audit', 'Label', 'Discussion'], (text) => {
            const lowerCased = text.toLowerCase()
            return (
              <UnderlinedButton
                key={`btn-${lowerCased}`}
                link={`/project/${lowerCased}`}
                text={text}
                underlined={contentType === lowerCased}
              />
            )
          })}
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProjectHeader
