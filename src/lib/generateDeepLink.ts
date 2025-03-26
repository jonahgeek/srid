import { encryptState } from './utils';

export const generateDeepLink = ({
  baseUrl,
  route,
  params,
  state,
}: {
  baseUrl: string;
  route: string;
  params?: Record<string, string>;
  state?: Record<string, any>;
}): string => {
  const url = new URL(`${baseUrl}${route}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  if (state) {
    const encrypted = encryptState(state);
    url.searchParams.set('state', encrypted);
  }

  return url.toString();
};