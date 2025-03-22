import { useState, useEffect } from 'react';

const isVisibleState = () => document.visibilityState === 'visible'

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(isVisibleState());

  const handleVisibilityChange = () => {
    setIsVisible(isVisibleState());
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
}

export default useVisibility;