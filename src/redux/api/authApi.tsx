import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getAllUsers: builder.query({
      query: (queries) => {
        return {
          url: "/auth/users",
          method: "GET",
          params: queries,
        };
      },
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/auth/user/${data.id}`,
          method: "PATCH",
          body: data.data,
        };
      },
      invalidatesTags: ["user"],
    }),
    updateUserRole: builder.mutation({
      query: (data) => {
        return {
          url: `/auth/user-role/${data.id}`,
          method: "PATCH",
          body: data.data,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useUpdateUserRoleMutation,
} = authApi;
