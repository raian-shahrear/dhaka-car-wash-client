import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getAllReviews: builder.query({
      query: (queries) => {
        return {
          url: "/reviews",
          method: "GET",
          params: queries,
        };
      },
      providesTags: ["review"],
    }),
    getSingleReview: builder.query({
      query: (queries) => {
        return {
          url: "/reviews/my-reviews",
          method: "GET",
          params: queries,
        };
      },
      providesTags: ["review"],
    }),
    updateReview: builder.mutation({
      query: (data) => {
        return {
          url: `/reviews/${data.id}`,
          method: "PATCH",
          body: data.data,
        };
      },
      invalidatesTags: ["review"],
    }),
    deleteReview: builder.mutation({
      query: (id) => {
        return {
          url: `/reviews/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
