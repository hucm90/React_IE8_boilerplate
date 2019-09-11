import React, { Component } from 'react';
import Style from './Login.module.scss';

import Input from 'Components/Input';

import { getMobileCode, getPicCode } from 'Service/B2C/apis';

const { InputGroup } = Input;

interface RegisterState {
    nick: string;
    account: string;
    referralCode: string;
    captcha: string;
    smsCode: string;
    password: string;
    errorMessage: string;
    smsCountDown: number;
}

interface RegisterProps {
    toggleType?: any;
}

class Register extends Component<RegisterProps, RegisterState> {

    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            nick: "",
            account: "",
            referralCode: "",
            captcha: "",
            smsCode: "",
            password: "",
            errorMessage: "",
            smsCountDown: 0,
        };
    }

    sendSmsCode = () => {
        if (this.state.smsCountDown !== 0) return;
        this.setState({ errorMessage: '' });
        getMobileCode(this.state.account, this.state.captcha)
            .then(() => {
                this.setState({ smsCountDown: 60 });
                let timer = setInterval(() => {
                    if (this.state.smsCountDown === 1) clearInterval(timer);
                    this.setState({ smsCountDown: this.state.smsCountDown - 1 });
                }, 1000);
            })
            .catch(err => this.setState({ errorMessage: err }));
    };

    register = () => {
        // let errorMessage = ''
        // if(this.state.nick==='') errorMessage = '昵称不能为空！'
        // else if(this.state.account==='') errorMessage = '手机号不能为空！'
        // else if(this.state.captcha==='') errorMessage = '验证码不能为空！'
        // else if(this.state.smsCode==='') errorMessage = '短信验证码不能为空！'
        // else if(this.state.password==='') errorMessage = '密码不能为空！'
        // else{

        // }
        // this.setState({errorMessage: errorMessage})


    };

    render() {
        return (
            <div className={Style.Login}>
                <h1 className={Style.Title}>注册东财在线 <span>已有账号，<em className={Style.link} onClick={() => this.props.toggleType()}>去登录</em></span> </h1>
                <div className={Style.Error}>{this.state.errorMessage}</div>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="姓名"
                        name="nick"
                        value={this.state.nick}
                        onChange={(e) => this.setState({ nick: e.target.value })}
                    />
                    <Input
                        type="text"
                        placeholder="手机号"
                        name="account"
                        value={this.state.account}
                        onChange={(e) => this.setState({ account: e.target.value })}
                    />
                    <Input
                        type="text"
                        placeholder="推荐码（选填）"
                        name="referralCode"
                        value={this.state.referralCode}
                        onChange={(e) => this.setState({ referralCode: e.target.value })}
                    />
                    <Input
                        type="text"
                        placeholder="验证码"
                        name="captcha"
                        value={this.state.captcha}
                        onChange={(e) => this.setState({ captcha: e.target.value })}>
                        <img
                            className={Style.Captcha}
                            onClick={(e) => { e.currentTarget.src = getPicCode() }}
                            src={getPicCode()}
                            alt="captCha"
                        />
                    </Input>
                    <Input
                        type="text"
                        placeholder="短信验证码"
                        name="smsCode"
                        value={this.state.smsCode}
                        onChange={(e) => this.setState({ smsCode: e.target.value })}>
                        <button className={Style.SmsCode} onClick={this.sendSmsCode}>{this.state.smsCountDown === 0 ? '获取验证码' : `${this.state.smsCountDown} 秒后获取`}</button>
                    </Input>
                    <Input
                        type="password"
                        placeholder="6-8位密码，区分大小写"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                </InputGroup>
                <button className={Style.Button} onClick={this.register}>注册</button>
                <p className={Style.Register}>注册即同意东财在线 <span className={Style.link}>《用户协议》</span></p>
            </div>
        );
    }
}

export default Register;
