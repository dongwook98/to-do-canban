import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>To Do 칸반보드</h1>
      <nav className={styles.header__nav}>
        <ul className={styles.nav__menu}>
          <li>
            <a href='#'>소개</a>
          </li>
          <li>
            <div>{isDark ? '다크모드' : '라이트모드'}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
