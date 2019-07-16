import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import AppContext from 'Contexts/appcontext';
import Service from 'Service';
import { IGoodTeacher } from 'Service/B2C/Home';
import { LayoutLogin } from "Components/Layouts";
import { HttpAuthError } from "Lib/ErrorHandler";
import style from './home.scss';

interface PageHomeState {
    teacherList: IGoodTeacher[];
}

export default class PageHome extends React.Component<RouteComponentProps> {

    static contextType = AppContext;

    state: PageHomeState = {
        teacherList: []
    };

    componentDidMount() {
        Service.B2C.getCourseInfo(208).then(function (data) {
            console.log('success', data);
        }).catch(HttpAuthError);

        setTimeout(() => {
            this.context.setUserInfo({ userName: '孟浩', age: 100 });
        }, 3000);
    }

    render() {

        return (
            <LayoutLogin>
                <AppContext.Consumer>
                    {({ userName, setUserInfo }) => (
                        <div className={style.home}>
                            <h1>PageHome</h1>
                            <h2>hello {userName}</h2>
                            <img src={require('./img/logo.svg')} alt="" />

                            <ul>
                                {this.state.teacherList.map(teacher => (
                                    <li key={teacher.teacherId}>{teacher.teacherName}</li>
                                ))}
                            </ul>

                            <Link to="news">Read News List</Link>
                        </div>
                    )}
                </AppContext.Consumer>

            </LayoutLogin>
        );
    }
}
