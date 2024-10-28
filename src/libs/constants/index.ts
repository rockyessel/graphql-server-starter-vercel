import { SYMBION_REST_API } from "../configs/env";

export const isVercelProduction = process.env.VERCEL === '1';

export const BASE_URL_ENDPOINT = isVercelProduction ? SYMBION_REST_API : 'http://localhost:9000';


