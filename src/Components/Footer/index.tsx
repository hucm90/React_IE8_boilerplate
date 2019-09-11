import React from 'react';
import Style from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={Style.Footer}>
            <div className="container">
                <div className={Style.Left}>
                    <div className={Style.Logo}>
                        <img src="http://www.dufe.online/img/35443d25a8a4b943a2be6363fc55079c.png" alt="" />
                    </div>
                    <div className={Style.Links}>
                        <a href="/About" className={`${Style.Link} ${Style.Link1}`}>关于我们</a>
                        <a href="/Manual" className={`${Style.Link} ${Style.Link2}`}>使用指南</a>
                        <a href="/Faq" className={`${Style.Link} ${Style.Link3}`}>常见问题</a>
                    </div>
                </div>
                <div className={Style.Middle}>
                    <div className={Style.Qrcode}><img src={require('./img/qrcode1.jpg')} alt="东财在线微客服" /><h4>东财在线微客服</h4></div>
                    <div className={Style.Qrcode}><img src={require('./img/qrcode2.jpg')} alt="东财在线公众号" /><h4>东财在线公众号</h4></div>
                </div>
                <div className={Style.Right}>
                    <div className={Style.Links2}>
                        <a href="/FeedBack" className={`${Style.Link} ${Style.Link4}`}>反馈</a>
                        <a href="/" className={`${Style.Link} ${Style.Link5}`}>客服</a>
                        <a href="/" className={`${Style.Link} ${Style.Link6} ${Style.App}`}>
                            <span>APP</span>
                            <div className={Style.Popup}>
                                <div>
                                    <img src={require('./img/appqrcode.png')} alt="扫一扫下载APP" />
                                </div>
                                <p>扫一扫下载APP</p>
                            </div>
                        </a>
                    </div>
                    <p className={Style.ServiceTitle}>服务热线</p>
                    <p className={Style.ServiceTel}>400-0100-999</p>
                </div>
            </div>
            <div className={Style.CopyRight}>
          Copyright © 2016 东财在线 版权所有 辽ICP备10006930号    友情链接：
                <a href="http://www.edufe.com.cn/">东北财经大学网络教育学院</a>
                <br />
          技术支持： 大连东财科技发展有限公司
            </div>
        </div>
    );
};

export default Footer;
