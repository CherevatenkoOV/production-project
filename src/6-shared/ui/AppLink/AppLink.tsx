import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
import React from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps  {
    className?: string;
    theme?: AppLinkTheme;
}
const AppLink: FC<AppLinkProps> = (props) => {
    const {className, to, children, theme, ...otherProps} = props;
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;