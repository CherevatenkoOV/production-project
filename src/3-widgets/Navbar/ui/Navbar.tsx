import React from 'react';
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "6-shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}
const Navbar = ({className}: NavbarProps) => {
    console.log('Navbar set')
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink to='/' theme={AppLinkTheme.PRIMARY}>Main</AppLink>
                <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>About</AppLink>
            </div>

        </div>
    );
};

export default Navbar;
