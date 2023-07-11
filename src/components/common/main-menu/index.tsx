'use client';
import React, { FunctionComponent } from 'react';
import styles from './styles/main-menu.module.css';
import { _storage } from '@/api/localStorage';

const MainMenu: FunctionComponent = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.menuContent}></div>
    </aside>
  );
};

export default MainMenu;
