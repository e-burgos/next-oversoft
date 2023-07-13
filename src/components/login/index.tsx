'use client';
import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './styles/login.module.css';
import TextLogo from 'oversoft-ui/dist/Assets/TextLogo';
import Input from 'oversoft-ui/dist/Form/Input';
import PrimaryButton from 'oversoft-ui/dist/Buttons/PrimaryButton';
import { useApiMutation } from '@/api/api';
import useAuthService from '@/hooks/useAuthService';
import Paragraph from 'oversoft-ui/dist/Typography/Paragraph';
import SecondaryButton from 'oversoft-ui/dist/Buttons/SecondaryButton';
import { useRouter } from 'next/navigation';

const Login: FunctionComponent = () => {
  const { createCookie, getToken } = useAuthService();
  const token = getToken();
  const router = useRouter();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [domain, setDomain] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (token) router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const postLogin = useApiMutation(
    'post-login',
    'no-auth',
    {},
    {
      onError: () => {
        setError(true);
      },
      onSuccess: (data) => {
        createCookie('token', data.data.result.token, new Date(data.data.result.expiration));
        return router.push('/');
      },
    }
  );

  const handleLogin = () => {
    postLogin.mutate({
      data: {
        esDatoSistema: true,
        nombreUsuario: userName,
        clave: password,
        subdominio: domain,
        fromManager: true,
        cultura: 'string',
      },
      method: 'POST',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.whiteBox}>
        {!error ? (
          <>
            <TextLogo size={150} />
            <Input type="text" label={'Nombre de usuario'} value={userName} onChange={(e) => setUserName(e)} />
            <Input type="password" label={'Contraseña'} value={password} onChange={(e) => setPassword(`${e}`)} />
            <Input type="text" label={'Subdominio'} value={domain} onChange={(e) => setDomain(`${e}`)} />
            <PrimaryButton
              label="Ingresar"
              width="33%"
              onClick={handleLogin}
              disabled={!userName || !domain || !password}
              loading={postLogin.isLoading}
            />
          </>
        ) : (
          <div className={styles.errorContainer}>
            <Paragraph fontSize="18px">{'Ocurrió un error inesperado por favor intente nuevamente.'}</Paragraph>
            <SecondaryButton label="Volver" width="33%" onClick={() => setError(false)} />
          </div>
        )}
      </div>
      ;
    </div>
  );
};

export default Login;
