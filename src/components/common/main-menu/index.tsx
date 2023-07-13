'use client';
import React, { FunctionComponent } from 'react';
import styles from './styles/main-menu.module.css';
import { _storage } from '@/api/localStorage';
import Logo from 'oversoft-ui/dist/Assets/Logo';
import DMS from 'oversoft-ui/dist/Assets/DMS';
import Paragraph from 'oversoft-ui/dist/Typography/Paragraph';
import colors from 'oversoft-ui/dist/color-palette';
import LeftMenuArrow from 'oversoft-ui/dist/Assets/LeftMenuArrow';
import { useRouter } from 'next/navigation';

const MainMenu: FunctionComponent = () => {
  const router = useRouter();
  return (
    <aside className={styles.container}>
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>
          <Logo />
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem} onClick={() => router.push('/')}>
            <Paragraph fontFamily="Rubik-SemiBold" fontSize="16px" fontColor={colors.neutrals.white}>
              {'Home'}
            </Paragraph>
            <LeftMenuArrow />
          </li>
          <li className={styles.menuItem} onClick={() => router.push('/companies')}>
            <Paragraph fontFamily="Rubik-SemiBold" fontSize="16px" fontColor={colors.neutrals.white}>
              {'Companies'}
            </Paragraph>
            <LeftMenuArrow />
          </li>
        </ul>
        <div className={styles.menuFooter}>
          <DMS />
        </div>
      </div>
    </aside>
  );
};

export default MainMenu;
