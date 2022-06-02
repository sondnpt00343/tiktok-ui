import React from 'react';
import './Header.module.scss';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GroupIcon from '@mui/icons-material/Group';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Login from './Login';
import MenuIcon from '@mui/icons-material/Menu';
const cx = classNames.bind(styles);
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={cx('container-fluid')}>
            <div className={cx('nav')}>
                <a className={cx('avt')} href="/"></a>
                <div className={cx('content')}>
                    <a href="tel:19009217">
                        <span>
                            <CallOutlinedIcon fontSize="large" sx={{ marginBottom: '-5px' }} />
                        </span>
                        1900 9217
                    </a>
                    <a>
                        <span>
                            <MailOutlineIcon fontSize="large" sx={{ marginBottom: '-5px' }} />
                        </span>
                        contact@mioto.vn
                    </a>
                    <a href="https://www.messenger.com/t/mioto.vn">
                        <span>
                            <GroupIcon fontSize="large" sx={{ marginBottom: '-5px' }} />
                        </span>
                        Facebook
                    </a>
                </div>
                <div className={cx('guide')}>
                    <a href="/howitwork">
                        <span>
                            <ErrorOutlineIcon fontSize="large" sx={{ marginBottom: '-5px' }} />
                        </span>
                        Hướng dẫn
                    </a>
                </div>
                <div className={cx('login')}>
                    <button onClick={handleOpen}>Đăng nhập</button>
                    <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box sx={style}>
                            <Login />
                        </Box>
                    </Modal>
                </div>
                <div className={cx('signup')}>
                    <button>Đăng kí</button>
                </div>
            </div>
            <div className={cx('img')}>
                <img src="https://www.mioto.vn/static/media/left.64347807.svg" alt="" />
                <img src="https://www.mioto.vn/static/media/right.cb9f81e8.svg" alt="" />
            </div>
            <div className={cx('menu_icon')}>
                <MenuIcon fontSize='large'/>
            </div>
        </div>
    );
};

export default Header;
