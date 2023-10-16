import React, {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Button.module.scss'

export enum VariantButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    RED = 'red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: VariantButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        ...otherProps
    } = props
    return (

        <button
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

