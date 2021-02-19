import React, { Component } from "react";
import styles from "./LabelList.module.scss";

const labels = [
  "GUN",
  "BLACK MAN",
  "DANGER",
  "CRIME",
  "POINT",
  "HARM",
  "DANGER",
  "BLACK MAN",
  "GUN",
  "HARM"
];

class LabelList extends Component {
  renderLabels() {
    return labels.map(label => (
      <div className={styles.auditLabels}>{label}</div>
    ));
  }

  render() {
    return <div>{this.renderLabels()};</div>;
  }
}

export default LabelList;
