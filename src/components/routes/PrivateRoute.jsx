import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return (
    <div>
      {currentUser !== null ? <Outlet /> : <Navigate to="/login" replace />}
    </div>
  );
}
