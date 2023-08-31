import React from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import Button, {VariantButton} from "6-shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    function toggle() {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            variant={VariantButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};

export default LangSwitcher;