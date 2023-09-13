import React from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './PageLoader.module.scss'
import {Loader} from "6-shared/Loader";

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};

export default PageLoader;