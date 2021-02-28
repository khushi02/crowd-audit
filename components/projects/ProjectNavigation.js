import React, { Component } from 'react';
import Link from 'next/link';
import { Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap';
import styles from "./ProjectNavigation.module.scss";
import data from '../../public/projects/data';


class ProjectNavigation extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
    this.props.onContentTypeChange(e)
  }

  render() {
    const project = data[this.props.projectId - 1];
    return (
      <div className={styles.navContainer}>
        <Row style={{ height: "100%", margin: "0 0" }}>
          <Col md={9} style={{ position: "relative" }}>
            <Card.Body className={`${styles.cardBody} ${styles.leftCenterItem}`}>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Col>
          <Col md={3} style={{ position: "relative" }}>
            <Link href={`/audit`}>
              <Button className={`${styles.centerItem} ${styles.cardButton}`}>Audit Images</Button>
            </Link>
          </Col>
        </Row>
        <Navbar collapseOnSelect expand="lg" style={{ background: "#D2E2D9" }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className={styles.navButton} eventKey='about' onSelect={this.handleChange}>About</Nav.Link>
              <Nav.Link className={styles.navButton} eventKey='images' onSelect={this.handleChange}>Images</Nav.Link>
              <Nav.Link className={styles.navButton} eventKey='discussions' onSelect={this.handleChange}>Discussions</Nav.Link>
              <Nav.Link className={styles.navButton} eventKey='hypotheses' onSelect={this.handleChange}>Hypotheses</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ProjectNavigation;
