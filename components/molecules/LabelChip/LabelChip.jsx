import React from 'react'
import { Chip, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  chip: {
    background: '#FAFAFA',
    color: '#4F4F4F',
    fontFamily: 'Roboto',
    fontSize: '1.143em',
    fontWeight: '400',
    lineHeight: '1.8',
    margin: '0.1em 0',
    '&:hover': {
      color: '#4F4F4F',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  },
  selectedChip: {
    background: 'rgba(18, 143, 110, 0.15)',
    borderRadius: '1.429em',
    fontFamily: 'Roboto',
    fontSize: '1.143em',
    fontWeight: '700',
    padding: '0.429em 0',
    '&:hover': {
      color: '#4F4F4F',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }
}))

const LabelChip = ({ clickable, label, link, selected }) => {
  const classes = useStyles()

  return (
    <Chip
      className={selected ? classes.selectedChip : classes.chip}
      component={clickable ? 'a' : ''}
      href={clickable ? link : ''}
      label={label}
    />
  )
}

export default LabelChip
