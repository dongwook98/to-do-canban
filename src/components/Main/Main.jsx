import React from 'react';
import styles from './Main.module.css';
import Zone from './components/Zone';

// Main > Zone, ModalForm > List
export default function Main() {
  return (
    <main>
      <section>
        <ul className={styles.menu}>
          <Zone taskState='wait' />
          <Zone taskState='progress' />
          <Zone taskState='done' />
          <Zone taskState='issue' />
          <Zone taskState='hold' />
        </ul>
      </section>
    </main>
  );
}
