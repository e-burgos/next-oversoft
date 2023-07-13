'use client';
import React, { FunctionComponent } from 'react';
import styles from './styles/home.module.css';
import MenuWrapper from '../common/menu-wrapper';
import Logo from 'oversoft-ui/dist/Assets/Logo';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';

const Home: FunctionComponent = () => {
  useProtectedRoute();
  const { mobileWidth } = useWindowSize();
  return (
    <MenuWrapper>
      <div className={styles.container}>
        <Logo size={mobileWidth ? 200 : 458} color={'rgba(216, 216, 216, 0.50)'} />
      </div>
    </MenuWrapper>
  );
};
export default Home;
