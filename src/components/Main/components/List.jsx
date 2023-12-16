import React from 'react';
import styles from './List.module.css';
import { FaCheckCircle, FaCalendarCheck } from 'react-icons/fa';
import cx from 'classnames';

const taskList = [
  {
    title: '리액트 공부',
    startTime: '2023-12-17',
    endTime: '2023-01-15',
    isWait: true,
    isProgress: false,
    isDone: false,
    isIssue: false,
    isHold: false,
  },
  {
    title: '자바스크립트 공부',
    startTime: '2023-12-17',
    endTime: '2023-01-15',
    isWait: true,
    isProgress: false,
    isDone: false,
    isIssue: false,
    isHold: false,
  },
];
export default function List({ taskState }) {
  return (
    <>
      {taskList.map((task, i) => {
        return (
          <div key={i} className={styles.container}>
            <div className={styles.title}>
              <FaCheckCircle className={cx(styles[taskState], styles.icon)} />
              {task.title}
            </div>
            <div className={styles.period}>
              <FaCalendarCheck className={cx(styles[taskState], styles.icon)} />
              {task.startTime} ~ {task.endTime}
            </div>
          </div>
        );
      })}
    </>
  );
}
