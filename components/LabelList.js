import React, { Component } from "react";
import Link from "next/link";
import { Badge } from "react-bootstrap";
import styles from "./LabelList.module.scss";

const labels = [
  "GUN",
  "BLACK MAN",
  "DANGER",
  "CRIME",
  "POINT",
  "HARM",
  "PLANT",
  "WINDOW",
  "DUTY",
  "DISTANCE"
];

class LabelList extends Component {
  renderLabel(label) {
    if (this.props.selectedLabel === label) {
      return (
        <Badge className={styles.selectedLabels} pill>
          {label}
        </Badge>
      );
    }
    return <div className={styles.auditLabels}>{label}</div>;
  }

  renderLabels() {
    return labels.map(label => (
      <Link href={`/audit_select?label=${label}`}>
        {this.renderLabel(label)}
      </Link>
    ));
  }

  render() {
    return <div>{this.renderLabels()}</div>;
  }
}

export default LabelList;
