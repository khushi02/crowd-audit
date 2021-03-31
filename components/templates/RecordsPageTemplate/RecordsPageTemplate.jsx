import React from 'react'
import { Badge, Button, Col, Container, Image, Row } from 'react-bootstrap'
import styles from './RecordsPageTemplate.module.scss'

const RecordsPageTemplate = () => {
  return (
    <Container className={styles.root} fluid>
      <Container fluid>
        <Row>
          <Col md={6}>
            <p className={styles.projectTitle}>Help Improve Google’s Computer Vision for Minorities</p>
            <p className={styles.projectDescription}>
              Google Computer Vision is extentively used around the globe to understand images. Crowd Auditing could
              help uncover hidden misclassifications that impact underrepresented communities.
            </p>
          </Col>
          <Col md={{ offset: 2, span: 4 }} styles={{ position: 'relative' }}>
            <Button className={styles.discussionButton} variant="outline-success">
              Talk to others
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className={`shadow-sm ${styles.card}`} fluid>
        <Row>
          <Col md={2}>
            <Image fluid md={2} src="/projects/project4.png" />
          </Col>
          <Col md={10}>Ho!</Col>
        </Row>
        <Row>
          <Col md={2}>
            <Container fluid style={{ margin: '20px 5px' }}>
              <p className={styles.cardTitle}>Your Audits</p>
              <div>
                <span className={styles.severity}>Severity: </span>
                <span className={styles.severity} style={{ color: 'red' }}>
                  Extreme
                </span>
              </div>
              <div>
                <Badge className={styles.label} pill variant="success">
                  CRIME
                </Badge>{' '}
                <Badge className={styles.label} pill variant="success">
                  GUN
                </Badge>
              </div>
            </Container>
          </Col>
          <Col md={10}></Col>
        </Row>
      </Container>
    </Container>
  )
}

export default RecordsPageTemplate
