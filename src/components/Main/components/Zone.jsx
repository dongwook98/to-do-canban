import React, { useState } from 'react';
import styles from './Zone.module.css';
import List from './List';
import ModalForm from './ModalForm';
import classNames from 'classnames';
import { FaPlusCircle } from 'react-icons/fa';

export default function Zone({ taskState, taskStateName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <li className={`${styles[taskState]} ${styles.board}`}>
      <div className={styles.title}>
        <h2>{taskStateName}</h2>
        <button onClick={handleClick} className={styles.button}>
          <FaPlusCircle
            className={classNames(styles[taskState + 'Add'], styles.addBtn)}
          />
        </button>
      </div>
      <List taskState={taskState} />
      {isOpen && <ModalForm handleClick={handleClick} />}
    </li>
  );
}
