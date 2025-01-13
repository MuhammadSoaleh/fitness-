import React, { useEffect } from "react";
import { useAuth } from "../user/Auth";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const { LogoutUser } = useAuth();
  
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await LogoutUser(); // If LogoutUser is asynchronous
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    handleLogout();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};
