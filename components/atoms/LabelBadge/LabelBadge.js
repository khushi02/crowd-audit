import React from 'react'
import { Badge } from 'react-bootstrap'
import styles from './LabelBadge.module.scss'

const LabelBadge = ({ text, button, style }) => (
  <Badge className={button ? styles.labelBadgeButton : styles.labelBadge} pill style={{ ...style }}>
    {text}
  </Badge>
)

export default LabelBadge
