import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../services/userService';
import './style.css';

function Sidebar({ auth }) {
    const navigate = useNavigate();

    const loggingOut = async () => {
        try {
            await logout();
            auth();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div class="sidebar">
            <h3>Students</h3>
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                to="/home"
            >
                - View Student
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                to="/addStudent"
            >
                - Add Student
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                onClick={loggingOut}
                to="/"
            >
                - Logout
            </NavLink>
        </div>
    );
}

export default Sidebar;
