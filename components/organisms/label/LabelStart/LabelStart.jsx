import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import { Image } from 'react-bootstrap'
import { Box, makeStyles } from '@material-ui/core'
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
  }
}))

const LabelStart = () => {
  const classes = useStyles()

  const textInput = useRef(null)
  
  function handleEnter() {
    var buttonText = textInput.current.value
    var button = document.createElement('button')
    button.textContent = buttonText
    document.getElementById('labels').appendChild(button)
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
        <div id="labels"></div>
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


