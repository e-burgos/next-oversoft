'use client';
import React, { ReactNode } from 'react';
import styles from './styles/menu-wrapper.module.css';
import Header from '../header';
import MainMenu from '../main-menu';

const MenuWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <MainMenu />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
};

export default MenuWrapper;
