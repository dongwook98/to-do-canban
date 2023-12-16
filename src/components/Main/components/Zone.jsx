import React from 'react';
import styles from './Zone.module.css';
import List from './List';

export default function Zone({ taskState }) {
  return (
    <li className={styles[taskState]}>
      <div className={styles.title}>
        <h2>{taskState}</h2>
        <button>﹢</button>
      </div>
      <List />
    </li>
  );
}
