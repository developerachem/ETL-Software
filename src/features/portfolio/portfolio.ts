import { API } from "../API/API";

export const PortfolioService = API.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: (params) => ({
        method: "GET",
        url: "/portfolio",
        params,
      }),
      providesTags: ["Portfolio"],
    }),

    createPortfolio: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/portfolio",
        body: data,
      }),
      invalidatesTags: ["Portfolio"],
    }),

    deletePortfolio: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/portfolio/${id}`,
      }),
      invalidatesTags: ["Portfolio"],
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useCreatePortfolioMutation,
  useDeletePortfolioMutation,
} = PortfolioService;
