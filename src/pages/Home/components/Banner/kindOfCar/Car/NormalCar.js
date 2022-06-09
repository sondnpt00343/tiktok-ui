import * as React from 'react';
import { TextField, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import styles from './auto.scss';
import classNames from 'classnames/bind';
import ModalBox from '~/GlobalComponents/StyleComponents/Modal/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 0,
    p: 4,
};
export default function NormalCar() {
    const cx = classNames.bind(styles);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //! Data
    const Dumydata = {
        id: 0,
        img: 'https://www.motofoto.in/images/search-car.gif',
        title: 'Giới thiệu',
        detail: '- Tài xế sẽ đón và đưa bạn di chuyển đến các địa điểm trong cùng thành phố - Bạn không cần nhập Điểm đến, hãy trao đổi lộ trình mong muốn với Tài xế. - Giá thuê của chuyến đi được tính theo thời gian bạn lựa chọn trên ứng dụng, đã bao gồm tiền tài xế, xăng xe, phí qua đêm.',
    };

    //! Render
    return (
        <>
            <Autocomplete
                className={cx('container_tag')}
                id="combo-box-demo"
                options={topFilms}
                renderInput={(params) => (
                    <TextField
                        className={cx('city_input')}
                        fullWidth
                        {...params}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FindReplaceIcon className="icon" />
                                </InputAdornment>
                            ),
                        }}
                        size="medium"
                        variant="standard"
                        placeholder="Tôi muốn đón tại..."
                    />
                )}
            />
            <h6>
                Di chuyển trong thành phố.
                <Button onClick={handleOpen} className={cx('button_more')}>
                    Tìm hiểu thêm
                </Button>
                <ModalBox
                    img={Dumydata.img}
                    title={Dumydata.title}
                    detail={Dumydata.detail}
                    open={open}
                    handleClose={handleClose}
                    style={style}
                />
            </h6>
            <h5 className={cx('end_text')}>Thời gian</h5>
            <div className="end">
                <TextField className={cx('end_input')} id="standard-basic" fullWidth variant="standard" type="date" />
            </div>
            <Button
                fullWidth
                className="button_auto_search"
                variant="contained"
                color="success"
                sx={{ background: 'black', fontSize: 'medium', marginTop: '4rem' }}
            >
                TÌM XE NGAY
            </Button>
        </>
    );
}

const topFilms = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];
