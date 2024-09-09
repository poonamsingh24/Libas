import React from "react";
import { useAuth } from "./hooks/useAuth";
import { toast } from "sonner";

export default function Logout() {
  const { logout } = useAuth();

  const logoutHandler = () => {
    logout();
    toast.success("Log out success full");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={logoutHandler}> LOGOUT</button>
    </div>
  );
}
