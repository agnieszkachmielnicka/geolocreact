import { Navigate  } from 'react-router';
import React, { Component }  from 'react';

export default function LogoutComponent(props) {
    localStorage.removeItem('token')
    props.handleLogout()
    return (<div><Navigate to="/" /></div>)
}