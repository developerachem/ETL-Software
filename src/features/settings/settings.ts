import { API } from "../API/API";

export const Settings = API.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => ({
        method: "GET",
        url: "/settings",
      }),
    }),

    createSettings: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/settings",
        body: data,
      }),
    }),
  }),
});

export const { useGetSettingsQuery, useCreateSettingsMutation } = Settings;
