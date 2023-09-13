import React from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss'
import {useTranslation} from "react-i18next";

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation('not-found-page')
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page Not Found')}
        </div>
    );
};

export default NotFoundPage;