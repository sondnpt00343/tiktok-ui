import React from 'react';
import styles from './Banner.scss';
import classNames from 'classnames/bind';
import { Typography, Button, ButtonGroup } from '@mui/material';
import ModalBox from '~/GlobalComponents/StyleComponents/Modal/Modal';
import KindOfCar from '../../index';

//! Function
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 0,
    p: 4,
};
const cx = classNames.bind(styles);
export const Banner = () => {
    //! Data
    const Dumydata = {
        id: 0,
        img: 'https://www.mioto.vn/static/media/banner_insurance.c636e2d8.png',
        title: 'BẢO HIỂM CHUYẾN ĐI',
        detail: 'Nhằm nâng cao trải nghiệm an toàn và giảm thiểu tổn thất có thể xảy ra do rủi ro trong quá trình thuê xe, Mioto kết hợp với Bảo hiểm MIC và Bảo hiểm PJICO triển khai sản phẩm BẢO HIỂM CHUYẾN ĐI, dành riêng cho các giao dịch thuê xe tự lái trên Mioto.',
    };

    //! State
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //! Render
    return (
        <div className={cx('banner')}>
            <div className={cx('container_banner')}>
                <Typography
                    variant="h3"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{
                        mt: 10,
                        fontSize: '4rem',
                        width: '50vw',
                        fontWeight: 'bolder',
                        color: 'rgb(75, 77, 82)',
                    }}
                >
                    MIOTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH
                </Typography>
                <KindOfCar />
                <img src="https://n1-cstg.mioto.vn/g/2022/05/06/01/K5SEZ4UG.jpg" alt="" />
                <div className={cx('lastItemBanner')}>
                    <p className={cx('title')}>ĐỐI TÁC BẢO HIỂM</p>
                    <div className={cx('group-button')}>
                        <ButtonGroup variant="text" className={cx('group')}>
                            <Button sx={{ width: '25%' }} onClick={handleOpen}>
                                <img src="https://www.mioto.vn/static/media/global-care.a539f2c6.png" alt="" />
                            </Button>
                            <ModalBox
                                img={Dumydata.img}
                                title={Dumydata.title}
                                detail={Dumydata.detail}
                                open={open}
                                handleClose={handleClose}
                                style={style}
                            />
                            <Button sx={{ width: '25%' }} onClick={handleOpen}>
                                <img src="https://www.mioto.vn/static/media/l_pjico.398ce6c5.png" alt="" />
                            </Button>
                            <ModalBox
                                img={Dumydata.img}
                                title={Dumydata.title}
                                detail={Dumydata.detail}
                                open={open}
                                handleClose={handleClose}
                                style={style}
                            />
                            <Button sx={{ width: '25%' }} onClick={handleOpen}>
                                <img src="https://www.mioto.vn/static/media/global-care.a539f2c6.png" alt="" />
                            </Button>
                            <ModalBox
                                img={Dumydata.img}
                                title={Dumydata.title}
                                detail={Dumydata.detail}
                                open={open}
                                handleClose={handleClose}
                                style={style}
                            />
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};
