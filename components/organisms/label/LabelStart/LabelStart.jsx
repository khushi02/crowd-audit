import React, {useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import { Image } from 'react-bootstrap'
import { Box, Chip, makeStyles } from '@material-ui/core'
import FormControl from 'react-bootstrap/FormControl'

import CustomText from '../../../atoms/CustomText'
import RedirectionButton from '../../../molecules/RedirectionButton'

const useStyles = makeStyles(() => ({
  box1: {
    margin: '3.75rem 12.375rem 0 3rem'
  },
  box2: {
    margin: '6rem 6rem 0 3rem'
  },
  box3: {
    margin: '2.375rem 23.625rem 0 3rem'
  },
  box4: {
    float: 'right',
    margin: '7.625rem 3rem 5.275rem auto'
  },
  image1: {
    margin: 'auto 1rem auto 0'
  },
  image2: {
    display: 'block',
    margin: 'auto auto 1.375rem auto',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  chip: {
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

const LabelStart = () => {
  const classes = useStyles()

  const [labels, setLabels] = useState(["Test"])

  const textInput = useRef(null)

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  
  function handleEnter() {
    var chipText = textInput.current.value
    const chip = <Chip label={chipText} id="chip_id" onDelete={handleDelete} color="#4F4F4F"/>
    ReactDOM.render(chip, document.getElementById('labels'))
    
    // const newData = textInput.current.value
    // setLabels(prevState => [...prevState, newData])
  }

  return (
    <>
      <Box className={classes.box1}>
        <CustomText
          fontSize="2rem"
          fontWeight="600"
          color="#128F6E"
          text="Observe the image and enter words that best describe the image"
        />
      </Box>
      <Box className={classes.box2}>
        <div>
          <FormControl
            ref={textInput}
            type="text"
            placeholder="Type a 1-5 word descriptor and press enter."
            onKeyPress={(e) => {(e.key === 'Enter' ? handleEnter() : null)}}
          />
        </div>
      </Box>
      <Box className={classes.box3}>
        <div id="labels">
        {/* {labels.map(l => {
          <Chip label={l} onDelete={handleDelete} color="#4F4F4F"/>
        })} */}
        </div>
      </Box>
      <Box className={classes.box4}>
        <RedirectionButton
          fontSize="1rem"
          fontWeight="500"
          height="2.125rem"
          text="Submit and Next"
          width="11.25rem"
        />
      </Box>
    </>
  )
}

export default LabelStart


