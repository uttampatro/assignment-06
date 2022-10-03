import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/userService';

const theme = createTheme();

function Register({ auth }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setLoading(true);

            const user = await register({ email, password });
            // console.log(user);
            if (!user) {
                alert('Email Already Exist!');
            } else {
                auth();
                navigate('/home');
            }
            setLoading(false);
        } catch (error) {
            console.log('Invalid Credential');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        border: '1px solid gray',
                        borderRadius: '2px',
                        marginTop: '80px',
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        style={{ margin: '10px', backgroundColor: 'lightRed' }}
                    >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        {!loading ? (
                            <>
                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{
                                        marginTop: '30px',
                                        padding: '3px',
                                        marginBottom: '20px',
                                        backgroundColor: 'lightblue',
                                        color: 'black',
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </>
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '30px',
                                    height: '35px',
                                    marginBottom: '15px',
                                    borderRadius: '8px',
                                }}
                            >
                                <CircularProgress
                                    sx={{
                                        color: 'black',
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Register;
