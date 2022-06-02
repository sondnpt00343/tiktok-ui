import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Term = ({ data }) => {
    return (
        <div className={cx('term-container')}>
            <h5>{data.title}</h5>
            <ul>
                {data.content.map((item, index) => {
                    return <li key={index}>{item.detail}</li>;
                })}
            </ul>
        </div>
    );
};

export default Term;
