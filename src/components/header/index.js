import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
    const userExists = localStorage.getItem('user');
    const user = userExists ? JSON.parse(userExists) : undefined;

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '15px',
                borderBottom: '1px solid lightgray',
            }}
        >
            <h3>Students</h3>
            <div style={{ display: 'flex', cursor: 'pointer' }}>
                <PersonIcon />
                <p style={{ paddingLeft: '10px' }}>{user}</p>
            </div>
        </div>
    );
}

export default Header;
