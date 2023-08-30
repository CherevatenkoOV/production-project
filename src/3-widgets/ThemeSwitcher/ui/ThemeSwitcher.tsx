import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "1-app/providers/ThemeProvider";
import React, {FC} from "react";
import ThemeSwitcherIcon from "6-shared/assets/icons/theme-switcher.svg"
import Button, {VariantButton} from "6-shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {


    const {
        className,
        children,
        ...otherProps
    } = props;
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            variant={VariantButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            {...otherProps}
            onClick={toggleTheme}
        >
            <ThemeSwitcherIcon className={classNames(cls.icon)}/>
        </Button>
    );
};

export default ThemeSwitcher;