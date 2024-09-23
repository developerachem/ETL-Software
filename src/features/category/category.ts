import { API } from "../API/API";

export const CategoryService = API.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        method: "GET",
        url: "/category/all",
      }),
    }),

    getCategoryForAdmin: builder.query({
      query: (params) => ({
        method: "GET",
        url: "/category",
        params,
      }),
      providesTags: ["Category"],
    }),

    createCategory: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/category",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/category/${id}`,
      }),
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation({
      query: (data) => ({
        method: "PATCH",
        url: `/category/${data.id}`,
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetCategoryForAdminQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = CategoryService;
