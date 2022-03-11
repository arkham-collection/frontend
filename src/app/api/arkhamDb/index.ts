import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Card } from "app/types/card"

export const arkhamDb = createApi({
  reducerPath: "arkhamDbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://arkhamdb.com/api/public"
  }),
  endpoints: builder => ({
    getCard: builder.query<Card, string>({
      query: code => `/card/${code}`
    }),
    getCards: builder.query<Card[], void>({
      query: () => "/cards"
    })
  })
})

export const { useGetCardsQuery, useGetCardQuery } = arkhamDb