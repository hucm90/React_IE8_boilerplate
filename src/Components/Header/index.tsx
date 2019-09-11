import React from 'react';
import Style from './Header.module.scss';

const Header  = () => {
    return (
        <div className={Style.Header}>
            <div className="container">
                <a href="http://www.pgyer.com/etraining" target="_blank" rel="noopener noreferrer" className={Style.RightLink}>APP下载</a>
                <a href="/" className={Style.RightLink}>签到</a>
                <a href="/" className={Style.Logo}>
                    <img src="http://www.dufe.online/img/f68adef53ccfc13e0d1f77b75f2405f8.png" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Header;
