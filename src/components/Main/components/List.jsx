import React from 'react';
import styles from './List.module.css';

const taskList = [
  {
    title: '리액트 공부',
    content: '1234',
    isWait: true,
    isProgress: false,
    isDone: false,
    isIssue: false,
    isHold: false,
  },
  {
    title: '자바스크립트 공부',
    content: 'dkddkdkdk',
    isWait: true,
    isProgress: false,
    isDone: false,
    isIssue: false,
    isHold: false,
  },
];
export default function List() {
  return (
    <>
      {taskList.map((task, i) => {
        return (
          <div key={i} className={styles.container}>
            <div className={styles.title}>{task.title}</div>
            <div className={styles.content}>{task.content}</div>
          </div>
        );
      })}
    </>
  );
}
