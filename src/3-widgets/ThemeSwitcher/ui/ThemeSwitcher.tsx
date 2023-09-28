import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "1-app/providers/ThemeProvider";
import React, {FC, useEffect} from "react";
import {Button, VariantButton} from "6-shared/ui/Button/Button";
import ThemeSwitcherIcon from '6-shared/assets/icons/theme-switcher.svg'


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;
    const {theme, toggleTheme} = useTheme()
    
    return (
        <Button
            data-testid="theme-switcher"
            variant={VariantButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            {...otherProps}
            onClick={toggleTheme}
        >
            <ThemeSwitcherIcon
                className={classNames(cls.icon, {}, [])}
                data-testid="svg-icon"
            />
        </Button>
    );
};

