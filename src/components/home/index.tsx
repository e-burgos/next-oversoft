'use client';
import React, { FunctionComponent } from 'react';
import styles from './styles/home.module.css';
import MenuWrapper from '../common/menu-wrapper';

const Home: FunctionComponent = () => {
  return (
    <MenuWrapper>
      <div className={styles.container}>
        <h1>Welcome Master, Master</h1>
      </div>
    </MenuWrapper>
  );
};
export default Home;
