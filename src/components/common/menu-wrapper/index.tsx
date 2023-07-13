'use client';
import React, { FunctionComponent, ReactNode } from 'react';
import styles from './styles/menu-wrapper.module.css';
import Header from '../header';
import MainMenu from '../main-menu';

interface IMenuWrapperProps {
  children: ReactNode;
  headerChildren?: ReactNode;
}

const MenuWrapper: FunctionComponent<IMenuWrapperProps> = ({ children, headerChildren }) => {
  return (
    <div className={styles.container}>
      <MainMenu />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.headerContent}>{headerChildren}</div>
        <div className={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
};

export default MenuWrapper;
