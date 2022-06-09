import * as React from 'react';
import { TextField, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import styles from './auto.scss';
import classNames from 'classnames/bind';

export default function AutoCar() {
    const cx = classNames.bind(styles);

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
                                    <AddLocationAltIcon className="icon" />
                                </InputAdornment>
                            ),
                        }}
                        size="medium"
                        variant="standard"
                        placeholder="Nhập thành phố, quận, địa chỉ..."
                    />
                )}
            />
            <h5 className={cx('start_text')}>Bắt đầu</h5>
            <div className="start">
                <TextField className={cx('start_input')} id="standard-basic" fullWidth variant="standard" type="date" />

                <TextField
                    className={cx('start_input')}
                    id="standard-basic"
                    fullWidth
                    variant="standard"
                    type="number"
                    placeholder="Thời gian xuất phát"
                />
            </div>
            <h5 className={cx('end_text')}>Kết thúc</h5>
            <div className="end">
                <TextField className={cx('end_input')} id="standard-basic" fullWidth variant="standard" type="date" />

                <TextField
                    className={cx('end_input')}
                    id="standard-basic"
                    fullWidth
                    variant="standard"
                    type="number"
                    placeholder="Thời gian Kết thúc"
                />
            </div>
            <Button
                fullWidth
                className="button_auto_search"
                variant="contained"
                color="success"
                sx={{ background: 'black', fontSize: 'medium', marginTop: '2rem' }}
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
