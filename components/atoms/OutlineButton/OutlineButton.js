import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './OutlineButton.module.scss';

const OutlineButton = ({ text, style }) => (
  <Button className={styles.outlineButton} style={{ ...style }} variant="outline-success">{text}</Button>
);

export default OutlineButton;