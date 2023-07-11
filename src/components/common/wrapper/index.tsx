'use client';
import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyles from 'oversoft-ui/dist/GlobalStyles';
import styles from './styles/wrapper.module.css';
import { _storage } from '@/api/localStorage';

const Wrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    _storage.clearTemporalCache();
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
      },
    },
  });

  return (
    <html lang="es">
      <GlobalStyles />
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <body className={styles.wrapper}>
          <>
            <ReactQueryDevtools />
            <main>{children}</main>
          </>
        </body>
      </QueryClientProvider>
    </html>
  );
};

export default Wrapper;
