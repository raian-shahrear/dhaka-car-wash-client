import { baseApi } from "./baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSlot: builder.mutation({
      query: (data) => ({
        url: "/services/slots",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["slot"],
    }),
    getAllSlot: builder.query({
      query: (queries) => {
        return {
          url: "/slots",
          method: "GET",
          params: queries,
        };
      },
      providesTags: ["slot"],
    }),
    getSlotByServiceId: builder.query({
      query: (id) => {
        return {
          url: `/slots/${id}`,
          method: "GET"
        };
      },
      providesTags: ["slot"],
    }),
    updateSlot: builder.mutation({
      query: (data) => {
        return {
          url: `/slots/${data.id}`,
          method: "PATCH",
          body: data.data,
        };
      },
      invalidatesTags: ["slot"],
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetAllSlotQuery,
  useGetSlotByServiceIdQuery,
  useUpdateSlotMutation,
} = slotApi;
