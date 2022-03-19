import React from 'react';
import { useNavigate } from 'react-router-dom';
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
            <a className="active" href="/home">
                - View Student
            </a>
            <a href="/addStudent">- Add Student</a>
            <a onClick={loggingOut}>- Logout</a>
        </div>
    );
}

export default Sidebar;
