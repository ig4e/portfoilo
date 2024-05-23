import axios from 'axios';

export const STRAPI_REST_API = process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace(
  '/graphql',
  '/api',
);

export const strapi = axios.create({
  baseURL: STRAPI_REST_API,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_ADMIN_KEY}`,
  },
});
