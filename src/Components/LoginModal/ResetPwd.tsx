import React, { Component } from 'react';
import Style from './Login.module.scss';

import Input from 'Components/Input';
import { getMobileCode, resetPassword, getPicCode } from 'Service/B2C/apis';

const { InputGroup } = Input;

interface ResetPwdState {
    account: string;
    captcha: string;
    smsCode: string;
    password: string;
    errorMessage: string;
    formStep: number;
    smsCountDown: number;
}

interface LoginProps {
    toggleType: (type: string) => void;
}

class ResetPwd extends Component<LoginProps, ResetPwdState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            account: "",
            captcha: "",
            smsCode: "",
            password: "",
            errorMessage: "",
            formStep: 0,
            smsCountDown: 0,
        };
    }

    changeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            account: e.target.value
        });
    };

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

    nextStep = () => {
        this.sendSmsCode();
        this.setState({ formStep: this.state.formStep + 1 });
    };

    resetPassword = () => {
        resetPassword(this.state.account, this.state.password, this.state.smsCode)
            .then(() => this.setState({ formStep: this.state.formStep + 1 }))
            .catch(err => this.setState({ errorMessage: err }));
    };

    render() {
        return (
            <div className={Style.Login}>
                <h1 className={Style.Title}>找回密码</h1>
                <div className={Style.Error}>{this.state.errorMessage}</div>
                {this.state.formStep === 0 &&
                <>
                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="手机号"
                            name="account"
                            value={this.state.account}
                            onChange={this.changeAccount}
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
                    </InputGroup>
                    <button className={Style.Button} onClick={this.nextStep}>下一步</button>
                </>
                }
                {
                    this.state.formStep === 1 &&
                    <>
                        <InputGroup>
                            <Input
                                type="text"
                                placeholder="请输入短信验证码"
                                name="smsCode"
                                value={this.state.smsCode}
                                onChange={(e) => this.setState({ smsCode: e.target.value })} >
                                <button className={Style.SmsCode} onClick={this.sendSmsCode}>{this.state.smsCountDown === 0 ? '获取验证码' : `${this.state.smsCountDown} 秒后获取`}</button>
                            </Input>
                            <Input
                                type="password"
                                placeholder="新密码"
                                name="password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </InputGroup>
                        <button className={Style.Button} onClick={this.resetPassword}>提交</button>
                    </>
                }
                {
                    this.state.formStep === 2 &&
                    <div className={Style.resetSuccess}>
                        <p>密码找回成功</p>
                        <button className={Style.Button} onClick={() => this.props.toggleType('Login')}>重新登陆</button>
                    </div>
                }
            </div>
        );
    }
}

export default ResetPwd;
