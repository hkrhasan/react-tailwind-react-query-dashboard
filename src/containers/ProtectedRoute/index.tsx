import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
