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

    getBlogsAll: builder.query({
      query: (params) => ({
        method: "GET",
        url: "/blog/all",
        params,
      }),
    }),

    gteBlogBySlug: builder.query({
      query: (slug) => ({
        method: "GET",
        url: `/blog/slug/${slug}`,
      }),
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

    updateBlog: builder.mutation({
      query: ({ id, formData }) => {
        return {
          method: "PATCH",
          url: `/blog/${id}`,
          body: formData,
        };
      },
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useDeleteBlogsMutation,
  useCreateBlogMutation,
  useGetBlogsAllQuery,
  useGteBlogBySlugQuery,
  useUpdateBlogMutation,
} = blogs;
