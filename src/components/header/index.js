import React, { useState } from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Fade,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/userService';

function Header({ auth }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const loggingOut = async () => {
        try {
            await logout();
            auth();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    const goToHome = async () => {
        try {
            // navigate('/home');
            setAnchorEl(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            {/* <MenuItem onClick={addUser}>Add User</MenuItem> */}
                            <hr />
                            <MenuItem
                                style={{ paddingRight: '10px' }}
                                onClick={goToHome}
                            >
                                User Data
                            </MenuItem>
                            <hr />
                            <MenuItem
                                style={{ paddingRight: '10px' }}
                                onClick={loggingOut}
                            >
                                Logout
                            </MenuItem>
                        </Menu>
                        <Typography
                            variant="h6"
                            color="inherit"
                            component="div"
                        >
                            Users
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Header;
