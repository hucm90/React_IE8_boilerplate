import React from 'react';
import Style from './UserBox.module.scss';
import { logOut } from 'Service/B2C/apis';

const UserBox = () => {
    return (
        <div className={Style.UserBox}>
            <div className={Style.outSideAvatar}>
                <img src={localStorage.getItem('photoUrl') || ''} alt="" />
            </div>
            <div className={Style.Popup}>
                <div className={Style.Box}>
                    <div className={Style.Top}>
                        <div className={Style.insideAvatar}>
                            <img src={localStorage.getItem('photoUrl') || ''} alt="" />
                        </div>
                        <div className={Style.accountInfo}>
                            <h1 className={Style.name}><a href="/Account">{localStorage.getItem('nick') || ''}</a></h1>
                            <p className={Style.account}><a href="/AccountManage">修改个人资料</a></p>
                        </div>
                    </div>
                    <ul className={Style.Links}>
                        <li className={`${Style.linkItem} ${Style.iconCourse}`}><a href="/AccountCourse">我的课程</a></li>
                        <li className={`${Style.linkItem} ${Style.iconTask}`}><a href="/AccountTask">我的任务</a></li>
                        <li className={`${Style.linkItem} ${Style.iconOrder}`}><a href="/AccountOrder">我的订单</a></li>
                        <li className={`${Style.linkItem} ${Style.iconMessage}`}><a href="/AccountMessage">我的消息</a></li>
                        <li className={`${Style.linkItem} ${Style.iconCoupon}`}><a href="/AccountCoupon">我的优惠券</a></li>
                        <li className={`${Style.linkItem} ${Style.iconEnterprise}`}><a href="/AccountCourse?tab=2">我的企业学习</a></li>
                    </ul>
                    <div className={Style.Bottom}>
                        <span onClick={() => logOut()} className={Style.logout}>退出</span>
                        <a href="/AccountManage?action=pass" className={Style.profile}>账号设置（修改密码）</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBox;
