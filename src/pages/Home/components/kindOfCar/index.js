import React, { useState, useMemo } from 'react';
import AutoCar from './Car/AutoCar';
import NormalCar from './Car/NormalCar';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import FaceIcon from '@mui/icons-material/Face';
import styles from './Banner.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//! Render
const KindOfCar = () => {
    const [activeTab, setActiveTab] = (useState < 'auto') | ('normal' > 'auto');
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
        <div className={cx('')}>
            <div className={cx('')} styleCustom={{ backgroundColor: '#F3F4F6', padding: '21px 24px' }}>
                <div className={cx('')} onClick={() => setActiveTab('auto')}>
                    <ElectricCarIcon classes={{}} />
                    <div className={cx('')} isActive={activeTab === 'auto'}>
                        Xe tự lái
                    </div>
                </div>
                <div className={cx('')} onClick={() => setActiveTab('normal')}>
                    <FaceIcon classes={{}} />
                    <div className={cx('')} isActive={activeTab === 'normal'}>
                        Xe có tài xế
                    </div>
                </div>
            </div>
            <div className={cx('')}>{renderRightContent}</div>
        </div>
    );
};

export default KindOfCar;
