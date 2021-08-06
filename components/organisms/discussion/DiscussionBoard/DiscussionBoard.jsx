import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Card, CardContent, Chip, Divider, Grid, makeStyles } from '@material-ui/core'
import CustomText from '../../../atoms/CustomText'
import ProjectIssues from '../../../organisms/project/ProjectIssues'
import IssuesList from '../../../organisms/discussion/IssuesList'
import IssueDescription from '../../../organisms/discussion/IssueDescription'
import RedirectionButton from '../../../molecules/RedirectionButton'

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    gridItemLeft: {
      paddingRight: '6.375rem'
    },
    imageBox: {
      height: '11.688rem',
      width: '11.688rem',
    },
    imagesContainer: {
      marginTop: '3.375rem'
    },
    textBox: {
      marginBottom: '1.5rem'
    },
    topContainer: {
      marginBottom: '3.625rem'
    },
    issueCard: {
      marginLeft: "2rem",
      marginRight: "2rem",
      marginTop: "2rem"
    },
    issueChip: {
      marginBottom: "0.5rem"
    },
    issueButton: {
      marginTop: "0.5rem",
      marginRight: "1rem"
    }
  }));

  function DiscussionBoard() {
    const classes = useStyles();
    return (
<Card raised="true" className={classes.issueCard}>
    <CardContent>
        <Grid item>
        <CustomText fontSize='1rem' fontWeight='1rem' text='The problem here is NOT computer vision. The problem here is our culture. It doesnt matter whether its a machine or a policeman, what maters is how our culture sets the priors for ANY learner.'/>
        <CustomText fontSize='0.7rem' fontWeight='0.5rem' color='grey' text='User123'/>
        <br></br>
        <br></br>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Share'/>
        </span>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Comment | 78'/>
        </span>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Like | 52'/>
        </span>
        <input style={{width:'50%', height:'2rem'}} placeholder="Write Comment"></input>
        </Grid>
        <Grid item className={classes.issueChip}>
        </Grid>
        <Divider variant="insert" />
        <Grid item>
        <Box className={classes.issueButton} justifyContent="space-between">
        
        </Box>
        <CustomText fontSize='1rem' fontWeight='1rem' text='I think the nerdy label comes in because of the other context in the image that suggest this person is studious'/>
        <CustomText fontSize='0.7rem' fontWeight='0.5rem' color='grey' text='User25'/>
        <br></br>
        <br></br>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Share'/>
        </span>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Comment | 78'/>
        </span>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Like | 52'/>
        </span>
        </Grid>
        <Grid item className={classes.issueChip}>
        </Grid>
        <Grid item>
        <Box className={classes.issueButton} justifyContent="space-between">
        
        </Box>
        <br></br>
        <Divider variant="insert" />
        <CustomText fontSize='1rem' fontWeight='1rem' text='I think the labels should also define what they mean by nerdy. How do we understand that how this ML model is interpreting the word nerdy.  I understand that it is a trained model learning form existing dataset but then someone has '/>
        <CustomText fontSize='0.7rem' fontWeight='0.5rem' color='grey' text='User25'/>
        <br></br>
        <br></br>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Share'/>
        </span>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Comment | 78'/>
        </span>
        <span style={{float:"right", textAlign:"right", paddingLeft:"2rem"}}>
        <CustomText fontSize='1rem' fontWeight='0.5rem' color='green' text='Like | 52'/>
        </span>
        </Grid>
        <Grid item className={classes.issueChip}>
        </Grid>
        <Grid item>
        <Box className={classes.issueButton} justifyContent="space-between">
        
        </Box>

        </Grid>

        
    </CardContent>
    </Card>
    );
  }
  export default DiscussionBoard;