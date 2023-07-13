import { useEffect, useState } from 'react';

export function useWindowSize() {
  const windowAvailabe = typeof window !== 'undefined';
  const [size, setSize] = useState(windowAvailabe ? { height: window.innerHeight, width: window.innerWidth } : null);
  useEffect(() => {
    function updateSize() {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    }
    if (windowAvailabe) {
      updateSize();
      window.addEventListener('resize', updateSize);
    }
    return window.removeEventListener('resize', () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    size,
    mobileWidth: size && size?.width < 768,
    desktopWidth: size && size?.width > 768,
    width: size && size?.width,
    height: size && size?.height,
  };
}
