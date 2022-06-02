import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import styles from './Modal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
//! Render
const ModalBox = ({ open, title, img, detail, style, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img src={img} alt="" className={cx('img-modal')} />
                {title && (
                    <Typography
                        variant="h4"
                        id="modal-modal-description"
                        sx={{ fontWeight: 'bolder', fontSize: 'x-larger', mb: 2 }}
                    >
                        {title}
                    </Typography>
                )}
                {detail && (
                    <Typography variant="p" id="modal-modal-description">
                        {detail}
                    </Typography>
                )}
            </Box>
        </Modal>
    );
};

export default ModalBox;
