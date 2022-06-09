import React, { useState, useMemo } from 'react';
import AutoCar from './Car/AutoCar';
import NormalCar from './Car/NormalCar';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import FaceIcon from '@mui/icons-material/Face';
import styles from './car.scss';
import classNames from 'classnames/bind';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

//! Render
const KindOfCar = () => {
    const cx = classNames.bind(styles);
    const [activeTab, setActiveTab] = useState('auto');
    const renderRightContent = useMemo(() => {
        switch (activeTab) {
            case 'auto':
                return <AutoCar />;
            case 'normal':
                return <NormalCar />;
            default:
                return null;
        }
    }, [activeTab]);
    return (
        <div className={cx('container_car')}>
            <div className={cx('swicth_type_car')}>
                <div className={cx('auto_car')} onClick={() => setActiveTab('auto')}>
                    <ElectricCarIcon className={cx('auto_car_icon')}/>
                    <div className={cx('auto_car_text')} isActive={activeTab === 'auto'}>
                        Xe tự lái
                    </div>
                    {activeTab === 'auto' && (
                        <DoubleArrowIcon style={{ fontSize: '3rem', position: 'absolute', top: '35%', right: 5 }} />
                    )}
                </div>
                <div className={cx('normal_car')} onClick={() => setActiveTab('normal')}>
                    <FaceIcon className={cx('normal_car_icon')} />
                    <div className={cx('normal_car_text')} isActive={activeTab === 'normal'}>
                        Xe có tài xế
                    </div>
                    {activeTab === 'normal' && (
                        <DoubleArrowIcon style={{ fontSize: '3rem', position: 'absolute', top: '35%', right: 5 }} />
                    )}
                </div>
            </div>
            {renderRightContent && <div className={cx('location')}>{renderRightContent}</div>}
        </div>
    );
};

export default KindOfCar;
