import React from 'react';
import { LazyLoad } from 'Lib/LazyLoad';
import { Article } from "Components/Skeleton";

// @ts-ignore
export const Page404 = LazyLoad(() => require.ensure([], () => require('./404').default));
// @ts-ignore
export const PageHome = LazyLoad(() => require.ensure([], () => require('./Home').default), <Article />);
// @ts-ignore
export const PageNews = LazyLoad(() => require.ensure([], () => require('./News').default));


export let PageDemo: any = () => null;

// if (process.env.NODE_ENV === 'development') {
//     // @ts-ignore
//     PageDemo = LazyLoad(() => require.ensure([], () => require('./Demo').default));
// }
// @ts-ignore
PageDemo = LazyLoad(() => require.ensure([], () => require('./Demo').default));
