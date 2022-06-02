import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import Term from './Term';
import Pay from '~/assets/images/pay.jpg';
const cx = classNames.bind(styles);

const Footer = () => {
    const data = [
        {
            title: 'Chính sách',
            content: [
                { id: 1, detail: 'Giới thiệu về Mioto' },
                { id: 2, detail: 'Chính sách và quy định' },
                { id: 3, detail: 'Quy chế hoạt động' },
                { id: 4, detail: 'Bảo mật thông tin' },
                { id: 5, detail: 'Giải quyết tranh chấp' },
            ],
        },
        {
            title: 'Tìm hiểu thêm',
            content: [
                { id: 1, detail: 'Hướng dẫn chung' },
                { id: 2, detail: 'Hướng dẫn đặt xe' },
                { id: 3, detail: 'Hướng dẫn dành cho chủ xe' },
                { id: 4, detail: 'Hướng dẫn thanh toán' },
                { id: 5, detail: 'Hỏi và trả lời' },
                { id: 6, detail: 'Mioto blog' },
            ],
        },
        {
            title: 'Đối tác',
            content: [
                { id: 1, detail: 'Đăng ký chủ xe Mioto' },
                { id: 2, detail: 'Đăng ký GPS MI-TRACK 1.0' },
                { id: 3, detail: 'Đăng ký Bảo hiểm vật chất & Bảo hiểm TNDS xe ô tô' },
            ],
        },
    ];
    return (
        <>
            <div className={cx('footer')}>
                <div className={cx('col-1')}>
                    <a className={cx('avt')} href="/"></a>
                    <div className={cx('icon')}>
                        <a href="/">
                            <FacebookIcon fontSize="large" />
                        </a>
                        <a href="/">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="/">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="/">
                            <GoogleIcon fontSize="large" />
                        </a>
                        <a href="/">
                            <YouTubeIcon fontSize="large" />
                        </a>
                        <a href="/">
                            <AppleIcon fontSize="large" />
                        </a>
                    </div>
                </div>
                <div className={cx('col-2')}>
                    {data.map((item, index) => {
                        return <Term data={item} />;
                    })}
                </div>
            </div>
            <div className={cx('bottom-footer')}>
                <div className={cx('left')}>
                    <a href="#">
                        <img src={Pay} />
                    </a>
                </div>
                <div className={cx('right')}>
                    <div class="fix-img">
                        <a
                            href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=41067"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.mioto.vn/static/media/bo-cong-thuong.dd6d6139.png"
                                alt="Mioto - Thuê xe tự lái"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('last-footer')}>
                <div className={cx('col-1')}>
                    <p>© Công ty Cổ Phần Mioto Việt Nam</p>
                </div>
                <div className={cx('col-2')}>
                    <ul class="nav-footer">
                        <li>
                            <a>
                                Địa chỉ: Tầng 2, Hà Đô Airport Building - Số 2 Hồng Hà, Phường 2, Quận Tân Bình, Thành
                                phố Hồ Chí Minh.
                            </a>
                        </li>
                    </ul>
                    <ul className={cx('ft1')}>
                        <li>
                            <a>Mã số thuế: 0314714661</a>
                        </li>
                        <li>
                            <a>Email: contact@mioto.vn</a>
                        </li>
                        <li>
                            <a href="tel:19009217">Điện thoại: 1900 9217 (9AM-9PM T2-T7)</a>
                        </li>
                    </ul>
                    <ul className={cx('ft2')}>
                        <li>
                            <a>Tên TK: CT CP MIOTO VIỆT NAM </a>
                        </li>
                        <li>
                            <a>Số TK: 0721-0006-52087 </a>
                        </li>
                        <li>
                            <a>Ngân hàng Vietcombank - CN Kỳ Đồng</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
