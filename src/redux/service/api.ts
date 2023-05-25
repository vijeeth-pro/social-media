import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../index';

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_LOCAL_URL as string,
    // baseUrl: import.meta.env.VITE_PROD_URL as string,
    prepareHeaders: (headers, { getState }) => {
        const token =( getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
    tagTypes: [],
})