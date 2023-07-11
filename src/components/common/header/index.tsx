import React from 'react';
import Link from 'next/link';
import styles from './styles/header.module.css';
import Users from 'oversoft-ui/dist/Assets/Users/Users';

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Link id="logo" href="/">
            <Users />
          </Link>
        </div>
        <div data-testid="rightContainer" className={styles.rightContainer}>
          <Users />
        </div>
      </div>
    </>
  );
};

export default Header;
