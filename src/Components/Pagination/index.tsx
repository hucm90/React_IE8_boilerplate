import React from 'react';
import style from './pagination.scss';

interface PaginationProps {
    current: number;  // 当前页数
    pageSize: number; // 每页条数
    total: number; // 数据总数
    disabled: boolean; // 禁用分页
    hideOnSinglePage: boolean; // 只有一页时是否隐藏分页器
    onChange: (current: number) => void;
}

export default class Pagination extends React.Component<PaginationProps> {

    static defaultProps = {
        current: 1,
        disabled: false,
        hideOnSinglePage: false,
    };

    isDisabled = (page: number) => {
        return this.props.disabled;
    };

    isCurrent = (page: number) => {
        return this.props.current === page;
    };

    goNext = () => {
        if (this.props.disabled) return;
        const pageCount = Math.ceil(this.props.total / this.props.pageSize);
        this.props.onChange(Math.min(this.props.current + 1, pageCount));
    };

    goPrev = () => {
        if (this.props.disabled) return;
        this.props.onChange(Math.max(this.props.current - 1, 1));
    };

    goPage = (page: number) => {
        if (this.isDisabled(page)) return;
        this.props.onChange(page);
    };

    render() {
        const pageCount = Math.ceil(this.props.total / this.props.pageSize);

        if (pageCount === 1 && this.props.hideOnSinglePage) return null;

        return (
            <div className={style.pagination}>
                <ul>
                    <li onClick={() => this.goPrev()} className={`${style.item} ${this.isDisabled(1) ? style.disabled : ""}`}>&lt;</li>

                    {(new Array(pageCount).fill(1)).map((item, index) => (
                        <li
                            key={index}
                            onClick={() => this.goPage(index + 1)}
                            className={`${style.item} ${this.isCurrent(index + 1) ? style.current : ""} ${this.isDisabled(index + 1) ? style.disabled : ""}`}>{index + 1}
                        </li>
                    ))}

                    <li onClick={() => this.goNext()} className={`${style.item} ${this.isDisabled(1) ? style.disabled : ""}`}>&gt;</li>
                </ul>
            </div>
        );
    }
}
