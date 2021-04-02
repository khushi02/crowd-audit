import React, { Component } from 'react'
import Link from 'next/link'
import { Badge } from 'react-bootstrap'
import styles from './LabelList.module.scss'

const labels = ['GUN', 'BLACK MAN', 'DANGER', 'CRIME', 'POINT', 'HARM', 'PLANT', 'WINDOW', 'DUTY', 'DISTANCE']

class LabelList extends Component {
  renderLabel(label) {
    let style = styles.auditLabel
    if (this.props.selectedLabel === label) {
      style = styles.selectedLabel
    }
    return (
      <div>
        <Badge pill className={style}>
          {label}
        </Badge>
      </div>
    )
  }

  renderLabels() {
    return labels.map((label, i) => (
      <Link href={`/audit_select?label=${label}`} key={`label-${i}`}>
        {this.renderLabel(label)}
      </Link>
    ))
  }

  render() {
    return <div>{this.renderLabels()}</div>
  }
}

export default LabelList
