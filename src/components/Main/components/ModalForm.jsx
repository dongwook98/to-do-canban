import React, { useState } from 'react';
import styles from './ModalForm.module.css';

export default function ModalForm({ children }) {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className={styles.modalBackGround}>
          <div className={styles.modal}>
            <span className='close' onClick={handleCloseModal}>
              &times;
            </span>
            <p>
              모달 내용1
              {children}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
