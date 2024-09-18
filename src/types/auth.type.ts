import { ReactNode } from "react";

export type TUser = {
  userEmail: string;
  role: string;
  iat: number;
  exp: number;
};

export type TLoggedInUser = {
  _id: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  role: string;
  profile: string | undefined;
}

export type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};
