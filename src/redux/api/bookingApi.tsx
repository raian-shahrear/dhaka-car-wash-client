import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    getAllBookings: builder.query({
      query: (queries) => {
        return {
          url: "/bookings",
          method: "GET",
          params: queries,
        };
      },
      providesTags: ["booking"],
    }),
    getUserExpiredBookings: builder.query({
      query: (queries) => {
        return {
          url: "/my-bookings/expired",
          method: "GET",
          params: queries,
        };
      },
      providesTags: ["booking"],
    }),
    getUserUpcomingBookings: builder.query({
      query: () => {
        return {
          url: "/my-bookings/upcoming",
          method: "GET",
        };
      },
      providesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetUserExpiredBookingsQuery,
  useGetUserUpcomingBookingsQuery,
} = bookingApi;
