import React from 'react'
import { Navigate } from 'react-router-dom';


export default function RequireAuth({ children }) {
    let auth = localStorage.getItem('token')
  
    if (!auth) {
      return <Navigate to="/login"/>;
    } 
    return children;
}