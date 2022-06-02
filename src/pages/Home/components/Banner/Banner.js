import React from 'react';
import styles from './Banner.scss';
import classNames from 'classnames/bind';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CardModal from './CardModal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 385,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const cx = classNames.bind(styles);
export const Banner = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={cx('banner')}>
            <Typography
                variant="h3"
                gutterBottom
                component="div"
                align="center"
                sx={{ mt: 10, fontSize: '4rem', width: '50vw', fontWeight: 'bolder' }}
            >
                MIOTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH
            </Typography>
            <div className={cx('rent-car')}>
                <div className={cx('modal')} onClick={handleOpen}>
                    <img src="https://n1-cstg.mioto.vn/g/2022/04/01/00/LSJKSAQB.jpg" alt="" />
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <CardModal/>
                        </Box>
                    </Fade>
                </Modal>

                <div className={cx('protect')}>
                    <Typography variant="h5" display="block" align="center" sx={{ fontWeight: 'bold' }}>
                        ĐỐI TÁC BẢO HIỂM
                    </Typography>
                    <div className={cx('box')}>
                        <div class="partner-logo__image">
                            <img
                                class="img-fluid"
                                src="https://www.mioto.vn/static/media/global-care.a539f2c6.png"
                                alt=""
                            />
                        </div>
                        <div class="partner-logo__image">
                            <img
                                class="img-fluid second"
                                src="https://www.mioto.vn/static/media/mic.ff5e2ba2.png"
                                alt=""
                            />
                        </div>
                        <div class="partner-logo__image">
                            <img
                                class="img-fluid"
                                src="https://www.mioto.vn/static/media/l_pjico.398ce6c5.png"
                                alt=""
                            />
                        </div>
                        {/* <img src="https://www.mioto.vn/static/media/mic.ff5e2ba2.png" alt="" />
                        <img src="https://www.mioto.vn/static/media/l_pjico.398ce6c5.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
