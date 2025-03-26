const SECRET = "ALVBSLRGIBLSIUHRG395HGO4539RUFSIEVUGNBS4L8HGIWUN";

export const encryptState = (state: Record<string, any>): string => {
  const json = JSON.stringify(state);
  const buffer = new TextEncoder().encode(json);
  return btoa(
    buffer.reduce(
      (data, byte) => data + String.fromCharCode(byte ^ SECRET.charCodeAt(0)),
      ""
    )
  );
};

export const decryptState = (encoded: string): Record<string, any> => {
  const decoded = atob(encoded);
  const decrypted = new TextDecoder().decode(
    Uint8Array.from(decoded, (c) => c.charCodeAt(0) ^ SECRET.charCodeAt(0))
  );
  return JSON.parse(decrypted);
};
