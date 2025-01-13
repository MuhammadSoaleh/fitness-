import React from 'react'
import { useAuth } from "../user/Auth";
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
export const Logout=()=> {
  
    
      const {LogoutUser}= useAuth();
      useEffect(()=>
      {
        LogoutUser();
      },[LogoutUser]);
    return <Navigate to="/login"/>
  
}


