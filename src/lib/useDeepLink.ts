import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { parseDeepLink } from './parseDeepLink';

export const useDeepLink = () => {
  const location = useLocation();

  return useMemo(() => {
    return parseDeepLink(new URLSearchParams(location.search));
  }, [location.search]);
};