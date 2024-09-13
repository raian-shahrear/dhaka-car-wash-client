import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProtectedRoute, TUser } from "@/types";
import { verifyToken } from "@/utils/verifyToken";
import { Navigate } from "react-router-dom";

const ProtectedRouteForUser = ({ children, role }: TProtectedRoute) => {
  const reduxDispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  if (role !== undefined && role !== (user as TUser)?.role) {
    reduxDispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRouteForUser;
