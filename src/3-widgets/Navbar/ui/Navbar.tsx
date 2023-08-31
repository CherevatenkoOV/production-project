import React from 'react';
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "6-shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink to='/' theme={AppLinkTheme.PRIMARY}>{t('Main')}</AppLink>
                <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>{t('About')}</AppLink>
            </div>

        </div>
    );
};

export default Navbar;
