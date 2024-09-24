import { API } from "../API/API";

export const ContactService = API.injectEndpoints({
  endpoints: (builder) => ({
    postContact: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/contact",
        body: data,
      }),
    }),

    getContacts: builder.query({
      query: (params) => ({
        method: "GET",
        url: "/contact",
        params,
      }),
    }),
  }),
});

export const { usePostContactMutation, useGetContactsQuery } = ContactService;
