import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthService from './useAuthService';

export function useProtectedRoute() {
  const { getToken } = useAuthService();
  const token = getToken();
  const router = useRouter();
  useEffect(() => {
    if (!token) router.push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
}
