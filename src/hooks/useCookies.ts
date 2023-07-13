import Cookie from 'universal-cookie';

const useCookies = () => {
  const cookie = new Cookie();

  const get = (key: string) => {
    return cookie.get(key);
  };

  const set = (key: string, value: string, options: Object) => {
    return cookie.set(key, value, options);
  };

  const remove = (key: string, options?: Object) => {
    return cookie.remove(key, options);
  };

  return { get, set, remove };
};

export default useCookies;
