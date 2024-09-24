import { API } from "../API/API";

export const blogs = API.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (params) => ({
        method: "GET",
        url: "/blog",
        params,
      }),
      providesTags: ["Blog"],
    }),

    createBlog: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/blog",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),

    deleteBlogs: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/blog/${id}`,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useDeleteBlogsMutation,
  useCreateBlogMutation,
} = blogs;
