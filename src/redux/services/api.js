import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const footballApi =createApi({
  reducerPath: 'footballApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api'
  }),
  endpoints: builder => ({
    getLeagues: builder.query({
      query: () => ({
        url: '/home',
        method: 'GET'
      })
    }),
    getClubs: builder.query({
      query: () => ({
        url: '/clubs',
        method: 'GET'
      })
    }),
    getFootballers: builder.query({
      query: page => ({
        url: `/footballers?page=${page}&pageSize=18`,
        method: 'GET'
      })
    }),
    getItems: builder.query({
      query: ({ listName, currentPage, pageSize }) => ({
        url: `/${listName}?page=${currentPage}&pageSize=${pageSize}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetLeaguesQuery, useGetClubsQuery, useGetFootballersQuery, useGetItemsQuery } = footballApi;