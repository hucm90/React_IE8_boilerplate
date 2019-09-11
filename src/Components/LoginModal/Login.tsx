import React, { Component } from 'react';
import Style from './Login.module.scss';

import Input from 'Components/Input';

import { login, wxChatLogin } from 'Service/B2C/apis';

const { InputGroup } = Input;

interface LoginState {
    account: string;
    password: string;
    errorMessage: string;
}

interface LoginProps {
    toggleType: (type: string) => void;
}

class Login extends Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            account: "",
            password: "",
            errorMessage: "",
        };
    }

    changeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            account: e.target.value
        });
    };
    changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.target.value
        });
    };

    doLogin = () => {
        if (!this.state.account) {
            this.setState({ errorMessage: "请填写手机号！" });
            return;
        }
        if (!this.state.password) {
            this.setState({ errorMessage: "请填写密码！" });
            return;
        }
        login(this.state.account, this.state.password, 0)
            .then(() => window.location.reload())
            .catch(err => this.setState({ errorMessage: err }));
    };

    doWechatLogin() {
        let redirectUri = encodeURIComponent(`${window.location.origin}/wechatReg/${encodeURIComponent(window.location.href)}`);
        wxChatLogin().then(res => {
            window.location.href = `https://open.weixin.qq.com/connect/qrconnect?appid=${res.appId}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_login&state=dongcai#wechat_redirect`;
        });
    }

    render() {
        return (
            <div className={Style.Login}>
                <h1 className={Style.Title}>用户登录</h1>
                <div className={Style.Error}>{this.state.errorMessage}</div>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="手机号"
                        name="account"
                        value={this.state.account}
                        onChange={this.changeAccount}
                    />
                    <Input
                        type="password"
                        placeholder="密码"
                        name="password"
                        value={this.state.password}
                        onChange={this.changePassword}>
                        <span onClick={() => { this.props.toggleType('ResetPwd') }} className={Style.resetPwdLink}>忘记密码</span>
                    </Input>
                </InputGroup>
                <button className={Style.Button} onClick={this.doLogin}>登陆</button>
                <p className={Style.Register}>新用户，<span className={Style.link} onClick={() => { this.props.toggleType('Register') }}>快速注册</span></p>
                <p className={Style.Wechat}>其他登录方式<img onClick={this.doWechatLogin} src={require('./img/wechat.png')} alt=""></img></p>
            </div>
        );
    }
}

export default Login;
