import React from 'react';
import style from './style.scss';
import { RouteComponentProps, Link } from '@reach/router';
import DemoSkeleton from "./pages/skeleton";
import DemoTab from "./pages/tab";
import DemoVideo from "./pages/video";
import DemoCheckBox from "./pages/checkbox";
import DemoRadio from "./pages/radio";
import DemoGrid from "./pages/grid";
import DemoPagination from "./pages/pagination";
import DemoModel from "./pages/model";
// import from ''

interface PageDemoProps extends RouteComponentProps{
    component?: string;
}

export default class PageDemo extends React.Component<PageDemoProps> {

    components = [

        { id: 'skeleton', component: DemoSkeleton },
        { id: 'pagination', component: DemoPagination },
        { id: 'checkbox', component: DemoCheckBox },
        { id: 'radio', component: DemoRadio },
        { id: 'grid', component: DemoGrid },

        { id: 'tab', component: DemoTab },
        { id: 'heading', component: DemoTab },
        { id: 'model', component: DemoModel },
        { id: 'upload', component: DemoTab },
        { id: 'video', component: DemoVideo },
        { id: 'tip', component: DemoTab },
        { id: 'carousel', component: DemoTab },
        { id: 'styles', component: DemoTab },
        { id: 'form', component: DemoTab },

    ].sort((itemA: any, itemB: any) => (itemA.id > itemB.id ? 1 : -1));

    render() {

        return (
            <div className="container">

                <ul className={style.nav}>
                    {this.components.map((item) => <li key={item.id}><Link to={"/demo/" + item.id}>{item.id}</Link></li>)}
                </ul>

                <div className={style.main}>
                    {this.components.filter(item => item.id === this.props.component).map((item) => <item.component key={item.id} />)}
                </div>
            </div>
        );
    }
}
