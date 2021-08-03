import _ from 'lodash'

import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import SearchBar from "material-ui-search-bar";
import ListItemText from '@material-ui/core/ListItemText';
import CustomText from '../../../atoms/CustomText'

const issues = ['Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.', 'Images with bright backgrounds often do not recognize my south asian complexion correctly.']

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: '100%',
    maxWidth: '44ch',
  },
  top: {
    paddingLeft: '1rem',
    paddingTop: '1.25rem'
  },
  searchBar: {
    paddingLeft: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  inline: {
    display: 'inline',
  },
  box: {
    backgroundColor: '#FAFAFA'
  }
}))

const IssuesList = () => {
  const classes = useStyles()

  return (
    <>
    <Grid Container className={classes.root}>
      <Grid item className={classes.top}>
        <CustomText fontSize="1rem" fontWeight="500" text="All Reported Issues" />
      </Grid>
      
      <Grid item className={classes.searchBar}>
        <SearchBar
          placeholder='e.g. gun, race, crime, ...'
        />
      </Grid>
      
      <Grid item>
        <List className={classes.list}>
        {_.map(issues, (issue, i) => (
          <>
          <ListItem alignItems="flex-start" key={`issue-${i}`}>
            <ListItemText
              primary={`${issue}`}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          </>
        ))}
        </List>
      </Grid>
    </Grid>
    </>
  )
}

export default IssuesList