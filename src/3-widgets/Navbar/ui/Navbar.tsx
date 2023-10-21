import React from 'react';
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {/*    Здесь были ссылки */}
        </div>
    );
};

export default Navbar;
