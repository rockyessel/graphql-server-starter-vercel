import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config({ path: '.env.local' });

const getEnvVariable = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`🔴 Cannot find ${name}`);
  return value;
};

// Input anything here, wanted to make sure it worked.
export const SAMPLE = getEnvVariable('SAMPLE');
