import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginUser) => ({
        url: 'auth/login',
        method: 'POST',
        body: loginUser,
      }),
    }),
    getProducts: builder.query({
      query: () => 'products'
    }),
    getProductDetail: builder.query({
      query: (productId) => `products/${productId}`,
    })
  }),
});

export const { useLoginUserMutation, useGetProductsQuery, useGetProductDetailQuery } = apiSlice;
