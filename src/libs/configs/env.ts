import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config({ path: '.env.local' });

/**
 * Token Secret
 * Represents the secret key used for token generation.
 * Ensure that the corresponding environment variable (TOKEN_SECRET) is set with the appropriate value.
 *
 * @example
 * // Setting TOKEN_SECRET in .env file
 * TOKEN_SECRET="your_token_secret"
 */
export const TOKEN_SECRET = String(process.env.APPLICATION_TOKEN_SECRET);
if (!TOKEN_SECRET) {
  throw new Error(
    'APPLICATION_TOKEN_SECRET is required in the environment variables.'
  );
}

/**
 * System Secret
 * Represents the secret key used for system-level operations.
 * Ensure that the corresponding environment variable (SYSTEM_SECRET) is set with the appropriate value.
 *
 * @example
 * // Setting SYSTEM_SECRET in .env file
 * SYSTEM_SECRET="your_system_secret"
 */
export const SYSTEM_SECRET = String(process.env.APPLICATION_SYSTEM_SECRET);
if (!SYSTEM_SECRET) {
  throw new Error(
    'APPLICATION_SYSTEM_SECRET is required in the environment variables.'
  );
}

/**
 * SYMBION_REST_API
 * Represents the constant that holds the value of the environment variable `SYMBION_REST_API`.
 * It is used to configure or access the Symbion REST API endpoint.
 *
 * @example
 * // Setting SYMBION_REST_API in .env file
 * SYMBION_REST_API="https://"
 */
export const SYMBION_REST_API = String(
  process.env.APPLICATION_SYMBION_REST_API
);
if (!SYMBION_REST_API) {
  throw new Error(
    'APPLICATION_SYMBION_REST_API is required in the environment variables.'
  );
}
