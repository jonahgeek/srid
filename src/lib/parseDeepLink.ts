import { decryptState } from "./utils";

export const parseDeepLink = (
  searchParams: URLSearchParams
): {
  [key: string]: string | boolean | Record<string, any> | undefined;
  state?: Record<string, any>;
  fallback: boolean;
} => {
  const result: {
    [key: string]: string | boolean | Record<string, any> | undefined;
    state?: Record<string, any>;
    fallback: boolean;
  } = { fallback: false };

  for (const [key, value] of searchParams.entries()) {
    if (key === "state") {
      try {
        result.state = decryptState(value);
      } catch (e) {
        result.state = undefined;
        result.fallback = true;
      }
    } else {
      result[key] = value;
    }
  }

  return result;
};
