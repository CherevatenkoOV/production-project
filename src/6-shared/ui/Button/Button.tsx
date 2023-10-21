import React, {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Button.module.scss'

export enum ButtonVariant {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    RED = 'red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: ButtonVariant,
    square?: boolean,
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls[variant]]: true,
        [cls.square]: square,
        [cls[size]]: true
    }

    return (

        <button
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

