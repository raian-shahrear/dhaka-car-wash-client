import {
    createApi,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { ApiUrl } from "@/config";

const baseQuery = fetchBaseQuery({
    baseUrl: `${ApiUrl}/api`,
    credentials: "include",
    prepareHeaders: (headers, api) => {
      const token = (api.getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQuery,
    tagTypes: ["user", "review"],
    endpoints: () => ({}),
  });