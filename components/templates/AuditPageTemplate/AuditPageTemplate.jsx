import React, { Component } from 'react'
import styles from './audit.module.scss'
import LabelList from '../../organisms/LabelList'
import { Grid, makeStyles } from '@material-ui/core'
import AuditImageHeader from '../../organisms/AuditImageHeader'

const useStyles = makeStyles(() => ({
  container: {
    paddingLeft: '3.375rem'
  },
  rightGridItem: {}
}))

const AuditPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.container} container>
        <Grid item xs={6}>
          <AuditImageHeader canShare imageId={234} numImages={5043} />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </>
  )
}
// class AuditPageTemplate extends Component {
//   render() {
//     return (
//       <div>
//         <div className={styles.contentWrap}>
//           <div className={styles.auditContainer}>
//             <br />
//             <div className="card">
//               <div className={styles.landingContainer1}>
//                 <div className={styles.auditBarLeft}>
//                   <p className={styles.auditBarText}>
//                     <b>Auditing Image 243</b> / 5043
//                   </p>
//                 </div>
//               </div>
//               <div className="row no-gutters">
//                 <div className="col-auto">
//                   <img src="/gluegun.png" alt="img" />
//                 </div>
//                 <div className="col bg-light px-4">
//                   <br />
//                   <h5>Labels</h5>
//                   <br />
//                   <LabelList />
//                 </div>
//                 <div className="col-sm-6 px-5">
//                   <br />
//                   <p className="card-title">
//                     Google's algorithm scans the images to generate labels that describe the whole image.
//                   </p>
//                   <br />
//                   <br />
//                   <h5 className={styles.question}>
//                     Do any labels for this image seem biased or discriminatory in a way that negatively impacts any
//                     group of people?
//                   </h5>
//                   <p className={styles.arrow}>&lt;-- Select labels to report</p>
//                   <div className={`col-md-2 ${styles.buttonContainer}`}>
//                     <a href="#" className={`btn ${styles.cardButton}`}>
//                       Skip to Next Image
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default AuditPageTemplate
