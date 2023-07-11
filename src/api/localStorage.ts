import { DAY_IN_MILISECONDS } from '@/utils/consts';

/* istanbul ignore file */
export const isServer = () => typeof window === 'undefined';
export const isClient = () => !isServer();

export const _storage = {
  get: (key: string) => {
    if (isClient()) {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item || '');
      }
      return;
    }
  },
  set: (key: string, value: any) => {
    if (isClient()) {
      const stringifiedValue = JSON.stringify(value);
      try {
        localStorage.setItem(key, stringifiedValue);
      } catch (error) {
        console.error(
          `localStorage set item cannot be added

    item: ${key} 
    value: ${stringifiedValue}`
        );
        console.error(error);
      }
    }
  },
  remove: (key: string) => {
    if (isClient()) {
      localStorage.removeItem(key);
    }
  },
  clear: () => {
    if (isClient()) {
      localStorage.clear();
    }
  },
  clearTemporalCache: () => {
    if (isClient()) {
      for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);

        if (key?.startsWith('oversoft.')) {
          const updatedAt: number | undefined = JSON.parse(localStorage.getItem(key) || '{}').updatedAt;

          if (updatedAt) {
            const updatedAtDate = new Date(updatedAt);

            const differenceInDays =
              (new Date().getTime() - DAY_IN_MILISECONDS - updatedAtDate.getTime()) / (1000 * 3600 * 24);

            if (differenceInDays > 1) {
              _storage.remove(key);
              console.log('Old cache removed: ' + key);
            }
          }
        }
      }
    }
  },
};
