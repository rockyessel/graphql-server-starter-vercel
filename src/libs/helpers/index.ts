import CryptoJS from 'crypto-js';
import { AddressType } from '../../types/index.js';

/**
 * Encrypts a given string with a password.
 * @param {string} value - The string to encrypt.
 * @param {string} key - The encryption key.
 * @returns {string} - The encrypted string.
 */
export const encrypt = (value: string, key: string): string => {
  // console.log('value: ', value);
  return CryptoJS.AES.encrypt(value, key).toString();
};

/**
 * Decrypts an encrypted string with a password.
 * @param {string} value - The encrypted string to decrypt.
 * @param {string} key - The decryption key.
 * @returns {string|null} - The decrypted string, or null if decryption fails.
 */
export const decrypt = (value: string, key: string): string | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(value, key);
    const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedValue;
  } catch (error) {
    console.error('Error decrypting token:', error);
    return null;
  }
};

/**
 * Calculates the expiration time in seconds based on the current time and a number of days.
 * @param {number} days - The number of days until expiration.
 * @returns {number} - The expiration time in seconds.
 */
export const getExpirationTime = (days: number) =>
  Math.floor(Date.now() / 1000) + days * 24 * 60 * 60;

export const Address = (addressValue: string | any): AddressType => {
  if (typeof addressValue !== 'string') {
    throw new Error(
      `Expecting a type of string, but got ${typeof addressValue}`
    );
  }

  const address = addressValue as unknown as AddressType;

  return address;
};

