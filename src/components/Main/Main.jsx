import React from 'react';
import styles from './Main.module.css';
import Zone from './components/Zone';

// Main > Zone, ModalForm > List
export default function Main() {
  return (
    <main>
      <ul className={styles.canbanBoardContainer}>
        <Zone taskState='wait' taskStateName='대기중' />
        <Zone taskState='progress' taskStateName='진행중' />
        <Zone taskState='done' taskStateName='완료' />
        <Zone taskState='issue' taskStateName='이슈' />
        <Zone taskState='hold' taskStateName='홀드' />
      </ul>
    </main>
  );
}
