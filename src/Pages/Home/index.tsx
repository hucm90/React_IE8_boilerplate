import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import AppContext from 'Contexts/appcontext';
import Service from 'Service';
import { IGoodTeacher } from 'Service/B2C/Home';
import style from './home.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Timer = import.ensure('./Timer');

interface PageHomeState {
    teacherList: IGoodTeacher[];
}

class AsyncComponent extends React.Component {

    state = {
        loaded: false
    };

    Timer: any = null;
    
    componentDidMount(): void {

        import('./Timer').then((Component: any) => {
            this.Timer = Component.default;
            this.setState({ loaded: true });
        });

    }

    render() {
        if (this.state.loaded) return <this.Timer />;
        else return null;
    }
}


export default class PageHome extends React.Component<RouteComponentProps> {

    static contextType = AppContext;

    state: PageHomeState = {
        teacherList: []
    };

    componentDidMount() {
        // Service.ClassRoom.currentStudyPlan().then( data => this.setState({data}));
        //
        Service.B2C.getCourseInfo(208);
        //
        // Service.B2C.getGoodTeacherList()
        //     .then((data) => console.log(data))
        //     .catch((response: RequestResponse) => console.log(response.request.status));

        // axios.get('https://www.easy-mock.com/mock/5b0b61d81a903d20902bee9b/mock/getCarouselList').then(console.log);



        // let teacherList = await Service.B2C.getGoodTeacherList();
        // this.setState({ teacherList });
        //
        // let plateList = await Service.B2C.getCarouselList();
        // console.log(plateList);
    }

    render() {

        return (
            <div className={style.home}>
                <AsyncComponent />
                <h1>PageHome</h1>
                <h2>hello {this.context.userName}</h2>
                <img src={require('./img/logo.svg')} alt="" />

                <ul>
                    {this.state.teacherList.map(teacher => <li key={teacher.teacherId}>{teacher.teacherName}</li>)}
                </ul>

                <Link to="news">Read News List</Link>
            </div>
        );
    }
}
