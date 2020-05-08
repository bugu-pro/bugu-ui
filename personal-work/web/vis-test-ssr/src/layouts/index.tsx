import React from 'react';
import styles from './index.css';
import 'normalize.css/normalize.css'

const BasicLayout: React.FC = props => {
  return (
    <div  className={styles['box']}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
