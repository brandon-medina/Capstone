import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://fakestoreapi.com',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
 }),
  endpoints: (builder) => ({
    // Define an endpoint for logging in
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Add more endpoints here as needed
  }),
});

// Export hooks for usage in functional components
export const { useLoginUserMutation } = apiSlice;