'use client';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import GlobalStyles from 'oversoft-ui/dist/GlobalStyles';
import styles from './styles/wrapper.module.css';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={styles.wrapper}>{children}</body>
    </>
  );
};

export default Wrapper;
