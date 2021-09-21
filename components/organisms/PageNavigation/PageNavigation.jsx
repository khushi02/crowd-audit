import _ from 'lodash'

import React from 'react'
import Link from 'next/link'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'
import NavigationButton from '../../molecules/NavigationButton'

const useStyles = makeStyles(() => ({
  box: {
    alignItems: 'center',
    margin: '0.875rem 1.375rem'
  },
  container: {
    backgroundColor: '#FAFAFA',
    boxShadow: '0 0.125rem 0.125rem rgba(0, 0, 0, 0.25)',
    marginBottom: '0.125rem'
  },
  imageBox: {
    width: '5rem',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  textInput: {
    height:'2rem',
    width: '16rem'
  }
}))

const PageNavigation = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.container} container>
      <Grid item xs={2}>
        <Box className={classes.box} display="flex" justifyContent="flex-start">
          <Box className={classes.imageBox}>
            <Link href="/">
              <Image fluid src="/logo1.png" />
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.box} >
          <input className={classes.textInput} placeHolder="Search crowd audits"></input>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.box} display="flex" justifyContent="flex-end">
        {_.map(['Home', 'Discussions', 'Projects', 'About', 'FAQ', 'Profile'], (text) => {
          const lowerCased = text.toLowerCase()
          return <NavigationButton key={`btn-${lowerCased}`} link={`/${lowerCased}`} text={text} />
        })}
        </Box>
      </Grid>
    </Grid>
  )
}

export default PageNavigation
