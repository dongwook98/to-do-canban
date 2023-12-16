import React from 'react';
import styles from './ModalForm.module.css';

export default function ModalForm({ children, handleClick }) {
  return (
    <div className={styles.modalBackGround}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h3 className={styles.title}>업무를 추가해보세요.</h3>
          <div className={styles.close} onClick={handleClick}>
            &times;
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.flex}>
            <label htmlFor='taskName'>업무 이름</label>
            <input
              type='text'
              id='taskName'
              name='taskName'
              className={styles.input}
            />
          </div>
          <div className={styles.flex}>
            <label htmlFor='startDate'>시작일</label>
            <input
              type='date'
              id='startDate'
              name='startDate'
              className={styles.input}
            />
          </div>
          <div className={styles.flex}>
            <label htmlFor='endDate'>종료일</label>
            <input
              type='date'
              id='endDate'
              name='endDate'
              className={styles.input}
            />
          </div>
          <div className={styles.flex}>
            <label htmlFor='taskState'>업무 상태</label>
            <select id='taskState' name='taskState' className={styles.input}>
              <option value='wait'>대기중</option>
              <option value='progress'>진행중</option>
              <option value='done'>완료</option>
              <option value='issue'>이슈</option>
              <option value='hold'>홀드</option>
            </select>
          </div>
          <button type='submit' className={styles.button}>
            추가
          </button>
        </form>
        {/* <p>{children}</p> */}
      </div>
    </div>
  );
}
