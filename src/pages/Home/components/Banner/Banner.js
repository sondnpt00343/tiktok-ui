import React from 'react';
import styles from './Banner.scss';
import classNames from 'classnames/bind';
import { Typography, Button, ButtonGroup } from '@mui/material';
import ModalBox from '~/GlobalComponents/StyleComponents/Modal/Modal';

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
    //! State
    const data = [
        'Với thiết kế trẻ trung, trang bị hiện đại cùng khả năng vận hành ổn định, Hyundai Accent luôn là dòng xe đô thị được nhiều khách hàng lựa chọn',
        'Cùng trải nghiệm những mẫu xe Hyundai Accent mới và đẹp nhất trên Mioto.',
        'Đặc biệt, từ ngày 30/5 đến hết ngày 12/6/2022, khi nhập mã ACCENT, quý khách sẽ tiết kiệm ngay 15% (tối đa 150k) khi thuê xe Hyundai Accent tại Mioto.',
    ];
    const Dumydata = {
        id: 0,
        img: 'https://www.mioto.vn/static/media/banner_insurance.c636e2d8.png',
        title: 'BẢO HIỂM CHUYẾN ĐI',
        detail: 'Nhằm nâng cao trải nghiệm an toàn và giảm thiểu tổn thất có thể xảy ra do rủi ro trong quá trình thuê xe, Mioto kết hợp với Bảo hiểm MIC và Bảo hiểm PJICO triển khai sản phẩm BẢO HIỂM CHUYẾN ĐI, dành riêng cho các giao dịch thuê xe tự lái trên Mioto.',
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //! Render
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
            <Button onClick={handleOpen} className={cx('sale_car')}>
                <img src="https://n1-cstg.mioto.vn/g/2022/05/06/01/K5SEZ4UG.jpg" alt="" />
            </Button>
            <div>
                <ModalBox
                    img="https://n1-cstg.mioto.vn/g/2022/05/06/01/K8CWQ4N7.jpg"
                    title="VỮNG TAY TỰ LÁI CÙNG MÃ ACCENT - GIẢM NGAY 15% KHI THUÊ XE HYUNDAI ACCENT TRÊN MIOTO"
                    detail={data}
                    open={open}
                    handleClose={handleClose}
                    style={style}
                />
            </div>
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
    );
};
