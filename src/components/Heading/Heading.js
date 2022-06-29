import React from 'react';
import styles from './Heading.module.scss';

const Heading = ({ type, children, variant }) => {
  const Component = type;
  return <Component className={styles[variant]}>{children}</Component>;
};
export default Heading;
