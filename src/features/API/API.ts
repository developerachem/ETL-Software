import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
    prepareHeaders: (headers) => {
      headers.set(
        "authorization",
        `Bearer ${localStorage.getItem("etl-auth-token") || null}`
      );
      return headers;
    },
  }),
  tagTypes: ["Category", "Portfolio", "Blog"],
  endpoints: () => ({}),
});
