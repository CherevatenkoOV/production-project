import React from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './PageError.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "6-shared/ui/Button/Button";

interface PageErrorProps {
    className?: string
}

const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation('page-error')
    const reloadPage = () => {
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Error occurred')}</p>
            <Button onClick={reloadPage}>
                {t('Update page')}
            </Button>
        </div>
    );
};

export default PageError;