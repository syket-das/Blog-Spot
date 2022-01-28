import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    url: 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        url: 'users/login',
        method: 'POST',
        body: user,
      }),
    }),
    signupUser: builder.mutation({
      query: (user) => ({
        url: 'users/',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});
export default appApi;
// 19:39  => 2nd
