import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["service"],
    }),
    getAllServices: builder.query({
      query: (queries) => {
        return {
          url: "/services",
          method: "GET",
          params: queries,
        };
      },
      providesTags: ["service"],
    }),
    getFeaturedServices: builder.query({
      query: () => {
        return {
          url: "/services/featured",
          method: "GET",
        };
      },
      providesTags: ["service"],
    }),
    getServiceList: builder.query({
      query: () => {
        return {
          url: "/services/service-list",
          method: "GET",
        };
      },
      providesTags: ["service"],
    }),
    getSingleService: builder.query({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "GET",
        };
      },
      providesTags: ["service"],
    }),
    updateService: builder.mutation({
      query: (data) => {
        return {
          url: `/services/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["service"],
    }),
    deleteService: builder.mutation({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useGetFeaturedServicesQuery,
  useGetSingleServiceQuery,
  useGetServiceListQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
