import React from 'react';
import Link from 'next/link';
import styles from './styles/header.module.css';
import Users from 'oversoft-ui/dist/Assets/Users/Users';
import Logout from 'oversoft-ui/dist/Assets/Logout';
import TextLogo from 'oversoft-ui/dist/Assets/TextLogo';
import Message from 'oversoft-ui/dist/Assets/Message';
import Bell from 'oversoft-ui/dist/Assets/Bell';
import Logo from 'oversoft-ui/dist/Assets/Logo';
import useAuthService from '@/hooks/useAuthService';

const Header = () => {
  const { logout } = useAuthService();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Link id="logo" href="/">
            <Logo size={24} />
          </Link>
        </div>
        <div data-testid="rightContainer" className={styles.rightContainer}>
          <Bell counter={3} size={22} />
          <Message counter={7} size={28} />
          <button className={styles.logout} onClick={logout}>
            <Logout />
          </button>
          <TextLogo size={118} />
        </div>
      </div>
    </>
  );
};

export default Header;
