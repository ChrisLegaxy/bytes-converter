/**
 * Automatically convert bytes to 'KB', 'MB', 'GB', etc.
 *
 * @param bytes
 * @param decimals
 * @returns converted size
 *
 * @example
 * formatBytes(1234);       // 1.2 KB
 * formatBytes(1234, 3);    // 1.205 KB
 */
export const convertBytes = (bytes: number, decimals = 1) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  if (bytes === 0)
    return {
      value: 0,
      size: sizes[0],
    };

  const base = 1024;
  const fractionDigits = decimals < 0 ? 0 : decimals;
  const target = Math.floor(Math.log(bytes) / Math.log(base));
  return {
    value: parseFloat((bytes / Math.pow(base, target)).toFixed(fractionDigits)),
    size: sizes[target],
  };
};
