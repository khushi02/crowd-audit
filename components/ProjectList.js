import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import styles from "./ProjectList.module.scss";

const test = [
  {
    id: 1,
    title: "Improving facial recognition for Microsoft's Teams Conference Calls",
    description: "Teams Conference Calls can detect participants face to improve virtual background detection. Crowd Auditing could help identify potential errors that cause identity harms to certain groups of people.",
    thumbnail: "/projects/project1.jpeg"
  },
  {
    id: 2,
    title: "Gender Biases in Hiring",
    description: "Companies use advanced ATS systems to filter candidates. Crowd Auditing could help organizations identify inherent biases for resume selection.",
    thumbnail: "/projects/project2.jpeg"
  },
  {
    id: 3,
    title: "Improving Location-Based Biases in Tesla's Self Driving Mode",
    description: "Tesla vehicles are changing to safe mode driving when driving in the red zone areas. Crowd Auditing could help identify risks and improve road safety in general.",
    thumbnail: "/projects/project3.jpeg"
  },
  {
    id: 4,
    title: "Help improve Google's Computer Vision for Minorities",
    description: "Google Computer Vision is extensively used around the globe to understand images. Crowd Auditing could help uncover hidden misclassifications that impact underrepresented communities.",
    thumbnail: "/projects/project4.jpeg"
  },
  {
    id: 5,
    title: "Gender Biases in YouTube Ads",
    description: "YouTube advertising allows for your video content to be advertised on YouTube in order to ensure you can maximize your user reach. Auditing ads could be useful in understanding which ads are potentially harmfully biased.",
    thumbnail: "/projects/project5.jpeg"
  }
];

class ProjectList extends Component {
  renderProjects() {
    return test.map(project => (
      <div key={project.id} className={`card ${styles.cardContainer} mb-3`}>
        <div className="row" style={{height: "100%", margin: "0 0"}}>
          <div className="col-md-2" style={{position: "relative"}}>
            <img className={`${styles.centerItem} ${styles.cardImage}`} src={project.thumbnail}></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
          <div className="col-md-2" style={{position: "relative"}}>
            <a href={`/project/${project.id}`} className={`btn ${styles.centerItem} ${styles.cardButton}`}>View Project</a>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.listContainer}>
        {this.renderProjects()}
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => ({ projects });

export default connect(mapStateToProps, { fetchProjects })(ProjectList);
