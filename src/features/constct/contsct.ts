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
  }),
});

export const { usePostContactMutation } = ContactService;
