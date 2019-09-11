import React from 'react';
import { Link } from '@reach/router';

import Style from './Breadcrumbs.module.scss';

interface Breadcrumb {
  cateId: string
  title: string
}

interface BreadcrumbsProps {
  list: Array<Breadcrumb>
  current: string
}

const Breadcrumbs = ( props: BreadcrumbsProps ) => {
  return (
    <div className={Style.Breadcrumbs}>
      {
        props.list.map(item => {
          return <Link key={item.title} to={`/Course/${item.cateId}`}>{item.title}</Link>
        })
      }
      <span>{props.current}</span>
    </div>
  );
}

export default Breadcrumbs;
