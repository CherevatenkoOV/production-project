import React, {useCallback, useState} from 'react';
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import {Modal} from "6-shared/ui/Modal/Modal";
import {Button, ButtonVariant} from "6-shared/ui/Button/Button";

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button variant={ButtonVariant.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Log In')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus, ad amet atque fugit hic
                ipsam ipsum laboriosam magnam magni neque nesciunt nobis obcaecati perspiciatis quisquam ratione
                reprehenderit totam?
            </Modal>
        </div>
    );
};

export default Navbar;
