import React from 'react';
import styles from './Zone.module.css';
import List from './List';

export default function Zone({ taskState }) {
  if (taskState === 'wait')
    return (
      <li className={styles.menu__wait}>
        <div className={styles.menu__title}>
          <h2>대기중</h2>
          <button>﹢</button>
        </div>
        <List />
      </li>
    );

  if (taskState === 'progress') {
    return (
      <li className={styles.menu__progress}>
        <div className={styles.menu__title}>
          <h2>진행중</h2>
          <button>﹢</button>
        </div>
        <List />
      </li>
    );
  }

  if (taskState === 'done') {
    return (
      <li className={styles.menu__done}>
        <div className={styles.menu__title}>
          <h2>완료</h2>
          <button>﹢</button>
        </div>
        <List />
      </li>
    );
  }

  if (taskState === 'issue') {
    return (
      <li className={styles.menu__issue}>
        <div className={styles.menu__title}>
          <h2>이슈</h2>
          <button>﹢</button>
        </div>
        <List />
      </li>
    );
  }

  if (taskState === 'hold') {
    return (
      <li className={styles.menu__hold}>
        <div className={styles.menu__title}>
          <h2>홀드</h2>
          <button>﹢</button>
        </div>
        <List />
      </li>
    );
  }
}
