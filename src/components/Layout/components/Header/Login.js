import * as React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
const theme = createTheme();

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" minWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h3" sx={{ fontWeight: 'bolder' }}>
                        Đăng nhập
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            placeholder="Email"
                            type="email"
                            id="Email"
                            InputProps={{
                                style: { fontSize: 15 },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutlineIcon sx={{ color: 'green' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            placeholder="Mật Khẩu"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                style: { fontSize: 15 },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon sx={{ color: 'green' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Link href="#" variant="body2" sx={{ fontSize: 'larger' }}>
                            Quên mật khẩu?
                        </Link>
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            fullWidth
                            sx={{ mt: 3, mb: 2, padding: '1.5rem 0', fontSize: '15px', fontWeight: 'bolder' }}
                        >
                            Đăng nhập
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2" sx={{ fontSize: 'larger' }}>
                                    {'Bạn chưa là thành viên? ? Hãy đăng kí ngay!'}
                                </Link>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: 2 }} />
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                            align="center"
                            sx={{ fontSize: 'larger', mt: 2, mb: 2 }}
                        >
                            Hoặc đăng nhập bằng tài khoản
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Button
                                variant="contained"
                                startIcon={<FacebookIcon />}
                                sx={{ padding: '1rem 4rem', fontSize: 'larger' }}
                            >
                                Facebook
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                startIcon={<GoogleIcon />}
                                sx={{ padding: '1rem 4rem', fontSize: 'larger' }}
                            >
                                Google
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
