import useCookies from '../hooks/useCookies';
import { useRouter } from 'next/navigation';
import { DAY_IN_MILISECONDS } from '../utils/consts';

const useAuthService = () => {
  const { set, remove, get } = useCookies();
  const router = useRouter();

  const logout = () => {
    remove('token', { path: '/', sameSite: 'strict' });
    return router.push('/login');
  };

  const getToken = () => {
    return get('token');
  };

  const createCookie = (cookieName: string, value: string, expires?: Date): void => {
    const date = new Date();
    date.setTime(date.getTime() + DAY_IN_MILISECONDS);
    const options = {
      path: '/',
      expires: expires || date,
      sameSite: 'strict',
    };
    set(`${cookieName}`, value, options);
  };

  return { createCookie, getToken, logout };
};

export default useAuthService;
