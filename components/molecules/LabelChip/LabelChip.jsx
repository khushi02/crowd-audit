import React from 'react'
import { Chip, makeStyles } from '@material-ui/core'

const useStyles = ({ selected }) =>
  makeStyles(() => ({
    chip: {
      backgroundColor: selected ? '#F9AAAA' : '#FAFAFA',
      borderRadius: '1.25rem',
      color: '#4F4F4F',
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontWeight: '400',
      margin: '0.1rem 0',
      padding: '0.429rem 0',
      '&:hover': {
        color: '#4F4F4F',
        cursor: 'pointer',
        textDecoration: 'none'
      }
    }
  }))

const LabelChip = ({ clickable, label, link, selected }) => {
  const classes = useStyles({ selected })()

  return <Chip className={classes.chip} component={clickable ? 'a' : ''} href={clickable ? link : ''} label={label} />
}

export default LabelChip
