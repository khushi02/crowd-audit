import React from 'react'
import { Image } from 'react-bootstrap'
import { Box, Card, CardContent, Chip, Divider, Grid, makeStyles } from '@material-ui/core'
import CustomText from '../../atoms/CustomText'
import ProjectIssues from '../../organisms/project/ProjectIssues'
import IssuesList from '../../organisms/discussion/IssuesList'
import IssueDescription from '../../organisms/discussion/IssueDescription'
import DiscussionBoard from '../../organisms/discussion/DiscussionBoard'
import RedirectionButton from '../../molecules/RedirectionButton'
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#FAFAFA'
  },
  leftBar: {
    backgroundColor: theme.palette.background.paper,
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
  boardCard: {
    margin:"2rem"
  },
  image: {
    display: 'block',
    margin: 'auto',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  middleGridItem: {
    borderLeft: '0.063rem solid #4F4F4F',
    borderRight: '0.063rem solid #4F4F4F',
    paddingRight:'10px'
  },
  textList: {
    fontSize: '20px',
    fontWeight: 'bold',
    color:'green',
    paddingLeft:'1rem'
  }
}))

const DiscussPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={2.5} className={classes.leftBar}>
          <Grid container>
            <IssuesList />
          </Grid>
          <Box className={`${classes.background} ${classes.bottomBox}`} />
        </Grid>
        <Grid className={classes.middleGridItem} item xs={8}>
          <Grid item>
            <IssueDescription />
          </Grid>
          <Image fluid src={'/stat_banner.png'} style={{marginLeft:"2rem", marginRight:"2rem", width:"95%", height:"5%", marginTop:"1rem"}}/>
          <Card raised="true" className={classes.boardCard}>
          <div style={{fontSize:'30px', padding:"0.5rem"}}> 
            <span style={{float:"left"}}> Top Discussions</span>
            <span style={{float:"right", textAlign:"right"}}> <RedirectionButton
              fontSize="0.9rem"
              height="2.5rem"
              width="9.5rem"
              text="Start New Thread"
            /></span>
          </div>
          <br></br>
           
          <DiscussionBoard/>
          <DiscussionBoard/>
          <DiscussionBoard/>
          <DiscussionBoard/>
          <DiscussionBoard/>
          </Card>
          {/* <LabelStart /> */}
          <Box className={classes.bottomBox} />
        </Grid>
        <Grid item xs={1.5}>
            <br/>
            <a className={classes.textList}>Statistics</a>
            <br/>
            <a className={classes.textList}>Summary</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <a className={classes.textList}>Priority of the Issue</a>
            <br/>
            <a className={classes.textList}>Why is this harmful?</a>
            <br/>
            <a className={classes.textList}>Top Discussions</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <a className={classes.textList}>Cases To test</a>
            <br/>
            <br/>
            <a className={classes.textList}>Evidences in Support <br/>(180)</a>
            <br/>
            <br/>
            <a className={classes.textList}>Evidences in <br/> Contradiction <br/>(64)</a>
        </Grid>
      </Grid>
    </>
  )
}

export default DiscussPageTemplate
