import React from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ButtonVariant} from "6-shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({className, short}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            variant={ButtonVariant.BACKGROUND_INVERTED}
            onClick={toggle}
        >
            {t(short ? 'Short language' : 'Language')}
        </Button>
    );
};

