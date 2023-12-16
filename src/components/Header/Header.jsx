import React, { useState } from 'react';
import styles from './Header.module.css';
import { IoToggle } from 'react-icons/io5';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>To Do 칸반보드</h1>
      <nav className={styles.header__nav}>
        <ul className={styles.nav__menu}>
          <li>
            <a href='#'>소개</a>
          </li>
          <li>
            <div>
              {isDark ? (
                <MdDarkMode size={20} onClick={handleToggle} />
              ) : (
                <MdLightMode size={20} onClick={handleToggle} />
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
